# AI Muse — Personal Attraction Intelligence

<p align="center">
  <strong>Discover your preferences. Understand creator signals. Make intentional connections.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-demo--MVP-8b5cf6" />
  <img src="https://img.shields.io/badge/AI-multimodal%20ready-06b6d4" />
  <img src="https://img.shields.io/badge/license-MIT-22c55e" />
</p>

> AI Muse is a privacy-first relationship intelligence sandbox. It turns user-provided media preferences and manually curated public creator notes into explainable insights, spending guardrails, and conversation drafts.

[简体中文](#简体中文) · [English](#english)

## English

### Product vision

AI Muse explores a simple question: **Can AI help people understand what they are attracted to, evaluate compatibility more thoughtfully, and interact with better boundaries?**

The demo combines six workflows:

1. **Preference Engine** — summarize imported likes, favorites, and watch-history exports into style and interest signals.
2. **Creator Intelligence** — maintain a personal catalog of creators using public information and user-authored notes.
3. **Relationship Signals** — track only explicitly disclosed or publicly stated relationship information; unknown stays unknown.
4. **Gift Budget Guard** — simulate gifts and enforce per-creator and monthly spending limits before any real-world action.
5. **Conversation Copilot** — draft respectful, context-aware replies for the user to review and send themselves.
6. **Compatibility Engine** — explain a provisional score from shared interests, communication quality, values, and reciprocal intent.

### Demo capabilities

- Responsive dark analytics dashboard.
- Seeded sample profiles and preference insights.
- Search, filters, and explainable match scoring.
- Editable creator notes and relationship-status labels.
- Per-creator and monthly gift budget simulation.
- Conversation reply suggestions (local demo templates; optional server-side LLM integration can be added).
- Local persistence with browser storage.

### Quick start

No build step is required.

```bash
git clone https://github.com/alf1ei/ai-love.git
cd ai-love
python -m http.server 4173
```

Open http://localhost:4173.

### Project structure

```text
.
├── index.html
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── scripts/
│   └── smoke-test.mjs
└── .github/
    └── workflows/
        └── ci.yml
```

### Data and privacy

- The demo uses synthetic sample data by default.
- Import only data you are authorized to access and export.
- No Douyin login automation, private-data scraping, anti-bot bypass, automated gifting, or automated direct messages are implemented.
- Gift amounts are simulations; the app never initiates payments.
- Relationship status is not inferred from appearance or engagement. Use explicit disclosures or mark it unknown.
- Conversation drafts are suggestions, not autonomous messages.
- Browser storage is local to the current browser profile. Do not enter sensitive personal data on shared devices.

### Roadmap

- [ ] Import adapters for user-owned export formats
- [ ] Optional server-side multimodal analysis provider
- [ ] Encrypted local database and data export
- [ ] Compatibility timeline and consent-aware interaction notes
- [ ] Official platform integrations, only where approved API scopes permit

### Disclaimer



## 简体中文

### 项目愿景

**AI Muse 是一个个人审美洞察与关系观察助手**：把用户主动提供的点赞/收藏/观看记录，以及人工整理的公开主播资料，转化为可解释的兴趣画像、消费边界和聊天建议。

### 六大模块

1. **Preference Engine｜偏好引擎**：分析用户授权导入的视频记录，提取风格、兴趣和内容偏好。
2. **Creator Intelligence｜主播档案**：维护主播资料、公开内容标签和个人观察笔记。
3. **Relationship Signals｜关系信号**：只记录本人明确表达或公开披露的信息；未知状态保持未知。
4. **Gift Budget Guard｜消费护栏**：模拟礼物消费，设置单主播与月度预算，超限前提醒。
5. **Conversation Copilot｜聊天助手**：根据上下文生成礼貌、自然的回复草稿，由用户自行审核和发送。
6. **Compatibility Engine｜匹配引擎**：基于共同兴趣、沟通质量、价值观和双向意愿给出解释性参考分数。

### 快速启动

无需安装依赖：

```bash
git clone https://github.com/alf1ei/WDNMD.git
cd WDNMD
python -m http.server 4173
```

浏览器打开 http://localhost:4173 即可体验。

### 当前 MVP 边界



### 技术说明

当前版本为零构建依赖的原生 HTML/CSS/JavaScript 演示应用，数据保存在浏览器 localStorage。项目刻意保持轻量，便于快速运行、演示和二次开发。

### 免责声明

本项目仅用于个人兴趣分析与交互式原型展示。匹配分数是启发式参考，不构成对他人性格、关系状态或恋爱意愿的事实判断。

---

