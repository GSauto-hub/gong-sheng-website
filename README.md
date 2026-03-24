# Gong Sheng Website (GitHub Pages Ready)

This package is prepared for deployment to GitHub Pages with the custom domain `gong-sheng.com.tw`.

## What was prepared
- Flattened the old `httpdocs/` structure so the site root now starts with `index.html`
- Added `CNAME` for `gong-sheng.com.tw`
- Added `.nojekyll`
- Removed hosting-specific files that are not needed on GitHub Pages
- Removed FrontPage metadata folders (`_vti_cnf`)
- Updated `acc/headquarters.html` to include the Malaysia and China branches
- Replaced a known injected spam block that appeared in several pages
- Switched some embedded external URLs from `http` to `https` to avoid mixed-content issues

## Important limitation
GitHub Pages only hosts static files.
These pages still contain an old form action that points to `/cgi-sys/FormMail.cgi`, which will **not work** on GitHub Pages:

- `acc/contactus.html`
- `acc_cn/contactus.html`

If you need the contact form to submit after the migration, use one of these approaches later:
- replace it with a `mailto:` link
- use a third-party form service
- move only the form endpoint to another server

## Publish steps
1. Create a GitHub repository
2. Upload the contents of this folder to the repository root
3. In GitHub: **Settings → Pages**
4. Set source to **Deploy from branch**
5. Choose branch `main` and folder `/ (root)`
6. In **Settings → Pages**, set the custom domain to `gong-sheng.com.tw`
7. After DNS points to GitHub Pages, enable **Enforce HTTPS**

## DNS reminder
For the apex domain `gong-sheng.com.tw`, GitHub's docs say to use these `A` records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, create a `CNAME` to:
- `<your-github-username>.github.io`

Do not remove your existing MX records if your company email uses this domain.
