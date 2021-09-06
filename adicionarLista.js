let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("items");
let itemButtons = document.getElementsByClassName("remove");

function criarElemento() {

  if (input.value !== "") {

    let li = document.createElement("li");
    let text = document.createTextNode(input.value);
    let xButton = document.createElement("button");
      xButton.innerHTML = "X";
      xButton.className = "remove";

    li.appendChild(xButton);
    li.appendChild(text);
    ul.appendChild(li);

    input.value = "";
    buttonEvents();
 
  } else {
        window.alert("vc não adicionou um item na lista"); 
    }
}
  
function deleteItem() {
  this.parentElement.remove();
}

function buttonEvents() {
  for (let i = 0; i < itemButtons.length; i++) {
    itemButtons[i].addEventListener("click", deleteItem);
  }
}

button.addEventListener("click",  criarElemento);
buttonEvents();
