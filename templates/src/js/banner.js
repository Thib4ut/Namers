var Banner = document.querySelector('section#banner');

function BannerAnimation (element) {
  var elem = element;
  element.style.background = "#19a635";
  setInterval(() => {
    element.style.background = "#04b344";
    setTimeout(() => {
        element.style.background = "#19a635";
    }, 2500)
  }, 5000)
}

BannerAnimation(Banner);
