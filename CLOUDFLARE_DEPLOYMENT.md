# 🚀 Cloudflare Pages Continuous Deployment Guide

This guide walks you through connecting your portfolio repository to **Cloudflare Pages** so that every time you push changes to your `main` branch, your website automatically rebuilds and deploys.

---

## 🛠️ Prerequisite Configuration (Completed)

We have already updated the codebase to support Cloudflare Pages perfectly:
1. **SPA Routing Support (`public/_redirects`)**: Ensures deep links (e.g., custom routes, direct URL hits) route correctly to the single-page application without throwing 404 errors.
2. **Cloudflare Wrangler Configuration (`wrangler.toml`)**: Declares the project name, builds directory (`dist`), and configures SPA behavior locally and during deployment.

---

## 📦 Connecting to Cloudflare Pages (Step-by-Step)

Follow these simple steps to link your repository:

### Step 1: Sign in to Cloudflare
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and sign in.
2. In the left-hand sidebar, navigate to **Workers & Pages**.

### Step 2: Create a New Pages Project
1. Click the **Create** button at the top-right of the Workers & Pages dashboard.
2. Select the **Pages** tab.
3. Click **Connect to Git**.

### Step 3: Link Your GitHub Repository
1. Select **GitHub** as your Git provider and authorize Cloudflare to access your repository if prompted.
2. Search for and select your repository: `kesha-kaneria-portfolio`.
3. Click **Begin setup**.

### Step 4: Configure Build Settings
Under the **Build settings** section, configure the following options:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **Project name** | `kesha-kaneria-portfolio` | The URL of your project will be `kesha-kaneria-portfolio.pages.dev` |
| **Production branch** | `main` | Cloudflare will deploy pushes to this branch to production |
| **Framework preset** | **Vite** | Selects the default build settings for Vite |
| **Build command** | `npm run build` | Commands used to compile the production build |
| **Build output directory** | `dist` | The folder Vite compiles files into |

### Step 5: Save and Deploy
1. Click **Save and Deploy**.
2. Cloudflare will fetch the repository, run the initial build, and launch your live portfolio!
3. Once complete, you will receive a unique `.pages.dev` URL for your site.

---

## 🔄 Automatic Redeployments

Now, whenever you push any updates to GitHub:
```bash
git add .
git commit -m "feat: updated career timeline"
git push origin main
```
Cloudflare Pages will immediately detect the push, build the production version of the portfolio, and update the live website automatically in under a minute!
