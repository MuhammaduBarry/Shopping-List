// this is all of our id's and classes that we are going to target today
const input = document.querySelector("#enterinput");
const button = document.querySelector("#enterbutton");
const ol = document.querySelector(".list-parent");


// we created a function so that when adding a list we don't accidentally 
// click something then it adds a empty list tag
function inputValue() {
    return input.value.length;
}
//We need to create a list function that create a new list
function createList() {
    if (inputValue() > 0) {
        const li = document.createElement("li");
        li.classList.add("li-style")
        li.appendChild(document.createTextNode(input.value));
        ol.appendChild(li);
        // now we create a button to add to our li element
        removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.appendChild(document.createTextNode("x"))
        li.appendChild(removeButton);
        // now we need to make this button be able to delete the list item
        // this is call event delegation
        // we remove the stress off of the child node and give it to the parent node
        // to control it all in one element, i think ;).
        ol.addEventListener("click", function (e) {
            if (e.target.classList.contains("remove-button")) {
                e.target.parentNode.remove();
            }
        });
    }
    input.value = "";
}
// now we make a function for both the button and input

function createListAfterButton() {
    if (inputValue() > 0) {
        createList();
    }
}

function createListAfterInput(event) {
    if (inputValue() > 0 && event.keyCode === 13) {
        createList();
    }
}
// this is were our event listeners is going to stay for now
button.addEventListener("click", createListAfterButton);

input.addEventListener("keypress", createListAfterInput);




