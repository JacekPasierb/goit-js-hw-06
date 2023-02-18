const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");




input.addEventListener("input", resizeText);

function resizeText() {
    const b = input.value;
    text.style.fontSize = b + "px";
}