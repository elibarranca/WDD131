console.log("Cool Pics loaded!");

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
});

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector('.gallery');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewer-img');
const closeButton = document.querySelector('#close-viewer');

gallery.addEventListener('click', function (event) {
  const clickedImage = event.target.closest('img');
  if (clickedImage) {
    const smallSrc = clickedImage.getAttribute('src');
    const altText = clickedImage.getAttribute('alt');

    const fullSrc = smallSrc.replace('-sm.jpeg', '-full.jpeg');

    viewerImage.src = fullSrc;
    viewerImage.alt = altText;
    viewer.showModal();
  }
});

closeButton.addEventListener('click', function () {
  viewer.close();
});

viewer.addEventListener('click', function (event) {
  if (event.target === viewer) {
    viewer.close();
  }
});