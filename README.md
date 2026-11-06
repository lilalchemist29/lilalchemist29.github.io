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

## Automatic Google Drive backup (free)

The app can back itself up to your Google Drive whenever the tablet is online, into a folder called **rngwillbake POS backups** (one file per day, last 30 days kept). It can only see files it created there, nothing else in your Drive.

### One-time setup (about 15 minutes, on any browser)

Use the Google account whose Drive should hold the backups.

1. Go to **console.cloud.google.com** and create a project named `rngwillbake POS`.
2. **Turn on Drive:** search the top bar for **Google Drive API**, open it, and tap **Enable**.
3. **Sign-in screen:** search for **Google Auth Platform** (or "OAuth consent screen") and tap **Get started**.
   - App name `rngwillbake POS`, your email as support email.
   - Audience: **External**. Contact email: yours. Agree and **Create**.
4. **Permission:** open **Data access → Add or remove scopes**, tick `.../auth/drive.file` (“See, edit, create and delete only the specific Google Drive files you use with this app”), then **Update** and **Save**.
5. **Publish it:** open **Audience** and tap **Publish app** → **Confirm**. This stops Google from asking for permission again every week. Because the app only uses the “its own files” permission, Google doesn't need to review it.
6. **Make the key:** open **Clients → Create client**.
   - Application type: **Web application**. Name: `rngwillbake POS tablet`.
   - Under **Authorized JavaScript origins**, tap **Add URI** and enter `https://lilalchemist29.github.io` (no slash at the end).
   - Tap **Create** and copy the **Client ID** (it ends in `.apps.googleusercontent.com`).
7. **In the app:** Settings → **Google Drive backup** → paste the Client ID → **Save client ID** → **Connect Google Drive**.
   - Sign in and allow access. If Google shows “Google hasn’t verified this app”, tap **Advanced → Go to rngwillbake POS** (it’s your own app).

### Day to day

- While the tablet is online, the app backs up on its own at most every two hours, whenever there are new sales or changes.
- Google’s sign-in lasts about an hour. After that, when there’s something new to back up and you’re online, a **Back up to Drive** button appears at the top: one tap and it’s done.
- With no internet, sales are saved on the tablet as usual and backed up next time you’re online.
- To restore: open the backup file in the Google Drive app, download it, then use **Settings → Restore from backup**.

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
