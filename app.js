document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carousel-proceso");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -320, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: 320, behavior: "smooth" });
  });
});
