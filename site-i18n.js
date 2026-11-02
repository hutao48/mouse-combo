/* Lightweight client-side localization for the static product site. */
(() => {
  const TEXT = {
    ja: {
      "功能": "機能",
      "每步计时": "ステップ別タイミング",
      "侧键开关键": "サイドボタン",
      "安装与风险": "インストールとリスク",
      "下载安装包": "ダウンロード",
      "Windows 10 / 11 · 安装版": "Windows 10 / 11 · インストール版",
      "精确到": "ステップごとに",
      "每一步": "精密な",
      "的宏": "マクロ",
      "Mouse Combo 是一款本地运行的鼠标宏与键盘全键连点工具。每个步骤独立设置按住时长与间隔， 鼠标侧键也能作为开关键，宏文件直接显示在主界面左侧。":
        "Mouse Combo はローカルで動作するマウス/キーボードマクロツールです。各ステップの押下時間と間隔を個別に設定でき、マウスサイドボタンもホットキーとして使用できます。マクロファイルはメイン画面の左側に直接表示されます。",
      "↓ 下载 Windows 安装包": "↓ Windows インストーラーをダウンロード",
      "阅读安装与风险说明": "インストールとリスクを読む",
      "0.001 ms 时间步进": "0.001 ms の時間刻み",
      "中文 / 日本語 / English 界面": "中文 / 日本語 / English 表示",
      "按用户安装，无需管理员": "ユーザー単位でインストール、管理者不要",
      "本地离线，不收集数据": "ローカル・オフライン、データ収集なし",
      "该有的都有，而且都在同一个窗口里": "必要な機能を、ひとつのウィンドウに",
      "不用在设置窗口、宏库管理器和文件夹之间来回切换。开关键、宏文件、每一步的时间，都在主界面直接操作。":
        "設定画面、マクロ管理、フォルダを行き来する必要はありません。ホットキー、マクロ、各ステップの時間をメイン画面で直接操作できます。",
      "每一步独立计时": "各ステップを個別に計時",
      "每个鼠标/键盘步骤都有自己的按住时长和间隔。表格逐行显示，选中后直接修改，不再使用全宏统一时间。":
        "マウス/キーボードの各ステップに専用の押下時間と間隔があります。表に表示され、選択して直接編集できます。マクロ全体で統一された時間は使いません。",
      "鼠标侧键开关键": "マウスサイドボタンのホットキー",
      "侧键 4 / 5 可直接录制为开始/停止键，也支持 Ctrl / Alt / Shift 组合；匹配的侧键会被吞掉，不触发网页前进后退。":
        "サイドボタン 4/5 を開始/停止キーとして直接録画。Ctrl / Alt / Shift 併用も可能。一致したサイドボタンは消費され、ブラウザの戻る/進むを誤発動しません。",
      "左侧内嵌宏库": "左側の内蔵マクロライブラリ",
      "所有命名、分类的宏直接按分类显示在窗口左侧。单击即切换；保存、删除、新建都在同一块面板完成。界面支持中文 / 日本語 / English。":
        "名前とカテゴリを付けたマクロを左側に直接表示。クリックで切替、保存・削除・新規作成も同じパネルで完了。UI は 中文 / 日本語 / English に対応。",
      "键盘全键连点": "キーボード全キー連打",
      "支持任意普通键与 Ctrl / Alt / Shift 组合：字母、数字、F1–F24、方向键、小键盘、符号键、媒体键等。":
        "通常キーと Ctrl / Alt / Shift 併用に対応：英数字、F1–F24、矢印、テンキー、記号、メディアキーなど。",
      "0.001 ms 计时步进": "0.001 ms の計時刻み",
      "时间输入、存储和等待调度以 1 µs 为步进，内部使用整数纳秒和绝对 deadline，减少累计漂移。":
        "入力・保存・待機スケジューリングは 1 µs 刻み。内部は整数ナノ秒と絶対 deadline を使用し、累積ドリフトを抑えます。",
      "按住循环 / 按下切换": "押してループ / 押して切替",
      "同一个开关键支持两种触发方式：按住时运行、松开停止；或者按一次开始、再按一次停止。":
        "同じホットキーで2種類：押している間実行し離すと停止、または1回で開始・もう1回で停止。",
      "每一下，都有自己的节奏": "ひとつひとつに、専用のリズム",
      "不再用一个全局间隔套用整段宏。选中任意步骤，在表格上方修改「按住」和「间隔」，点应用即可； 键盘组合键、鼠标左/右/中/侧键和滚轮各自独立。":
        "マクロ全体に単一の間隔を適用しません。任意のステップを選択し、表の上で「押下」と「間隔」を変更して適用。キーボード、左/右/中/サイド、ホイールを個別に設定できます。",
      "表格逐行显示每一步的按住和间隔": "各ステップの押下と間隔を表に表示",
      "滚轮步骤只显示/编辑间隔": "ホイールは間隔のみ",
      "新步骤继承当前选中步骤的时间": "新規ステップは選択中ステップの時間を継承",
      "单轮总时长与理论轮/秒实时计算": "1周の合計時間と理論ループ/秒をリアルタイム計算",
      "所有时间都可以精确到 0.001 ms": "すべて 0.001 ms まで設定可能",
      "宏步骤 · 5 步": "マクロステップ · 5 ステップ",
      "每一步独立": "各ステップ独立",
      "动作": "動作",
      "按住 ms": "押下 ms",
      "间隔 ms": "間隔 ms",
      "左键单击": "左クリック",
      "按键 Q": "キー Q",
      "中键单击": "中クリック",
      "滚轮向上": "ホイール上",
      "右键单击": "右クリック",
      "单轮总时长": "1周の合計時間",
      "开关键，不一定是键盘键": "ホットキーはキーボードだけではない",
      "点击「更改」后直接按鼠标侧键即可录制，不需要额外驱动。":
        "「変更」をクリックしてマウスサイドボタンを押すだけで録画。追加ドライバー不要。",
      "侧键 4": "サイド 4",
      "· 后退": "· 戻る",
      "侧键 5": "サイド 5",
      "· 前进": "· 進む",
      "+ 侧键": "+ サイド",
      "· 键盘": "· キーボード",
      "鼠标侧键 4": "マウスサイド 4",
      "鼠标侧键 5": "マウスサイド 5",
      "按住循环 / 按下切换": "押してループ / 押して切替",
      "匹配时全局吞掉": "一致時はグローバルに消費",
      "侧键也能开始和停止": "サイドボタンでも開始・停止",
      "全局低级鼠标钩子会把 XBUTTON1 / XBUTTON2 映射成可配置开关键，支持与 Ctrl / Alt / Shift 组合。 匹配后该侧键不会继续传给浏览器或游戏，避免误触后退/前进。":
        "グローバル低レベルマウスフックが XBUTTON1 / XBUTTON2 を設定可能なホットキーに変換。Ctrl / Alt / Shift 併用可。一致したサイドボタンはブラウザやゲームへ渡らず、戻る/進むの誤発動を防ぎます。",
      "键盘钩子与鼠标钩子同时工作": "キーボードフックとマウスフックが同時に動作",
      "按住循环：按下开始、松开停止": "押してループ：押すと開始、離すと停止",
      "按下切换：按一下开始、再按一下停止": "押して切替：1回で開始、もう1回で停止",
      "录制时同样支持侧键": "録画時もサイドボタンに対応",
      "宏自己发出的注入输入不会误触发开关键": "マクロ自身の注入入力ではホットキーを誤発動しない",
      "下载 Mouse Combo": "Mouse Combo をダウンロード",
      "Windows 10 / 11，64 位。标准安装包，按当前用户安装，不需要管理员权限。安装前会完整显示安装说明与风险声明。":
        "Windows 10 / 11、64 ビット。標準インストーラー。現在のユーザーにインストールし、管理者権限は不要。インストール前に説明とリスク声明を全文表示します。",
      "安装包": "インストーラー",
      "大小": "サイズ",
      "↓ 下载安装包": "↓ インストーラーをダウンロード",
      "安装与风险说明": "インストールとリスク",
      "安装版默认从 GitHub Releases 检测新版本并静默更新；可在右上角版本菜单关闭。": "インストール版は GitHub Releases から新バージョンを確認し、既定でサイレント更新します。右上のバージョンメニューから無効にできます。",
      "项目自签名证书（非公共 CA）· 首次运行可能提示未知发布者": "プロジェクトの自己署名証明書（公開 CA ではありません）· 初回起動時に不明な発行元と表示される場合があります",
      "下载公钥证书": "公開証明書をダウンロード",
      "签名与验证说明": "署名と検証の説明",
      "安装前必读 · 风险声明": "インストール前に必読 · リスク声明",
      "本程序会模拟真实鼠标点击和键盘按键，并安装全局键盘/鼠标钩子。它可能在真实程序中造成误操作、数据丢失、 账号处罚、平台规则冲突或法律风险。请先在安全环境测试，并自行确认使用场景合法合规。":
        "本プログラムは実際のマウスクリックとキー入力をシミュレートし、グローバルなキーボード/マウスフックをインストールします。実際のアプリで誤操作、データ損失、アカウント制裁、プラットフォーム規約違反、法的リスクを引き起こす可能性があります。安全な環境でテストし、利用場面が合法であることを確認してください。",
      "可能违反法律法规、平台服务条款或雇主规定；不得用于作弊、欺诈、绕过风控或其他违法用途。":
        "法律、規約、雇用主の規則に違反する可能性があります。チート、詐欺、リスク回避の迂回、その他の違法用途に使用しないでください。",
      "模拟输入会真实生效，可能误点、误删、误发消息、误付款，通常无法撤销。":
        "シミュレート入力は実際に有効で、誤クリック、誤削除、誤送信、誤決済などを引き起こす可能性があります。通常は元に戻せません。",
      "可能触发平台封禁、账号/虚拟资产损失，或影响第三方设备与数据。":
        "プラットフォームの停止、アカウント/仮想資産の損失、第三者の機器やデータへの影響を引き起こす可能性があります。",
      "全局钩子可能与反作弊、安全软件、远程桌面、输入法或其他宏工具冲突。":
        "グローバルフックはアンチチート、セキュリティソフト、リモートデスクトップ、IME、他のマクロツールと競合する可能性があります。",
      "配置和宏文件以明文保存在本机；卸载会删除本机数据，请自行备份。":
        "設定とマクロはローカルに平文保存されます。アンインストールでローカルデータが削除されるため、必要に応じてバックアップしてください。",
      "0.001 ms 是输入/计时步进，不代表真实物理输入能精确到微秒。":
        "0.001 ms は入力/計時の刻みであり、実際の物理入力がマイクロ秒精度で届くことを意味しません。",
      "完整说明包括法律与平台规则、误操作、账号与第三方、系统兼容性、权限、隐私、时序、硬件、 第三方组件与无担保责任等章节，请阅读":
        "完全な説明には、法令・プラットフォーム規約、誤操作、アカウントと第三者、システム互換性、権限、プライバシー、タイミング、ハードウェア、第三者コンポーネント、無保証・責任制限などが含まれます。次をお読みください：",
      "安装引导与完整风险声明": "インストールガイドと完全なリスク声明",
      "。 安装程序的许可页也会完整显示同一份内容；必须选择“我接受”才能继续安装。":
        "。インストーラーのライセンスページにも同じ内容が表示されます。「同意する」を選択しないとインストールを続行できません。",
      "如不同意上述任何内容，请立即停止安装和使用，并删除本程序及其配置文件。":
        "上記のいずれかに同意できない場合は、直ちにインストールと使用を中止し、本プログラムと設定ファイルを削除してください。",
      "本项目仅供学习参考，不得用于任何违法行为":
        "本プロジェクトは学習参考用です。いかなる違法行為にも使用しないでください。",
      "Mouse Combo v1.5.2 · 本地运行 · 不收集数据": "Mouse Combo v1.5.2 · ローカル実行 · データ収集なし",
      "GitHub": "GitHub",
      "Mouse Combo 图标": "Mouse Combo アイコン",
      "Mouse Combo 主界面：左侧宏库、每步独立计时和宏步骤表格":
        "Mouse Combo メイン画面：左のマクロライブラリ、ステップ別タイミング、マクロステップ表",
    },
    en: {
      "功能": "Features",
      "每步计时": "Per-step timing",
      "侧键开关键": "Side-button hotkey",
      "安装与风险": "Install & risk",
      "下载安装包": "Download",
      "Windows 10 / 11 · 安装版": "Windows 10 / 11 · Installed edition",
      "精确到": "Precise",
      "每一步": "to every",
      "的宏": " step",
      "Mouse Combo 是一款本地运行的鼠标宏与键盘全键连点工具。每个步骤独立设置按住时长与间隔， 鼠标侧键也能作为开关键，宏文件直接显示在主界面左侧。":
        "Mouse Combo is a local mouse and keyboard macro tool. Set hold and interval independently for every step, use a mouse side button as the hotkey, and see every macro file directly in the left sidebar.",
      "↓ 下载 Windows 安装包": "↓ Download Windows installer",
      "阅读安装与风险说明": "Read install & risk guide",
      "0.001 ms 时间步进": "0.001 ms timing step",
      "中文 / 日本語 / English 界面": "Chinese / Japanese / English UI",
      "按用户安装，无需管理员": "Per-user install, no admin",
      "本地离线，不收集数据": "Local, offline, no data collection",
      "该有的都有，而且都在同一个窗口里": "Everything you need, in one window",
      "不用在设置窗口、宏库管理器和文件夹之间来回切换。开关键、宏文件、每一步的时间，都在主界面直接操作。":
        "No jumping between settings windows, macro managers and folders. The hotkey, macro files and every step's timing are all in the main window.",
      "每一步独立计时": "Per-step timing",
      "每个鼠标/键盘步骤都有自己的按住时长和间隔。表格逐行显示，选中后直接修改，不再使用全宏统一时间。":
        "Every mouse or keyboard step has its own hold and interval. The table shows them row by row; select a step and edit directly. No global timing for the whole macro.",
      "鼠标侧键开关键": "Mouse side-button hotkey",
      "侧键 4 / 5 可直接录制为开始/停止键，也支持 Ctrl / Alt / Shift 组合；匹配的侧键会被吞掉，不触发网页前进后退。":
        "Record side button 4/5 directly as the start/stop key, with optional Ctrl / Alt / Shift. The matched side button is swallowed and cannot trigger browser back/forward.",
      "左侧内嵌宏库": "Inline macro library",
      "所有命名、分类的宏直接按分类显示在窗口左侧。单击即切换；保存、删除、新建都在同一块面板完成。界面支持中文 / 日本語 / English。":
        "Named, categorized macros are listed on the left. Click to switch; save, delete and create in the same panel. The UI supports Chinese / Japanese / English.",
      "键盘全键连点": "Full keyboard repeat",
      "支持任意普通键与 Ctrl / Alt / Shift 组合：字母、数字、F1–F24、方向键、小键盘、符号键、媒体键等。":
        "Any normal key with Ctrl / Alt / Shift: letters, digits, F1–F24, arrows, numpad, symbols, media keys and more.",
      "0.001 ms 计时步进": "0.001 ms timing step",
      "时间输入、存储和等待调度以 1 µs 为步进，内部使用整数纳秒和绝对 deadline，减少累计漂移。":
        "Input, storage and wait scheduling use a 1 µs step. Integer nanoseconds and absolute deadlines reduce accumulated drift.",
      "按住循环 / 按下切换": "Hold to loop / press to toggle",
      "同一个开关键支持两种触发方式：按住时运行、松开停止；或者按一次开始、再按一次停止。":
        "One hotkey, two modes: hold to run and release to stop, or press once to start and again to stop.",
      "每一下，都有自己的节奏": "Every step has its own rhythm",
      "不再用一个全局间隔套用整段宏。选中任意步骤，在表格上方修改「按住」和「间隔」，点应用即可； 键盘组合键、鼠标左/右/中/侧键和滚轮各自独立。":
        "No single global interval for the whole macro. Select any step, change Hold and Interval above the table, then click Apply. Keyboard combos, mouse buttons and the wheel are all independent.",
      "表格逐行显示每一步的按住和间隔": "The table shows hold and interval for every step",
      "滚轮步骤只显示/编辑间隔": "Wheel steps only show/edit interval",
      "新步骤继承当前选中步骤的时间": "New steps inherit the selected step's timing",
      "单轮总时长与理论轮/秒实时计算": "Cycle total and theoretical loops/s update live",
      "所有时间都可以精确到 0.001 ms": "Every time can be set to 0.001 ms",
      "宏步骤 · 5 步": "Macro steps · 5 steps",
      "每一步独立": "Every step independent",
      "动作": "Action",
      "按住 ms": "Hold ms",
      "间隔 ms": "Interval ms",
      "左键单击": "Left click",
      "按键 Q": "Key Q",
      "中键单击": "Middle click",
      "滚轮向上": "Wheel up",
      "右键单击": "Right click",
      "单轮总时长": "Cycle total",
      "开关键，不一定是键盘键": "The hotkey doesn't have to be a key",
      "点击「更改」后直接按鼠标侧键即可录制，不需要额外驱动。":
        "Click Change and press a mouse side button. No extra driver required.",
      "侧键 4": "Side 4",
      "· 后退": "· Back",
      "侧键 5": "Side 5",
      "· 前进": "· Forward",
      "+ 侧键": "+ side",
      "· 键盘": "· Keyboard",
      "鼠标侧键 4": "Mouse side 4",
      "鼠标侧键 5": "Mouse side 5",
      "匹配时全局吞掉": "Swallowed globally when matched",
      "侧键也能开始和停止": "Side buttons can start and stop too",
      "全局低级鼠标钩子会把 XBUTTON1 / XBUTTON2 映射成可配置开关键，支持与 Ctrl / Alt / Shift 组合。 匹配后该侧键不会继续传给浏览器或游戏，避免误触后退/前进。":
        "A global low-level mouse hook maps XBUTTON1 / XBUTTON2 to a configurable hotkey, with optional Ctrl / Alt / Shift. The matched button is not passed to the browser or game, preventing accidental back/forward.",
      "键盘钩子与鼠标钩子同时工作": "Keyboard and mouse hooks work together",
      "按住循环：按下开始、松开停止": "Hold mode: press to start, release to stop",
      "按下切换：按一下开始、再按一下停止": "Toggle mode: press once to start, again to stop",
      "录制时同样支持侧键": "Side buttons are supported while recording",
      "宏自己发出的注入输入不会误触发开关键": "Injected input from the macro cannot trigger the hotkey",
      "下载 Mouse Combo": "Download Mouse Combo",
      "Windows 10 / 11，64 位。标准安装包，按当前用户安装，不需要管理员权限。安装前会完整显示安装说明与风险声明。":
        "Windows 10 / 11, 64-bit. Standard installer for the current user; no administrator rights required. The full install guide and risk statement are shown before installation.",
      "安装包": "Installer",
      "大小": "Size",
      "↓ 下载安装包": "↓ Download installer",
      "安装与风险说明": "Install & risk guide",
      "安装版默认从 GitHub Releases 检测新版本并静默更新；可在右上角版本菜单关闭。": "The installed edition checks GitHub Releases and updates silently by default. Disable it from the version menu in the top-right.",
      "项目自签名证书（非公共 CA）· 首次运行可能提示未知发布者": "Project self-signed certificate (not a public CA) · Windows may show Unknown publisher on first run",
      "下载公钥证书": "Download public certificate",
      "签名与验证说明": "Signing & verification",
      "安装前必读 · 风险声明": "Read before installing · Risk statement",
      "本程序会模拟真实鼠标点击和键盘按键，并安装全局键盘/鼠标钩子。它可能在真实程序中造成误操作、数据丢失、 账号处罚、平台规则冲突或法律风险。请先在安全环境测试，并自行确认使用场景合法合规。":
        "This program simulates real mouse clicks and keystrokes and installs global keyboard/mouse hooks. It can cause unintended actions, data loss, account penalties, platform-rule violations or legal risk. Test in a safe environment and verify that your use is lawful.",
      "可能违反法律法规、平台服务条款或雇主规定；不得用于作弊、欺诈、绕过风控或其他违法用途。":
        "May violate laws, platform terms or employer rules. Do not use it for cheating, fraud, bypassing risk controls or any other illegal purpose.",
      "模拟输入会真实生效，可能误点、误删、误发消息、误付款，通常无法撤销。":
        "Synthetic input takes effect for real and may cause wrong clicks, deletion, messages or payments. It usually cannot be undone.",
      "可能触发平台封禁、账号/虚拟资产损失，或影响第三方设备与数据。":
        "May trigger platform bans, account/virtual-asset loss, or affect third-party devices and data.",
      "全局钩子可能与反作弊、安全软件、远程桌面、输入法或其他宏工具冲突。":
        "Global hooks may conflict with anti-cheat, security software, remote desktop, input methods or other macro tools.",
      "配置和宏文件以明文保存在本机；卸载会删除本机数据，请自行备份。":
        "Settings and macros are stored in plain text locally. Uninstalling removes local data; back up anything you need.",
      "0.001 ms 是输入/计时步进，不代表真实物理输入能精确到微秒。":
        "0.001 ms is the input/timing step, not a guarantee that physical input is microsecond-accurate.",
      "完整说明包括法律与平台规则、误操作、账号与第三方、系统兼容性、权限、隐私、时序、硬件、 第三方组件与无担保责任等章节，请阅读":
        "The full statement covers laws and platform rules, misoperation, accounts and third parties, system compatibility, privileges, privacy, timing, hardware, third-party components and warranty/liability. Please read",
      "安装引导与完整风险声明": "the install guide and full risk statement",
      "。 安装程序的许可页也会完整显示同一份内容；必须选择“我接受”才能继续安装。":
        ". The installer license page shows the same content; you must accept it to continue.",
      "如不同意上述任何内容，请立即停止安装和使用，并删除本程序及其配置文件。":
        "If you do not agree with any of the above, stop installing and using the program and delete it and its configuration files.",
      "本项目仅供学习参考，不得用于任何违法行为":
        "This project is for learning and reference only and must not be used for any illegal activity.",
      "Mouse Combo v1.5.2 · 本地运行 · 不收集数据": "Mouse Combo v1.5.2 · Local · No data collection",
      "GitHub": "GitHub",
      "Mouse Combo 图标": "Mouse Combo icon",
      "Mouse Combo 主界面：左侧宏库、每步独立计时和宏步骤表格":
        "Mouse Combo main window: left macro library, per-step timing and macro step table",
    },
  };

  const META = {
    zh: {
      title: "Mouse Combo · 高精度鼠标 / 键盘宏",
      description:
        "Mouse Combo 高精度鼠标 / 键盘宏：每一步独立计时、鼠标侧键开关键、内嵌宏库、0.001 ms 时间步进。Windows 安装包下载。",
    },
    ja: {
      title: "Mouse Combo · 高精度マウス / キーボードマクロ",
      description:
        "Mouse Combo 高精度マウス / キーボードマクロ：ステップごとの独立タイミング、マウスサイドボタンのホットキー、内蔵マクロライブラリ、0.001 ms の時間刻み。Windows インストーラーをダウンロード。",
    },
    en: {
      title: "Mouse Combo · High-precision mouse / keyboard macro",
      description:
        "Mouse Combo high-precision mouse / keyboard macro: per-step timing, mouse side-button hotkey, inline macro library and 0.001 ms timing step. Download the Windows installer.",
    },
  };

  const nodes = [];
  const alts = [];
  const walk = (root) => {
    for (const node of root.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const raw = node.nodeValue;
        const normalized = raw.replace(/\s+/g, " ").trim();
        if (normalized) {
          const leading = (raw.match(/^\s*/) || [""])[0];
          const trailing = (raw.match(/\s*$/) || [""])[0];
          nodes.push({ node, normalized, leading, trailing });
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName;
        if (tag === "SCRIPT" || tag === "STYLE") continue;
        if (node.hasAttribute("alt")) {
          const normalized = node.getAttribute("alt").replace(/\s+/g, " ").trim();
          if (normalized) alts.push({ node, normalized });
        }
        walk(node);
      }
    }
  };
  walk(document.body);

  const originalTitle = document.title;
  const originalDescription =
    document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  let current = "zh";

  const apply = (language) => {
    const lang = language in TEXT || language === "zh" ? language : "zh";
    current = lang;
    const dictionary = TEXT[lang] || {};
    for (const item of nodes) {
      const value = lang === "zh" ? item.normalized : dictionary[item.normalized] || item.normalized;
      item.node.nodeValue = item.leading + value + item.trailing;
    }
    for (const item of alts) {
      item.node.setAttribute(
        "alt",
        lang === "zh" ? item.normalized : dictionary[item.normalized] || item.normalized
      );
    }
    const meta = META[lang] || META.zh;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    const guide = lang === "ja" ? "guide.ja.html" : lang === "en" ? "guide.en.html" : "guide.html";
    document.querySelectorAll('a[href^="guide"]').forEach((link) => {
      link.setAttribute("href", guide + (link.hash || ""));
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.getAttribute("data-lang") === lang);
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try {
      localStorage.setItem("mousecombo.site.lang", lang);
    } catch (error) {
      // Ignore storage restrictions.
    }
    try {
      const url = new URL(window.location.href);
      if (lang === "zh") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (error) {
      // Ignore file:// or restricted history.
    }
  };

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let stored = null;
  try {
    stored = localStorage.getItem("mousecombo.site.lang");
  } catch (error) {
    stored = null;
  }
  const initial =
    queryLanguage && (queryLanguage === "zh" || queryLanguage in TEXT)
      ? queryLanguage
      : stored && (stored === "zh" || stored in TEXT)
        ? stored
        : "zh";
  apply(initial);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => apply(button.getAttribute("data-lang")));
  });
  // Keep a reference for debugging and future extensions.
  window.__mouseComboLanguage = () => current;
})();
