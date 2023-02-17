const addBtn = document.querySelector(`button[data-action="increment"]`);
const remBtn = document.querySelector(`button[data-action="decrement"]`);
const value = document.querySelector("#value");
let counterValue = 0;

addBtn.addEventListener("click", plus);
remBtn.addEventListener("click", minus);
function plus() {
    counterValue += 1;
    value.textContent = counterValue;
}

function minus() {
  counterValue -= 1;
  value.textContent = counterValue;
}



