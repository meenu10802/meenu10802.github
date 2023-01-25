<button id="arrow-button">➜</button>
const arrowButton = document.getElementById("arrow-button");
const nextPage = document.getElementById("expertise.html");

arrowButton.addEventListener("click", function() {
  window.scroll({
    top: nextPage.offsetTop,
    behavior: "smooth"
  });
});