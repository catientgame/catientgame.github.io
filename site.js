/* Reveal the real 1.1 capture only after it loads. The branded fallback works
   with a missing image or with JavaScript disabled. */
(() => {
  const screenshot = document.getElementById("gameplay");
  const fallback = document.getElementById("gameplay-fallback");
  if (!screenshot || !fallback) return;
  const image = new Image();
  image.onload = () => {
    screenshot.src = image.src;
    screenshot.width = image.naturalWidth;
    screenshot.height = image.naturalHeight;
    screenshot.hidden = false;
    fallback.hidden = true;
  };
  image.onerror = () => { /* Keep the existing accessible fallback. */ };
  image.src = new URL("gameplay.png", document.baseURI).href;
})();
