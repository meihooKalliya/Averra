# Claude AI Integration - Setup Instructions

## 🚀 Quick Start Guide

### Prerequisites
- Node.js installed (v18 or higher)
- Anthropic API key (get one from [console.anthropic.com](https://console.anthropic.com))
- Vercel account (for deployment) or local development environment

---

## Step 1: Get Your API Key

1. Visit https://console.anthropic.com
2. Sign up or log in
3. Navigate to "API Keys" section
4. Click "Create Key"
5. Copy your API key (starts with `sk-ant-...`)

---

## Step 2: Configure Environment

Create a `.env.local` file in the project root:

```bash
# Copy the example file
copy .env.local.example .env.local
```

Then edit `.env.local` and add your API key:

```
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

> ⚠️ **Important**: Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## Step 3: Install Dependencies

```bash
npm install
```

This will install the `@anthropic-ai/sdk` package and all other dependencies.

---

## Step 4: Run Locally

### Option A: Development with Local API (Recommended for Testing)

For local testing, you'll need to run a local dev server that supports serverless functions.

Using Vercel CLI:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Run development server
vercel dev
```

The app will be available at `http://localhost:3000`

### Option B: Development with Vite Only (Limited Functionality)

```bash
npm run dev
```

> **Note**: The chat won't work with just Vite dev server because the API endpoints need serverless function support. You must use `vercel dev` or deploy to Vercel.

---

## Step 5: Test the Chat

1. Open your browser to `http://localhost:3000`
2. Look for the floating chat bubble in the bottom-right corner
3. Click the bubble to open the chat
4. Type a message like: "What is forex trading?"
5. You should see the AI response streaming in

---

## Step 6: Deploy to Vercel

### First-time Deployment

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

### Add Environment Variable to Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add new variable:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Your API key
   - **Environment**: Production, Preview, Development (select all)
5. Click "Save"

### Redeploy

```bash
vercel --prod
```

---

## 🎨 Features Implemented

✅ **AI Forex Chatbot**
- Streaming responses for better UX
- Forex-specific expertise
- Beautiful glassmorphism UI
- Mobile responsive

✅ **Rate Limiting**
- 10 requests per minute per IP
- Prevents abuse and controls costs

✅ **Error Handling**
- Graceful error messages
- Retry functionality
- Network error handling

✅ **Site-wide Integration**
- Chat widget appears on all pages
- Fixed bottom-right position
- Keyboard navigation support

---

## 💰 Cost Management

### Monitor Usage

1. Visit https://console.anthropic.com/usage
2. Check your API usage
3. Set up billing alerts

### Expected Costs

With current configuration:
- **Development**: ~$5-10/month (light testing)
- **Production**: ~$30-80/month (500-2000 conversations)

### Cost Optimization Tips

1. **Prompt Caching** (future enhancement):
   - Can reduce costs by 90% for repeated content
   
2. **Model Selection**:
   - Currently using Claude Sonnet 4.5 (best balance)
   - Can switch to Claude Haiku for cheaper, simpler queries

3. **Rate Limiting**:
   - Already implemented to prevent abuse

---

## 🛠️ Troubleshooting

### Chat bubble appears but widget doesn't work

**Issue**: API endpoints not running

**Solution**: Make sure you're using `vercel dev` instead of `npm run dev`

```bash
vercel dev
```

---

### "API authentication failed" error

**Issue**: Invalid or missing API key

**Solution**: 
1. Check your `.env.local` file
2. Ensure the key starts with `sk-ant-`
3. Try regenerating the key in Anthropic console

---

### "Rate limit exceeded" error

**Issue**: Too many requests

**Solution**: Wait 1 minute. The rate limit resets every minute.

---

### Chat not appearing on deployed site

**Issue**: Environment variable not set in Vercel

**Solution**:
1. Go to Vercel project settings
2. Add `ANTHROPIC_API_KEY` environment variable
3. Redeploy the application

---

### Styling looks broken

**Issue**: CSS not loading properly

**Solution**:
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors

---

## 🔧 Customization

### Change Chat Position

Edit `src/components/ChatWidget.jsx`, line 160:

```javascript
// Change from bottom-right to bottom-left
<div className="fixed bottom-6 left-6 z-50">
```

### Modify System Prompt

Edit `api/chat.js`, around line 60:

```javascript
const systemPrompt = `Your custom prompt here...`;
```

### Adjust Rate Limits

Edit `api/chat.js`, line 12:

```javascript
// Change from 10 to your desired limit
if (count >= 20) return false; // 20 requests per minute
```

### Change Chat Colors

Edit `src/components/ChatWidget.jsx`, search for gradient colors and modify as needed.

---

## 📚 Next Steps

Now that the chatbot is working, you can:

1. ✅ **Monitor usage** in Anthropic console
2. ✅ **Collect user feedback** 
3. ✅ **Implement Phase 2 features** (Financial Data Analyst)
4. ✅ **Add conversation persistence** (save chat history)
5. ✅ **Implement prompt caching** (reduce costs)

---

## 🆘 Support

If you encounter issues:

1. Check the browser console for errors (F12)
2. Check Vercel deployment logs
3. Review Anthropic API status: https://status.anthropic.com
4. Check implementation plan for detailed architecture

---

## ✅ Success Checklist

- [ ] API key obtained from Anthropic
- [ ] `.env.local` file created with API key
- [ ] Dependencies installed (`npm install`)
- [ ] Local dev server running (`vercel dev`)
- [ ] Chat bubble visible on website
- [ ] Chat opens when clicked
- [ ] Can send messages and receive AI responses
- [ ] Environment variable added to Vercel
- [ ] Deployed to production
- [ ] Monitoring usage in Anthropic console

---

**Congratulations!** 🎉 Your AI-powered forex chatbot is now live!
