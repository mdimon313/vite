const bar = document.getElementById("bars");
const navContainer = document.getElementById("navContainer");
const close = document.getElementById("close");

// show
function show() {
  navContainer.classList.add("block");
}
// close
function hide() {
  navContainer.classList.remove("block");
}

bar.addEventListener("click", () => {
  show();
});
navContainer.addEventListener("click", () => {
  hide();
});
close.addEventListener("click", () => {
  hide();
});
