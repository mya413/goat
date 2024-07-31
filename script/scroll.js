const scrollBottom = document.querySelector(".scrollBottom");

scrollBottom.addEventListener("click", () => {
  window.scrollTo({ top: screen.height, behavior: "smooth" });
  return false;
});

const scrollTop = document.querySelector(".scrollTop");

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
