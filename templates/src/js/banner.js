var Banner = document.querySelector('section#banner');

function BannerAnimation (element) {
  var elem = element;
  element.style.background = "#19a635";
  setInterval(() => {
    element.style.background = "#263b2a";
    setTimeout(() => {
        element.style.background = "#19a635";
    }, 1000)
  }, 2000)
}

BannerAnimation(Banner);
