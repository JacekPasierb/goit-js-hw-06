const input = document.querySelector("#validation-input");

input.addEventListener("input", textInput);

function textInput (event) {
    input.textContent = event.currentTarget.value;  
}

input.addEventListener("change", validInput);

function validInput () {
  if (input.textContent.length === Number(input.dataset.length)) {
      input.classList.remove("invalid");
      return input.classList.add("valid");
    }
    input.classList.remove("valid");
    return input.classList.add("invalid");
}

