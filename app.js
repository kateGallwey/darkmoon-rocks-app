// Register the service worker so the app can work offline.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

// Show an install button when the browser says the app is ready to install.
let installPrompt;
const installButton = document.querySelector("#install-button");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  if (installButton) installButton.hidden = false;
});

installButton?.addEventListener("click", async () => {
  installButton.hidden = true;
  await installPrompt.prompt();
  installPrompt = null;
});
