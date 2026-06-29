# Playwright E2E Starter Kit

**Production-ready end-to-end testing in an afternoon.** A clean, opinionated Playwright + TypeScript foundation with the Page Object Model, custom fixtures, CI wired up, and real example tests you can run in 60 seconds — then point at your own app.

Built by an SDET who does this for a living. No fluff, no 200-dependency boilerplate — just the structure teams actually use.

---

## Why this kit

Most teams stall on the *setup*: how to structure pages, share auth, keep tests stable, and get them running in CI. This kit gives you all of that, already wired:

- ✅ **Page Object Model** — selectors live in one place; specs read like user stories.
- ✅ **Custom fixtures** — page objects and a one-line `loggedIn` state injected into every test.
- ✅ **GitHub Actions CI** — runs on every push/PR, uploads the HTML report as an artifact.
- ✅ **Stability built in** — CI retries, trace/video/screenshot on failure only, sane timeouts.
- ✅ **Env-driven config** — same suite runs locally and in CI with zero edits.
- ✅ **Real, passing examples** — login (happy + error paths), cart, full checkout flow.
- ✅ **TypeScript strict mode** — catch mistakes before they reach CI.

Targets the public [SauceDemo](https://www.saucedemo.com) practice site so everything runs out of the box. Swap `BASE_URL` and the page objects for your app.

---

## Quick start (60 seconds)

```bash
npm install
npm run install:browsers      # one-time: download Chromium
cp .env.example .env
npm test                      # run the full suite
npm run report                # open the HTML report
```

Useful scripts:

| Command | What it does |
|---|---|
| `npm test` | Run all tests (headless) |
| `npm run test:headed` | Watch the browser as tests run |
| `npm run test:ui` | Playwright's interactive UI mode |
| `npm run test:smoke` | Run only `@smoke`-tagged critical-path tests |
| `npm run test:debug` | Step through tests in the inspector |
| `npm run codegen` | Record new tests by clicking through the app |

---

## Project structure

```
playwright-e2e-starter-kit/
├── playwright.config.ts      # env-driven config, reporters, retries, artifacts
├── .github/workflows/e2e.yml # CI: install → test → upload report
├── pages/                    # Page Object Model
│   ├── BasePage.ts           #   shared navigation + selector helpers
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── fixtures/
│   └── test-options.ts       # injects page objects + `loggedIn` auth state
├── tests/
│   ├── login.spec.ts         # happy path + invalid + locked-out
│   ├── cart.spec.ts
│   └── checkout.spec.ts      # full end-to-end order
├── utils/
│   └── test-data.ts          # users, products, checkout data in one place
└── .env.example
```

---

## How to adapt it to your app

1. Set `BASE_URL` in `.env` to your app.
2. Update credentials/data in `utils/test-data.ts`.
3. Rewrite the selectors in `pages/*` for your UI (use `npm run codegen` to discover them fast).
4. Replace the example specs in `tests/` with your critical flows.
5. Push — CI runs automatically and publishes the HTML report.

The patterns (BasePage, fixtures, the `loggedIn` arrange step, `@smoke` tagging) carry over unchanged.

---

## What's intentionally NOT here

Kept lean on purpose. Easy to add when you need them (each is a few lines in `playwright.config.ts`):

- Cross-browser projects (Firefox/WebKit/mobile) — commented out, ready to enable.
- Storage-state auth reuse for large suites.
- Visual regression / accessibility plugins.

---

## License

MIT — use it in commercial projects freely.

---

*Want this set up against your actual app, or a flaky CI suite stabilized? That's what I do.*
