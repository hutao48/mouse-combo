(() => {
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
        document.querySelectorAll("[data-download]").forEach((node) => {
          node.setAttribute("href", release.file);
          node.setAttribute("download", release.file.split("/").pop());
        });
      }
    })
    .catch(() => {
      // Static fallback values in the page remain visible when opened locally
      // without the release metadata.
    });
})();
