# rngwillbake POS: offline app

A point-of-sale app for the tablet. Once installed it runs with **no internet, no account and no Claude usage**. Everything is saved on the tablet. All parts are free or open source (see `CREDITS.txt`).

All the files sit in **one folder** on purpose, so you can upload them in one go, even from a phone or tablet.

## Step 1. Unzip

On Android: open **Files by Google** (or your Files app), tap the zip, then **Extract**. You get a folder with about 18 files.

## Step 2. Put it online once (free)

The tablet downloads the app from here one time. Only the app's files go online; your sales and customer data never leave the tablet.

1. **Create the repository.** In the **GitHub app** or at github.com, make a new repository named exactly **`YOURNAME.github.io`** (your GitHub username, then `.github.io`). Make it **Public** and tick **Add a README**.
2. **Upload the files (website only).** The GitHub app can't upload files, so open **github.com** in Chrome, sign in, and open the repository.
   - Tap **Add file → Upload files**. If you don't see it, tap Chrome's **⋮ → Desktop site**.
   - Tap **choose your files**, open the extracted folder, select **all** the files, and confirm.
   - Wait until every file shows in the list (the big ones take a moment), then tap **Commit changes**.
3. **Turn on the website (website only).** In the repository: **Settings → Pages**. Under *Branch* pick `main` and `/ (root)`, then **Save**.
4. After a minute the app is live at `https://YOURNAME.github.io/`.

## Step 3. Install it on the tablet

1. Open `https://YOURNAME.github.io/` in **Chrome** on the tablet.
2. When the menu shows, tap **⋮ → Install app** (or **Add to Home screen → Install**).
3. Open it from the new **rngwillbake POS** icon. Turn on airplane mode and open it again to check it works offline.

## Step 4. Move your records over

1. In the Claude version: **Settings → Your data → Back up everything**. Save the file.
2. Get the file onto the tablet (Google Drive, Messenger to yourself, or a USB cable).
3. In the new app: **Settings → Your data → Restore from backup**, pick the file, tap **Restore**.

## Everyday notes

- **Back up weekly** and keep the file off the tablet. Uninstalling the app or clearing Chrome's data for it erases everything on the tablet.
- **Reading reference numbers** happens on the tablet. The first photo after opening the app takes a few seconds. Always compare the number with the photo; it can be edited.
- Don't open the app in two windows at once.

## Printing

- **Regular printer:** Print slip → Print. Android's print window opens.
- **Bluetooth thermal printer:** Settings → Printing → Slip size 58 mm or 80 mm. Then Print slip → **Send to printer app** (or **Save for printing** and open the image in the printer's app). If your printer's app can't print images, the free **RawBT** app usually can.

## Updating later

Upload the new files to the same repository (replace the old ones). The tablet picks up the new version the next time it opens the app with internet. Back up first.

## Optional: a real APK file

1. In the repository, tap **Add file → Create new file**, name it `.nojekyll` (with the dot), leave it empty, and commit. This lets GitHub publish the `.well-known` folder in step 4.
2. Open **pwabuilder.com** (free, open source), paste `https://YOURNAME.github.io/`, tap **Start**, choose **Android**, and download the package (package ID such as `com.rngwillbake.pos`).
3. **Keep the signing key file and passwords** from that download somewhere safe; you need them to rebuild the APK later.
4. Open `assetlinks.json` from the download and copy its text. In the repository: **Add file → Create new file**, name it `.well-known/assetlinks.json`, paste, and commit. This removes the browser address bar from the APK.
5. Copy the `.apk` to the tablet, tap it, and allow **Install unknown apps** when asked.

The APK runs on Chrome, so keep Chrome installed and updated. App changes still come from GitHub; rebuild the APK only to change the icon or name. Each tablet keeps its own data.
