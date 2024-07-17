const adSelectors = [
  'iframe[src*="ad"]',
  'div[class*="ad"]',
  'div[id*="ad"]',
  'img[src*="ad"]',
  '.ad-class', 
  '#ad-id'
];

function removeAds() {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(ad => ad.remove());
  });
}

const observer = new MutationObserver(removeAds);
observer.observe(document, { childList: true, subtree: true });

removeAds();
