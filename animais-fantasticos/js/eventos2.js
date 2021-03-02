const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  function handleImg(event) {
    console.log(event.target);
  }

  img.addEventListener("click", handleImg);
});
