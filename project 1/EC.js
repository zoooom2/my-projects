let testImage = document.querySelectorAll(".flex-items");
let posh = testImage.forEach((x) => x.addEventListener("click", expand));

function expand() {
  testImage.forEach((x) => x.classList.remove("slick"));
  this.classList.add("slick");

}

let check = () => {testImage.forEach((x) => console.log(x))}


