# New ETF Engine

A standalone 10-ETF quantitative research dashboard designed specifically for **long-term investment decision support**. This repository is intentionally separate from the existing ETF project.

## Universe

NIFTYBEES, GOLDBEES, SILVERBEES, JUNIORBEES, MID150BEES, MON100, BANKBEES, ITBEES, PHARMABEES, CPSEETF.

## Data flow

Browser → Next.js server API → Upstox → calculation engine → dashboard.

The Upstox access token is read only from the server-side `UPSTOX_ANALYTICS_TOKEN` environment variable. It is not exposed to browser code and is not committed to GitHub.

## Long-term metrics

Current price, previous close, Today %, 5D, 20D, 90D, 1Y return, trailing 252-trading-day high, drawdown, annualized 20-day volatility, Long-Term Opportunity Score and signal.

52-week drawdown is calculated as `(Current Price / Trailing 252-Day High - 1) × 100`, using the daily candle `high` values for the high-water mark.

## Long-Term Opportunity Score

The score is deliberately **not a day-trading score**. Today's move is displayed for context but does not influence the ranking.

The score emphasizes:

- **1Y trend: 40%**
- **90D trend: 25%**
- **20D trend: 15%**
- **52-week drawdown/entry zone: 12%**
- **20D volatility/risk: 8%**

A positive 1Y and 90D trend is required for a high-conviction `ACCUMULATE` signal. A healthy pullback can improve an opportunity score, while a very deep drawdown or excessive volatility is penalized. A stock/ETF falling sharply in one day cannot become the best long-term opportunity merely because it fell.

## Signals

Signals are `ACCUMULATE`, `HOLD`, `WATCH`, and `DATA ERROR`.

`ACCUMULATE` means the quantitative long-term trend is constructive and the current drawdown/entry conditions are potentially favorable. It is not a guarantee of future returns and is not personalized financial advice.

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

This dashboard is a quantitative research/decision-support tool for long-term investing. Signals are quantitative outputs, not guarantees of future returns and not personalized financial advice.
