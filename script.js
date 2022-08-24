var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll(".deleteButton");
var deleteButtonsArray = [];

function inputLength() {
	return input.value.length;
}

// Create New List Items With Delete Buttons
function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("deleteButton")
	deleteButton.textContent = "Delete"
	deleteButtonsArray.push[deleteButton];
	ul.appendChild(div);
	div.append(li, deleteButton);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
}

// Add List Item After Mouse Clicking the Button that Says Enter
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Add List Item After Clicking the Enter Button on Keyboard
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Cross off Done Items
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", toggleDone);
}

function toggleDone() {
  this.classList.toggle("done");
}

// Delete Item With Delete Button
function deleteItem(e) {
	if (e.target.classList.contains('deleteButton')) {
	  e.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteItem);












