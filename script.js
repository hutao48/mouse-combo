(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Release metadata drives every version label and download link.
  fetch("release.json", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("release.json");
      return response.json();
    })
    .then((release) => {
      document.querySelectorAll("[data-release-version]").forEach((node) => {
        node.textContent = "v" + release.version;
      });
      document.querySelectorAll("[data-release-size]").forEach((node) => {
        node.textContent = release.size_text;
      });
      document.querySelectorAll("[data-release-hash]").forEach((node) => {
        node.textContent = release.sha256;
        node.title = release.sha256;
      });
      if (release.file) {
        const fileName = release.file.split("/").pop();
        document.querySelectorAll("[data-release-file]").forEach((node) => {
          node.textContent = fileName;
        });
        document.querySelectorAll("[data-download]").forEach((node) => {
          node.setAttribute("href", release.file);
          node.setAttribute("download", fileName);
        });
      }
    })
    .catch(() => {
      // Static fallback values remain when release.json is unavailable.
    });

  // Mobile menu: full height panel, staggered links, Escape to close.
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    let lastFocused = null;
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      menu.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      if (open) {
        lastFocused = document.activeElement;
        const first = menu.querySelector("a");
        if (first) window.setTimeout(() => first.focus(), 120);
      } else if (lastFocused) {
        lastFocused.focus();
      }
    };
    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
      if (
        event.key === "Tab" &&
        toggle.getAttribute("aria-expanded") === "true" &&
        header
      ) {
        const focusable = [
          ...header.querySelectorAll('a[href], button:not([disabled])'),
        ].filter((node) => node.getClientRects().length > 0);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  // Section and card reveals, once per element.
  const revealNodes = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  // Tagline: split into words or CJK characters, activate each as it crosses
  // a trigger line. Rebuild after every language change.
  const tagline = document.querySelector("[data-tagline]");
  let taglineObserver = null;
  const splitTagline = () => {
    if (!tagline) return;
    if (taglineObserver) {
      taglineObserver.disconnect();
      taglineObserver = null;
    }
    const lines = [...tagline.querySelectorAll("[data-tagline-line]")];
    lines.forEach((line) => {
      const text = (line.textContent || "").trim();
      line.textContent = "";
      if (!text) return;
      const isCjk = /[\u3040-\u30ff\u3400-\u9fff]/.test(text);
      const units = isCjk ? Array.from(text) : text.split(/(\s+)/).filter(Boolean);
      units.forEach((unit) => {
        if (!unit.trim()) {
          line.appendChild(document.createTextNode(unit));
          return;
        }
        const word = document.createElement("span");
        word.className = "tagline-word";
        word.textContent = unit;
        line.appendChild(word);
      });
    });
    const words = [...tagline.querySelectorAll(".tagline-word")];
    if (reduceMotion || !("IntersectionObserver" in window)) {
      words.forEach((word) => word.classList.add("is-lit"));
      return;
    }
    taglineObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-lit");
          taglineObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -14% 0px" }
    );
    words.forEach((word) => taglineObserver.observe(word));
  };

  window.addEventListener("site:languagechange", splitTagline);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", splitTagline, { once: true });
  } else {
    splitTagline();
  }
})();
