let image = Array.from(document.querySelectorAll(".slider img"));
let currentSlide = 1;
let slidesCount = image.length;
let bubblesEle = document.querySelector(".bubbles")

let ulBubble = document.createElement("ul")

for (let i = 0; i < image.length; i++) {
    let lisBubble = document.createElement("li")
    ulBubble.appendChild(lisBubble)
}

bubblesEle.appendChild(ulBubble)

let actBub = document.querySelectorAll(".bubbles ul li")

checker();

setInterval(() => {
  checker();
  currentSlide++;
  if (currentSlide == (image.length + 1)) {
    currentSlide = 1;
  }
}, 5000);

function checker() {
  removeAllClass();
  image[currentSlide - 1].classList.add("activ");
  actBub[currentSlide - 1].classList.add("activ")
}

function removeAllClass() {
  image.forEach(function (img) {
    img.classList.remove("activ");
  });
  actBub.forEach(function(li){
  li.classList.remove("activ")
  })
}
