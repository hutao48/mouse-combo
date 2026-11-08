/* Lightweight client-side localization for the static product site. */
(() => {
  const TEXT = {
    zh: {
      "nav.features": "功能",
      "nav.timing": "每步计时",
      "nav.side": "侧键开关键",
      "nav.guide": "安装与风险",
      "nav.download": "下载安装包",
      "nav.menuNote": "Windows 10 / 11 · 本地运行 · 不收集数据",
      "hero.platform": "Windows 10 / 11 · 安装版",
      "hero.title": "把每一步，<br>做成精确的节奏。",
      "hero.lead": "Mouse Combo 是 Windows 上的本地鼠标与键盘宏工具。每个动作独立设置按住时长和间隔，鼠标侧键也能开始和停止，宏库就在主窗口左侧。",
      "hero.cta": "下载 Windows 安装包",
      "hero.secondary": "查看安装与风险",
      "hero.proof1": "0.001 ms 时间步进",
      "hero.proof2": "本地运行",
      "hero.proof3": "不收集数据",
      "hero.badge": "内部调度步进",
      "app.caption": "主界面：宏库、每步计时和步骤表格都在一个窗口里",
      "app.alt": "Mouse Combo 主界面：左侧宏库、每步独立计时和宏步骤表格",
      "tagline.kicker": "节奏",
      "tagline.1": "每一次点击，",
      "tagline.2": "每一下按键，",
      "tagline.3": "都在你设定的节奏发生。",
      "why.title": "不是一段固定宏，<br>而是一套可编辑的节奏。",
      "why.lead": "把开关键、动作和每一步的时间放在同一个窗口里。改宏时，只改你真正想改的那一处。",
      "benefit1.title": "每一步独立计时",
      "benefit1.body": "按住和间隔分别设置，在表格里逐行修改。滚轮只保留间隔。",
      "benefit2.title": "侧键就是开关键",
      "benefit2.body": "侧键 4 / 5 可直接录制为开始停止，支持 Ctrl、Alt、Shift 组合。",
      "benefit3.title": "宏库就在手边",
      "benefit3.body": "命名、分类、单击切换。保存和新建都在主窗口左侧完成。",
      "benefit4.title": "原生调度路径",
      "benefit4.body": "动作循环在原生 C 中执行，绝对时间线不累积漂移；底部显示真实调度误差。",
      "timing.kicker": "每步计时",
      "timing.title": "每一下，<br>都有自己的节奏。",
      "timing.lead": "不再用一个全局间隔套用整段宏。选中任意步骤，修改按住和间隔，点击应用即可。",
      "timing.li1": "表格逐行显示每一步的按住和间隔",
      "timing.li2": "滚轮步骤只编辑间隔",
      "timing.li3": "新步骤继承当前选中步骤的时间",
      "timing.li4": "单轮总时长与理论轮每秒实时计算",
      "timing.panel.title": "宏步骤 · 5 步",
      "timing.panel.badge": "每一步独立",
      "timing.col.num": "#",
      "timing.col.action": "动作",
      "timing.col.hold": "按住 ms",
      "timing.col.interval": "间隔 ms",
      "action.left": "左键单击",
      "action.q": "按键 Q",
      "action.middle": "中键单击",
      "action.wheel": "滚轮向上",
      "action.right": "右键单击",
      "timing.total": "单轮总时长",
      "side.kicker": "侧键开关键",
      "side.title": "侧键，<br>也能是开关键。",
      "side.lead": "全局低级鼠标钩子把 XBUTTON1 / XBUTTON2 映射成可配置开关键，支持与 Ctrl、Alt、Shift 组合。匹配的侧键会被吞掉，不继续传给浏览器或游戏。",
      "side.li1": "键盘钩子与鼠标钩子同时工作",
      "side.li2": "按住循环：按下开始，松开停止",
      "side.li3": "按下切换：按一下开始，再按一下停止",
      "side.li4": "宏自己注入的输入不会误触发",
      "side.panel.title": "开关键映射",
      "side.map1.value": "开始 / 停止",
      "side.map2.value": "按住 / 切换",
      "side.map3.value": "组合键",
      "side.map4.value": "键盘开关键",
      "side.panel.note": "点击更改后，直接按下目标键即可录制",
      "how.kicker": "三步开始",
      "how.title": "从下载到运行，三步。",
      "how.lead": "不需要写脚本，也不需要改配置文件。安装后先定开关键，再把动作和时间排好。",
      "how.step1.title": "下载并安装",
      "how.step1.body": "Windows 10 / 11 64 位，按当前用户安装，不需要管理员权限。",
      "how.step2.title": "录制开关键与动作",
      "how.step2.body": "键盘或鼠标侧键都能作为开关键；鼠标、键盘和滚轮步骤按顺序添加。",
      "how.step3.title": "调整时间并运行",
      "how.step3.body": "选中任一步修改按住与间隔；按住或切换开关键即可执行。",
      "download.kicker": "下载",
      "download.title": "下载 Mouse Combo",
      "download.lead": "Windows 10 / 11，64 位。按当前用户安装，不需要管理员权限。安装前会完整显示安装说明与风险声明。",
      "download.update": "安装版会自动检查更新，下载时显示实时进度、网速和剩余时间，完成后自动安装并打开新版本。",
      "download.req1": "Windows 10 / 11 · 64 位",
      "download.req2": "约 16.4 MB",
      "download.req3": "用户安装，无需管理员",
      "download.label.file": "安装包",
      "download.label.size": "大小",
      "download.label.hash": "SHA256",
      "download.cta": "下载安装包",
      "download.secondary": "安装与风险说明",
      "download.cert": "下载公钥证书",
      "download.signing": "签名与验证说明",
      "download.warning": "项目自签名证书（非公共 CA）· 首次运行可能提示未知发布者",
      "faq.kicker": "常见问题",
      "faq.title": "安装前，你可能想知道",
      "faq.lead": "这里只回答最常被问到的几件事；完整说明在安装引导里。",
      "faq.q1": "Mouse Combo 支持哪些 Windows 版本？",
      "faq.a1": "Windows 10 / 11 64 位。安装包按当前用户安装，不要求管理员权限；如果要操作以管理员身份运行的目标程序，也需要以管理员身份启动 Mouse Combo。",
      "faq.q2": "0.001 ms 是物理输入精度吗？",
      "faq.a2": "不是。0.001 ms 是输入、存储和内部调度的步进。实际事件到达目标程序仍受 Windows 调度、USB 回报率和目标程序影响；界面显示的是内部调度误差。",
      "faq.q3": "会被游戏或反作弊软件检测或封禁吗？",
      "faq.a3": "可能。程序使用 SendInput 和全局钩子，部分游戏、反作弊软件或平台规则会限制或禁止模拟输入。请遵守目标软件条款，不要用于作弊或违法用途。",
      "faq.q4": "需要联网吗？会上传数据吗？",
      "faq.a4": "宏与配置都在本机运行，不收集使用数据。安装版会访问 GitHub Releases 检查更新；源码版不会自动联网。",
      "faq.q5": "宏和设置保存在哪里？卸载会删除吗？",
      "faq.a5": "配置和宏保存在 %APPDATA%\\MouseCombo。卸载会删除本机配置和宏文件，请先备份。",
      "faq.q6": "只按侧键会被浏览器或游戏收到吗？",
      "faq.a6": "被配置为开关键的侧键会被全局吞掉，不再触发浏览器前进后退或其他默认行为；未被配置的侧键保持系统默认行为。",
      "risk.kicker": "安装前必读",
      "risk.title": "风险声明",
      "risk.lead": "本程序会模拟真实鼠标点击和键盘按键，并安装全局键盘 / 鼠标钩子。它可能在真实程序中造成误操作、数据丢失、账号处罚、平台规则冲突或法律风险。请先在安全环境测试，并自行确认使用场景合法合规。",
      "risk.li1": "可能违反法律法规、平台服务条款或雇主规定；不得用于作弊、欺诈、绕过风控或其他违法用途。",
      "risk.li2": "模拟输入会真实生效，可能误点、误删、误发消息、误付款，通常无法撤销。",
      "risk.li3": "可能触发平台封禁、账号或虚拟资产损失，或影响第三方设备与数据。",
      "risk.li4": "全局钩子可能与反作弊、安全软件、远程桌面、输入法或其他宏工具冲突。",
      "risk.li5": "配置和宏文件以明文保存在本机；卸载会删除本机数据，请自行备份。",
      "risk.guide": "完整说明包括法律与平台规则、误操作、账号与第三方、系统兼容性、权限、隐私、时序、硬件、第三方组件与无担保责任等章节，请阅读",
      "risk.guideLink": "安装引导与完整风险声明",
      "risk.note": "安装程序的许可页也会完整显示同一份内容；必须选择“我接受”才能继续安装。",
      "risk.caption": "如不同意上述任何内容，请立即停止安装和使用，并删除本程序及其配置文件。",
      "risk.final": "本项目仅供学习参考，不得用于任何违法行为",
      "footer.local": "本地运行 · 不收集数据",
      "footer.guide": "安装与风险",
      "footer.privacy": "隐私与数据",
      "footer.cert": "代码签名证书",
      "footer.copyright": "© 2026 Mouse Combo",
      "notfound.title": "这个页面不存在。",
      "notfound.body": "链接可能已经失效，或者地址输入有误。回到首页继续查看 Mouse Combo。",
      "notfound.cta": "返回首页",
    },
    ja: {
      "nav.features": "機能",
      "nav.timing": "ステップ別タイミング",
      "nav.side": "サイドボタン",
      "nav.guide": "インストールとリスク",
      "nav.download": "ダウンロード",
      "nav.menuNote": "Windows 10 / 11 · ローカル実行 · データ収集なし",
      "hero.platform": "Windows 10 / 11 · インストール版",
      "hero.title": "すべてのステップを、<br>思い通りのリズムに。",
      "hero.lead": "Mouse Combo は Windows 向けのローカルなマウス/キーボードマクロツールです。アクションごとに押下時間と間隔を設定でき、マウスのサイドボタンで開始・停止もできます。マクロライブラリはメイン画面の左側にあります。",
      "hero.cta": "Windows インストーラーをダウンロード",
      "hero.secondary": "インストールとリスクを読む",
      "hero.proof1": "0.001 ms の時間刻み",
      "hero.proof2": "ローカル実行",
      "hero.proof3": "データ収集なし",
      "hero.badge": "内部スケジューリング刻み",
      "app.caption": "メイン画面：マクロライブラリ、ステップ別タイミング、ステップ表をひとつの画面に",
      "app.alt": "Mouse Combo のメイン画面：左側のマクロライブラリ、ステップ別タイミング、マクロステップ表",
      "tagline.kicker": "リズム",
      "tagline.1": "ワンクリックごとに、",
      "tagline.2": "キーを押すたびに、",
      "tagline.3": "設定したリズムで動く。",
      "why.title": "固定されたマクロではなく、<br>編集できるリズムを。",
      "why.lead": "ホットキー、アクション、各ステップの時間をひとつの画面に。変更したい場所だけを編集できます。",
      "benefit1.title": "ステップごとに独立したタイミング",
      "benefit1.body": "押下時間と間隔を個別に設定し、表で行ごとに編集。ホイールは間隔のみです。",
      "benefit2.title": "サイドボタンがホットキー",
      "benefit2.body": "サイドボタン 4 / 5 を開始・停止として録画でき、Ctrl、Alt、Shift との組み合わせにも対応します。",
      "benefit3.title": "マクロライブラリがすぐそばに",
      "benefit3.body": "名前、カテゴリ、クリックで切替。保存と新規作成もメイン画面の左側で完了します。",
      "benefit4.title": "ネイティブなスケジューリング",
      "benefit4.body": "アクションループはネイティブ C で実行され、絶対タイムラインで累積ドリフトを防ぎます。画面下に実際のスケジューリング誤差を表示します。",
      "timing.kicker": "ステップ別タイミング",
      "timing.title": "ひとつひとつの動作に、<br>それぞれのリズムを。",
      "timing.lead": "マクロ全体に同じ間隔を使う必要はありません。ステップを選び、押下時間と間隔を変更して適用するだけです。",
      "timing.li1": "表に各ステップの押下時間と間隔を表示",
      "timing.li2": "ホイールステップは間隔のみ編集",
      "timing.li3": "新規ステップは選択中のステップの時間を継承",
      "timing.li4": "1 サイクルの合計時間と理論回転/秒をリアルタイム計算",
      "timing.panel.title": "マクロステップ · 5 ステップ",
      "timing.panel.badge": "各ステップ独立",
      "timing.col.num": "#",
      "timing.col.action": "アクション",
      "timing.col.hold": "押下 ms",
      "timing.col.interval": "間隔 ms",
      "action.left": "左クリック",
      "action.q": "キー Q",
      "action.middle": "中クリック",
      "action.wheel": "ホイール上",
      "action.right": "右クリック",
      "timing.total": "1 サイクル合計",
      "side.kicker": "マウスサイドボタン",
      "side.title": "サイドボタンも、<br>開始キーに。",
      "side.lead": "グローバル低レベルマウスフックが XBUTTON1 / XBUTTON2 を設定可能なホットキーに変換し、Ctrl、Alt、Shift との組み合わせにも対応します。一致したサイドボタンは消費され、ブラウザやゲームに渡りません。",
      "side.li1": "キーボードフックとマウスフックが同時に動作",
      "side.li2": "押してループ：押したら開始、離したら停止",
      "side.li3": "押して切替：1 回で開始、もう 1 回で停止",
      "side.li4": "マクロ自身の入力では誤発動しない",
      "side.panel.title": "ホットキーマッピング",
      "side.map1.value": "開始 / 停止",
      "side.map2.value": "押して / 切替",
      "side.map3.value": "組み合わせ",
      "side.map4.value": "キーボードホットキー",
      "side.panel.note": "変更をクリックした後、対象キーを押すだけで録画できます",
      "how.kicker": "3 ステップで開始",
      "how.title": "ダウンロードから実行まで、3 ステップ。",
      "how.lead": "スクリプトや設定ファイルを書く必要はありません。インストール後、ホットキーを決めてアクションと時間を並べるだけです。",
      "how.step1.title": "ダウンロードしてインストール",
      "how.step1.body": "Windows 10 / 11 64 ビット。現在のユーザーにインストールし、管理者権限は不要です。",
      "how.step2.title": "ホットキーとアクションを録画",
      "how.step2.body": "キーボードまたはマウスサイドボタンをホットキーにできます。マウス、キーボード、ホイールのステップを順番に追加します。",
      "how.step3.title": "時間を調整して実行",
      "how.step3.body": "任意のステップを選んで押下時間と間隔を変更し、ホットキーを押すか切り替えて実行します。",
      "download.kicker": "ダウンロード",
      "download.title": "Mouse Combo をダウンロード",
      "download.lead": "Windows 10 / 11、64 ビット。現在のユーザーにインストールし、管理者権限は不要です。インストール前に説明とリスク声明を全文表示します。",
      "download.update": "インストール版は自動で更新を確認し、ダウンロード中は進捗、速度、残り時間を表示します。完了後は自動でインストールし、新しいバージョンを開きます。",
      "download.req1": "Windows 10 / 11 · 64 ビット",
      "download.req2": "約 16.4 MB",
      "download.req3": "ユーザーインストール、管理者不要",
      "download.label.file": "インストーラー",
      "download.label.size": "サイズ",
      "download.label.hash": "SHA256",
      "download.cta": "インストーラーをダウンロード",
      "download.secondary": "インストールとリスク",
      "download.cert": "公開証明書をダウンロード",
      "download.signing": "署名と検証の説明",
      "download.warning": "プロジェクトの自己署名証明書（公開 CA ではありません）· 初回起動時に不明な発行元と表示される場合があります",
      "faq.kicker": "よくある質問",
      "faq.title": "インストール前に知っておきたいこと",
      "faq.lead": "よくある質問だけをまとめました。完全な説明はインストールガイドにあります。",
      "faq.q1": "Mouse Combo はどの Windows バージョンに対応していますか？",
      "faq.a1": "Windows 10 / 11 64 ビットです。インストーラーは現在のユーザー単位でインストールし、管理者権限は不要です。管理者として実行している対象アプリを操作する場合は、Mouse Combo も管理者として起動してください。",
      "faq.q2": "0.001 ms は物理入力の精度ですか？",
      "faq.a2": "いいえ。0.001 ms は入力、保存、内部スケジューリングの刻みです。実際のイベントが対象アプリに届く時刻は Windows のスケジューリング、USB ポーリングレート、対象アプリの影響を受けます。画面に表示されるのは内部スケジューリングの誤差です。",
      "faq.q3": "ゲームやアンチチートに検出・BAN されますか？",
      "faq.a3": "可能性があります。SendInput とグローバルフックを使用するため、ゲーム、アンチチート、プラットフォームの規約によって制限または禁止される場合があります。対象ソフトの規約を守り、チートや違法行為に使用しないでください。",
      "faq.q4": "ネット接続は必要ですか？データは送信されますか？",
      "faq.a4": "マクロと設定はすべてローカルで動作し、利用データは収集しません。インストール版は GitHub Releases に更新確認を行います。ソース版は自動でネット接続しません。",
      "faq.q5": "マクロと設定はどこに保存されますか？アンインストールで削除されますか？",
      "faq.a5": "設定とマクロは %APPDATA%\\MouseCombo に保存されます。アンインストールするとローカルの設定とマクロファイルは削除されるため、事前にバックアップしてください。",
      "faq.q6": "サイドボタンだけを押すとブラウザやゲームに届きますか？",
      "faq.a6": "ホットキーとして設定したサイドボタンはグローバルに消費され、ブラウザの戻る/進むなど既定の動作を発動しません。設定していないサイドボタンはシステム既定の動作を保ちます。",
      "risk.kicker": "インストール前に必読",
      "risk.title": "リスク声明",
      "risk.lead": "本プログラムは実際のマウスクリックとキー入力をシミュレートし、グローバルなキーボード/マウスフックをインストールします。実際のアプリで誤操作、データ損失、アカウント制裁、プラットフォーム規約との衝突、法的リスクを引き起こす可能性があります。安全な環境でテストし、利用場面が合法かつ規約に適合することを確認してください。",
      "risk.li1": "法律、プラットフォーム規約、雇用者の規則に違反する可能性があります。チート、詐欺、リスク回避の回避、その他の違法行為に使用してはなりません。",
      "risk.li2": "シミュレートされた入力は実際に反映され、誤クリック、誤削除、誤送信、誤決済などを引き起こす可能性があり、通常は取り消せません。",
      "risk.li3": "プラットフォームの BAN、アカウントや仮想資産の損失、第三者機器やデータへの影響を引き起こす可能性があります。",
      "risk.li4": "グローバルフックはアンチチート、セキュリティソフト、リモートデスクトップ、IME、他のマクロツールと競合する可能性があります。",
      "risk.li5": "設定とマクロファイルは本機に平文で保存されます。アンインストールすると本機のデータが削除されるため、ご自身でバックアップしてください。",
      "risk.guide": "完全な説明には、法律とプラットフォーム規約、誤操作、アカウントと第三者、システム互換性、権限、プライバシー、タイミング、ハードウェア、第三者コンポーネント、無保証責任などの章が含まれます。次をお読みください：",
      "risk.guideLink": "インストールガイドと完全なリスク声明",
      "risk.note": "インストーラーのライセンス画面にも同じ内容が全文表示されます。「同意する」を選択しないとインストールを続行できません。",
      "risk.caption": "上記のいずれかに同意できない場合は、インストールと使用を直ちに中止し、本プログラムと設定ファイルを削除してください。",
      "risk.final": "本プロジェクトは学習と参考のみを目的としており、いかなる違法行為にも使用してはなりません",
      "footer.local": "ローカル実行 · データ収集なし",
      "footer.guide": "インストールとリスク",
      "footer.privacy": "プライバシーとデータ",
      "footer.cert": "コード署名証明書",
      "footer.copyright": "© 2026 Mouse Combo",
      "notfound.title": "このページは存在しません。",
      "notfound.body": "リンクが無効になっているか、アドレスが間違っている可能性があります。ホームに戻って Mouse Combo をご覧ください。",
      "notfound.cta": "ホームに戻る",
    },
    en: {
      "nav.features": "Features",
      "nav.timing": "Per step timing",
      "nav.side": "Side buttons",
      "nav.guide": "Install and risk",
      "nav.download": "Download installer",
      "nav.menuNote": "Windows 10 / 11 · Local · No data collection",
      "hero.platform": "Windows 10 / 11 · Installed edition",
      "hero.title": "Every step,<br>on your timing.",
      "hero.lead": "Mouse Combo is a local mouse and keyboard macro tool for Windows. Set a hold time and interval for each action, start or stop with a mouse side button, and keep the macro library in the main window.",
      "hero.cta": "Download Windows installer",
      "hero.secondary": "Read install and risk notes",
      "hero.proof1": "0.001 ms timing step",
      "hero.proof2": "Runs locally",
      "hero.proof3": "No data collection",
      "hero.badge": "Internal scheduling step",
      "app.caption": "Main window: macro library, per step timing and the step table in one place",
      "app.alt": "Mouse Combo main window: left macro library, per step timing and the macro step table",
      "tagline.kicker": "Rhythm",
      "tagline.1": "Every click,",
      "tagline.2": "every key press,",
      "tagline.3": "moves on the rhythm you set.",
      "why.title": "Not a fixed sequence.<br>A rhythm you can edit.",
      "why.lead": "Keep the hotkey, the actions and every step timing in one window. When you change a macro, change only the part you mean to change.",
      "benefit1.title": "Independent timing per step",
      "benefit1.body": "Set hold and interval separately, then edit them row by row. Wheel steps keep only an interval.",
      "benefit2.title": "A side button as the hotkey",
      "benefit2.body": "Record side button 4 or 5 to start and stop, with Ctrl, Alt or Shift combinations.",
      "benefit3.title": "The macro library stays close",
      "benefit3.body": "Name, categorize and switch with one click. Save and create from the left panel of the main window.",
      "benefit4.title": "A native scheduling path",
      "benefit4.body": "The action loop runs in native C and an absolute timeline prevents drift; the footer shows the measured scheduling error.",
      "timing.kicker": "Per step timing",
      "timing.title": "Every action,<br>its own rhythm.",
      "timing.lead": "Stop applying one global interval to a whole macro. Select any step, change its hold and interval, then apply.",
      "timing.li1": "Each row shows the hold and interval for that step",
      "timing.li2": "Wheel steps edit only the interval",
      "timing.li3": "New steps inherit the selected step timing",
      "timing.li4": "Cycle time and theoretical cycles per second update live",
      "timing.panel.title": "Macro steps · 5 steps",
      "timing.panel.badge": "Independent steps",
      "timing.col.num": "#",
      "timing.col.action": "Action",
      "timing.col.hold": "Hold ms",
      "timing.col.interval": "Interval ms",
      "action.left": "Left click",
      "action.q": "Key Q",
      "action.middle": "Middle click",
      "action.wheel": "Wheel up",
      "action.right": "Right click",
      "timing.total": "Cycle time",
      "side.kicker": "Side button hotkey",
      "side.title": "Your side button,<br>your start key.",
      "side.lead": "A global low level mouse hook maps XBUTTON1 / XBUTTON2 to a configurable hotkey, including Ctrl, Alt and Shift combinations. A matched side button is consumed before it reaches the browser or game.",
      "side.li1": "Keyboard and mouse hooks work together",
      "side.li2": "Hold to run: press to start, release to stop",
      "side.li3": "Tap to toggle: press once to start, again to stop",
      "side.li4": "The macro cannot trigger its own injected input",
      "side.panel.title": "Hotkey mapping",
      "side.map1.value": "Start / stop",
      "side.map2.value": "Hold / toggle",
      "side.map3.value": "Modifier",
      "side.map4.value": "Keyboard hotkey",
      "side.panel.note": "Click change, then press the target key to record it",
      "how.kicker": "Three steps",
      "how.title": "From download to running, in three steps.",
      "how.lead": "No scripts and no config files. After installing, choose the hotkey and arrange the actions and timing.",
      "how.step1.title": "Download and install",
      "how.step1.body": "Windows 10 / 11 64 bit. Installs for the current user and does not require administrator rights.",
      "how.step2.title": "Record a hotkey and actions",
      "how.step2.body": "A keyboard key or mouse side button can be the hotkey. Add mouse, keyboard and wheel steps in order.",
      "how.step3.title": "Tune the timing and run",
      "how.step3.body": "Select any step to change its hold and interval, then hold or toggle the hotkey to run.",
      "download.kicker": "Download",
      "download.title": "Download Mouse Combo",
      "download.lead": "Windows 10 / 11, 64 bit. Installs for the current user and does not require administrator rights. The installer shows the full install and risk notes before proceeding.",
      "download.update": "The installed edition checks for updates automatically and shows live progress, speed and time remaining. When the download finishes it installs the update and opens the new version.",
      "download.req1": "Windows 10 / 11 · 64 bit",
      "download.req2": "About 16.4 MB",
      "download.req3": "User install, no administrator",
      "download.label.file": "Installer",
      "download.label.size": "Size",
      "download.label.hash": "SHA256",
      "download.cta": "Download installer",
      "download.secondary": "Install and risk notes",
      "download.cert": "Download public certificate",
      "download.signing": "Signature and verification",
      "download.warning": "Project self signed certificate (not a public CA) · Windows may show an unknown publisher warning on first run",
      "faq.kicker": "Common questions",
      "faq.title": "What to know before installing",
      "faq.lead": "A few of the questions we see most. The full notes live in the install guide.",
      "faq.q1": "Which Windows versions does Mouse Combo support?",
      "faq.a1": "Windows 10 / 11 64 bit. The installer installs for the current user and does not require administrator rights. To control a target app that runs as administrator, start Mouse Combo as administrator as well.",
      "faq.q2": "Is 0.001 ms a physical input accuracy?",
      "faq.a2": "No. 0.001 ms is the step for input, storage and internal scheduling. The time an event reaches the target app is still affected by Windows scheduling, the USB polling rate and the target app. The footer reports internal scheduling error.",
      "faq.q3": "Will games or anti cheat software detect or ban it?",
      "faq.a3": "They might. The program uses SendInput and global hooks, and some games, anti cheat tools or platform rules limit or ban simulated input. Follow the terms of the target software and never use it for cheating or illegal activity.",
      "faq.q4": "Does it need a network connection? Does it upload data?",
      "faq.a4": "Macros and settings run locally and we do not collect usage data. The installed edition contacts GitHub Releases to check for updates; the source edition does not connect automatically.",
      "faq.q5": "Where are macros and settings stored? Will uninstalling remove them?",
      "faq.a5": "Settings and macros are stored in %APPDATA%\\MouseCombo. Uninstalling removes local settings and macro files, so back them up first.",
      "faq.q6": "Will a side button still reach the browser or game?",
      "faq.a6": "A side button configured as the hotkey is consumed globally and no longer triggers browser back or forward. Side buttons that are not configured keep their default system behavior.",
      "risk.kicker": "Read before installing",
      "risk.title": "Risk statement",
      "risk.lead": "This program simulates real mouse clicks and key presses and installs global keyboard and mouse hooks. It can cause wrong clicks, data loss, account penalties, platform rule conflicts or legal risk in real applications. Test it in a safe environment and confirm that your use case is legal and allowed.",
      "risk.li1": "It may violate laws, platform terms or employer rules. Do not use it for cheating, fraud, evading risk controls or any illegal purpose.",
      "risk.li2": "Simulated input takes effect for real and can cause wrong clicks, deletion, messages or payments that usually cannot be undone.",
      "risk.li3": "It may trigger platform bans, account or virtual asset loss, or affect third party devices and data.",
      "risk.li4": "Global hooks may conflict with anti cheat tools, security software, remote desktop, input methods or other macro tools.",
      "risk.li5": "Settings and macros are stored in plain text on this machine. Uninstalling removes local data, so keep your own backup.",
      "risk.guide": "The full notes cover laws and platform rules, wrong input, accounts and third parties, system compatibility, permissions, privacy, timing, hardware, third party components and the lack of warranty. Please read",
      "risk.guideLink": "the install guide and full risk statement",
      "risk.note": "The installer license page shows the same text in full. Installation continues only after you choose I accept.",
      "risk.caption": "If you do not agree with any of the above, stop installing and using the program and delete it and its configuration files.",
      "risk.final": "This project is for learning and reference only and must not be used for any illegal activity.",
      "footer.local": "Local · No data collection",
      "footer.guide": "Install and risk",
      "footer.privacy": "Privacy and data",
      "footer.cert": "Code signing certificate",
      "footer.copyright": "© 2026 Mouse Combo",
      "notfound.title": "This page does not exist.",
      "notfound.body": "The link may have expired, or the address may be wrong. Return home to continue exploring Mouse Combo.",
      "notfound.cta": "Back to home",
    },
  };

  const META = {
    zh: {
      title: "Mouse Combo · 精确到每一步的鼠标与键盘宏",
      description:
        "Mouse Combo 是 Windows 上的本地鼠标与键盘宏工具。每一步独立计时，侧键可作开关键，宏库内嵌在主窗口。下载安装包。",
    },
    ja: {
      title: "Mouse Combo · ステップごとに精密なマウス/キーボードマクロ",
      description:
        "Mouse Combo は Windows 向けのローカルなマウス/キーボードマクロツールです。ステップ別タイミング、サイドボタンのホットキー、内蔵マクロライブラリ。インストーラーをダウンロード。",
    },
    en: {
      title: "Mouse Combo · Precise mouse and keyboard macros",
      description:
        "Mouse Combo is a local mouse and keyboard macro tool for Windows. Per step timing, side button hotkey and an inline macro library. Download the Windows installer.",
    },
  };

  const LANGUAGE_TAG = { zh: "zh-CN", ja: "ja", en: "en" };
  const GUIDE = { zh: "guide.html", ja: "guide.ja.html", en: "guide.en.html" };
  let current = "zh";

  const apply = (language) => {
    const lang = language in TEXT ? language : "zh";
    current = lang;
    const dictionary = TEXT[lang] || TEXT.zh;
    const fallback = TEXT.zh;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = dictionary[key] ?? fallback[key] ?? "";
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.getAttribute("data-i18n-html");
      node.innerHTML = dictionary[key] ?? fallback[key] ?? "";
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
      const key = node.getAttribute("data-i18n-alt");
      node.setAttribute("alt", dictionary[key] ?? fallback[key] ?? "");
    });
    const shot = document.querySelector("[data-app-shot]");
    if (shot) {
      const screenshots = {
        zh: "assets/main_populated.png",
        ja: "assets/main_ja.png",
        en: "assets/main_en.png",
      };
      shot.setAttribute("src", screenshots[lang] || screenshots.zh);
    }
    const meta = META[lang] || META.zh;
    const isNotFound = Boolean(document.querySelector(".error-page"));
    document.title = isNotFound ? "404 · Mouse Combo" : meta.title;
    const description = isNotFound
      ? (dictionary["notfound.body"] ?? fallback["notfound.body"])
      : meta.description;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.documentElement.lang = LANGUAGE_TAG[lang];
    const guide = GUIDE[lang] || GUIDE.zh;
    document.querySelectorAll('a[href^="guide"]').forEach((link) => {
      link.setAttribute("href", guide + (link.hash || ""));
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
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
      // Ignore file URLs or restricted history.
    }
    window.dispatchEvent(new CustomEvent("site:languagechange", { detail: { lang } }));
  };

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let stored = null;
  try {
    stored = localStorage.getItem("mousecombo.site.lang");
  } catch (error) {
    stored = null;
  }
  const initial =
    queryLanguage && queryLanguage in TEXT
      ? queryLanguage
      : stored && stored in TEXT
        ? stored
        : "zh";
  apply(initial);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => apply(button.getAttribute("data-lang")));
  });
  window.__mouseComboLanguage = () => current;
})();
