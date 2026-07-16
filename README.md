# Dark Moon Rocks PWA

A small, installable website for Dark Moon Rocks. It uses plain HTML, CSS and
JavaScript, with no framework or build step.

## Pages

- `index.html` - home page
- `doorways.html` - links
- `offline.html` - message shown when an uncached page is unavailable

## The easiest way to edit content

1. Open the page you want to change on GitHub.
2. Select the pencil icon to edit it.
3. Look for a comment beginning with `BEGINNER EDIT`.
4. Change the sample title, description or link.
5. Select **Commit changes**.

Most links currently use `href="#"`. Replace the `#` with the full address of
your audio, newsletter or article.

For the live radio player, open `radio.html` and replace:

```html
YOUR-RADIO-STREAM-URL
```

with the direct address of your MP3 or internet radio stream.

## Change colors

Open `styles.css`. The color names are grouped at the very top:

```css
:root {
  --ink: #f7f1df;
  --night: #0d0a12;
  --gold: #e8bd66;
}
```

Changing these values updates every page.

## Publish with GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Select **Save**.

GitHub will provide an HTTPS address. HTTPS is required for installation and
offline support.

## Install the app

After the site is published, visit it in a supported browser. Use the browser's
install option or the **Install app** button on the home page when it appears.
On iPhone or iPad, use **Share**, then **Add to Home Screen**.

## When files change

The service worker stores pages for offline use. After a larger site update,
change `dark-moon-rocks-v1` near the top of `service-worker.js` to
`dark-moon-rocks-v2`. This tells existing installations to refresh their saved
files.
