const input = document.querySelector("#validation-input");

input.addEventListener("input", a);


function a (event) {
    input.textContent = event.currentTarget.value;
   
}

