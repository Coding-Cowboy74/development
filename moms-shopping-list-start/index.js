/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */


const unorderedList = document.getElementById("list");

const addingItems = document.getElementById("addItems");


addingItems.addEventListener("click", function (e) {
    let newListItem = document.createElement("li");
    let addedItem = document.getElementById("title").value;

    let newDivText = document.createElement("div");
    newDivText.innerHTML = document.getElementById("title").value;

    let editButton = document.createElement("button");
    let delButton = document.createElement("button");

    editButton.textContent = "edit";
    delButton.textContent = "X";


    unorderedList.append(newListItem, newDivText, editButton, delButton);

    e.preventDefault();
})


/*    In the following section is the area of the deleting items. This will contain nothing more then the actions of the deleting functions. */

/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */

let buttonDelete = document.querySelectorAll(".btnDelete");

let iList = document.querySelector("li");

buttonDelete.addEventListener("click", function() {
    for (i = 0; i < buttonDelete.length; i++) {
        buttonDelete(i).remove();
    }
})




var myPRolls = document.getElementById("pizzaRolls");
var pRollsDelButton = document.getElementById("btnDelPRolls");

pRollsDelButton.addEventListener("click", function () {
    myBrats.remove();
    successMessage("pizza rolls");
})


     let podsEdit = document.getElementById("editPods");

podsEdit.addEventListener("click", function () {

    
    let userInput = prompt("Please edit your entry!");

    if (userInput === null || userInput === "") {
        window.alert("You must enter the item name first!  Thanks!")
        
    }
    else {
        document.getElementById("liCoffee").innerHTML = userInput
    }
})



//    The following code is just a simple message box with a single parameter that is displaying a message box with a simple success statement with the included parameter to it

function successMessage(message) {
    window.alert("You have successfully removed " + message);
}