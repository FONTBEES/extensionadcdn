const ads = [
  {
    image: "https://fontbees.github.io/extensionadcdn/ad1.png",
    cta: "testing Now",
    link: "https://example.com/deal1"
  },

  {
    image: "https://via.placeholder.com/400x250?text=Workflow+10",
    cta: "Start Free Trial",
    link: "https://example.com/workflow10"
  }
];

const adContainer = document.getElementById('adContainer');
const adCTAEl = document.getElementById('adCTA');

function showRandomAd() {
  const idx = Math.floor(Math.random() * ads.length);
  const ad = ads[idx];

  adContainer.style.backgroundImage = `url('${ad.image}')`;
  adCTAEl.textContent = ad.cta;
  adCTAEl.href = ad.link;
}

// Show the first ad immediately:
showRandomAd();

// Change the ad every 10 seconds:
setInterval(showRandomAd, 10000);
