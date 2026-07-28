## Problem

`src/routes/index.tsx` imports asset pointers from `../assets/*.asset.json`, but that folder doesn't exist. The actual `.asset.json` pointer files live under `public/images/`. This causes all product/gallery/logo images to fail to load in the deployed build.

## Fix

Update the 9 import paths at the top of `src/routes/index.tsx` from `../assets/<file>.asset.json` to `../../public/images/<file>.asset.json`:

- `logo.jpg.asset.json`
- `image.png.asset.json`
- `image-2.png` … `image-8.png` (7 files)

Each imported object still exposes `.url` pointing at the CDN (`/__l5e/assets-v1/...`), so no other code changes are needed.

## Verify

Run `bun run build` and confirm it exits 0, then check the preview to confirm hero, product, gallery, and logo images render.
