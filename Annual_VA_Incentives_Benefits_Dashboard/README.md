# Annual VA Incentives & Benefits Survey Dashboard

This is a standalone static dashboard built from the **Annual VA Incentives and Benefits Survey Responses.xlsx** workbook. It does not modify the original Google Sheet or the previous dashboard.

## Files
- `index.html` — dashboard page
- `styles.css` — design
- `app.js` — interactive behavior
- `data.js` — aggregated survey results

## Preview locally
Double-click `index.html` or drag it into a browser.

## Publish as a NEW GitHub Pages site
1. Create a new GitHub repository (for example `annual-va-benefits-dashboard`).
2. Upload all four dashboard files to the repository root.
3. In GitHub go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.
6. GitHub will provide the new dashboard URL.

## Updating the dashboard later
The visual design is separate from the data. For a manual update, replace the values in `data.js` and upload the revised file to GitHub. For a more automated workflow, regenerate `data.js` from a newer export of the survey workbook.

## Privacy
The dashboard intentionally excludes email addresses, Account Manager names, and individual responses. It uses aggregated results only.
