const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");




input.addEventListener("input", resizeText);

function resizeText() { 
    text.style.fontSize = input.value + "px";
}
