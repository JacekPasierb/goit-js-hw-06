function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

button.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor(); 

}