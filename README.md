# Nandhika static website
Production-ready static website for GitHub Pages. No backend required.

## GitHub Pages
Upload all files in this folder to a repository root, then enable **Settings → Pages → Deploy from branch → main / root**.

## Google Sheet order logging
1. Create a Google Sheet.
2. Extensions → Apps Script.
3. Paste `google-apps-script.gs`.
4. Deploy as Web App. Execute as **Me**, access **Anyone**.
5. Paste the `/exec` URL into `GOOGLE_SHEET_WEB_APP_URL` in `script.js`.
6. Update `EMAIL_RECIPIENT` in `google-apps-script.gs` if the order notification email should go to a different inbox.

When a customer submits the order form, the site now:
- opens WhatsApp with the filled order message
- closes the popup and shows a success toast
- posts the same order details to the Google Apps Script endpoint
- stores the order in the Google Sheet and sends an email notification from Apps Script

## WhatsApp
Configured in `script.js` as `919895431982`.

## Assets
`assets/logo.svg`, `product-500ml.svg`, `product-1l.svg`, `product-2l.svg`, and `product-5l.svg` are standalone vector assets created for this site; they are not cropped from the design screenshot, so they remain sharp at any screen size.
