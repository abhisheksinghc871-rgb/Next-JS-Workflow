# Trailhead (Next.js 15, static export)

## Local chalane ke liye
    npm install
    npm run dev      # http://localhost:3000

## Static build
    npm run build    # output: out/

## GitHub Pages par deploy
1. GitHub par naya repository banao aur ye saari files push karo (branch: main).
2. Repo > Settings > Pages > Source: **GitHub Actions**.
3. Push hote hi workflow chalega. Live URL: https://<username>.github.io/<repo>/

Workflow repo ke naam se BASE_PATH apne aap set karta hai (next.config.mjs mein use hota hai).
