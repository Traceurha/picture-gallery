document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");

  function getRandomImage() {
    const randomImage = `https://source.unsplash.com/random/300x300?sig=${Math.floor(Math.random() * 1000)}`;
    return randomImage;
  }

  function createImageDivs() {
    for (let i = 0; i < 21; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = getRandomImage();
      div.appendChild(img);
      container.appendChild(div);
    }
  }

  createImageDivs();
});
