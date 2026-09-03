# New ETF Engine

A standalone 10-ETF quantitative research dashboard. This repository is intentionally separate from the existing ETF project.

## Universe

NIFTYBEES, GOLDBEES, SILVERBEES, JUNIORBEES, MID150BEES, MON100, BANKBEES, ITBEES, PHARMABEES, CPSEETF.

## Data flow

Browser → Next.js server API → Upstox → calculation engine → dashboard.

The Upstox access token is read only from the server-side `UPSTOX_ANALYTICS_TOKEN` environment variable. It is not exposed to browser code and is not committed to GitHub.

## Metrics

Current price, previous close, Today %, 5D, 20D, 90D, trailing 252-trading-day high, drawdown, annualized 20-day volatility, Opportunity Score and signal.

52-week drawdown is calculated as `(Current Price / Trailing 252-Day High - 1) × 100`, using the daily candle `high` values for the high-water mark.

## Opportunity signal

Signals are `ACCUMULATE`, `HOLD`, `WATCH`, and `DATA ERROR`. The score rewards constructive medium/long trend and momentum, can recognize a healthy pullback, and penalizes weak long-term trend, deep drawdown and high volatility. A large fall by itself does not create an accumulation signal.

## Local setup

```bash
npm install
cp .env.example .env.local
```

Put the Upstox Analytics Access Token only in `.env.local`:

```bash
UPSTOX_ANALYTICS_TOKEN=your_token_here
```

Then run:

```bash
npm run dev
```

## Vercel later

Import **this repository only** into Vercel, then add `UPSTOX_ANALYTICS_TOKEN` as a server-side environment variable. Do not connect the existing ETF project to this repository.

## Disclaimer

This dashboard is a research/decision-support tool. Signals are quantitative outputs, not guarantees of future returns and not personalized financial advice.
