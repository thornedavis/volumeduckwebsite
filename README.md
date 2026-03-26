# Volume Duck Website

Single-page marketing and download site for Volume Duck.

## Local preview

From the repo root:

```bash
cd public
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploying to Cloudflare Pages

This repo is set up for Cloudflare Pages direct upload through GitHub Actions.

1. In Cloudflare, create a Pages project named `volumeduckwebsite`.
2. In the GitHub repo, add these repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push to `main`.
4. In Cloudflare Pages, attach the custom domain `volumeduck.com`.

If you want a different Pages project name, update [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Updating the app download

Replace [`public/downloads/VolumeDuck.dmg`](public/downloads/VolumeDuck.dmg) with the latest build before deploying.

Cloudflare Pages currently allows a maximum single asset size of 25 MiB, so keep the DMG under that limit if you want to continue serving it directly from the site.
