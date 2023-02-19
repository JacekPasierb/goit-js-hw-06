function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector(`button[data-create]`);
const buttonDestroy = document.querySelector(`button[data-destroy]`);
const box = document.querySelector("#boxes");



//------------------FIRST OPTION
const input = document.querySelector("input");
let Num = 0;

input.addEventListener("input", getNum);

function getNum(event) {
  Num = event.currentTarget.value;
  console.log(Num);
}


buttonCreate.addEventListener("click", createBoxes);

function createBoxes() {
  for (let i = 1; i <= Num; i += 1){

    let div = document.createElement("div");
    div.style.width = 20 + (i * 10) + "px";
    div.style.height = 20 + (i * 10) + "px";
    div.style.backgroundColor = getRandomHexColor();
    div.style.border = "solid 1px black";
    
      box.append(div);
  }

}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const numEl = document.querySelectorAll("#boxes div");
  
  for (let i = 1; i <= numEl.length; i++) {
    const t = box.firstChild;
    t.remove();
  }
}