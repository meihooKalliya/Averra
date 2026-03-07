# Averra Platform

Averra is a high-performance B2B autonomous cold-calling platform powered by conversational AI. It automates the entire outbound sales process: scraping leads, holding human-like phone conversations, qualifying intent, and booking meetings directly into CRM calendars.

## 🚀 Features

- **Human-Level AI Voices**: Conversational agents with <1.2s latency.
- **Autonomous SDRs**: Dials thousands of leads 24/7.
- **Lead Scraper**: Built-in discovery engine with advanced filtering.
- **Calendar Integration**: Seamless sync with Google Calendar for automated booking.
- **AI Concierge**: Real-time chat widget for website visitors.

## 🛠 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Vercel Serverless Functions (Node.js)
- **AI**: Anthropic Claude API

## 📦 Deployment on Vercel

To host Averra on Vercel:

1. **Push to GitHub**: Initialize a repository and push the code.
2. **Connect to Vercel**: Import the project from GitHub.
3. **Environment Variables**: Add the following in Vercel Settings:
   - `ANTHROPIC_API_KEY`: Your Anthropic API key.
   - `ANTHROPIC_MODEL`: (Optional) `claude-3-5-sonnet-20240620`.
4. **Build Settings**: Vercel should auto-detect Vite. The build command is `npm run build` and the output directory is `dist`.

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file based on `.env.local.example`.
3. Start the dev server:
   ```bash
   npm run dev
   ```

---
© 2026 Averra AI Inc. All rights reserved.
