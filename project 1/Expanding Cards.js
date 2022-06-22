let testImage = document.querySelectorAll(".flex-items");
console.log(testImage);
let posh = testImage.forEach((x) => x.addEventListener("click", expand));

function expand() {
  testImage.forEach((x) => x.classList.remove("slick"));
  console.log(this);
  this.classList.toggle("slick");
}
