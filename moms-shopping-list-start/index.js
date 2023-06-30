/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */


const unorderedList = document.getElementById("list");

const addingItems = document.getElementById("addItems");


addingItems.addEventListener("click", function (e) {

    let newListItem = document.createElement("li");

    let myDivText = document.createElement("div");
    myDivText.innerHTML = document.getElementById("title").value;

    let editButton = document.createElement("button");
    editButton.textContent = "edit";

    //Below here is the styling portion of the button element 
    editButton.style.width = "43px";
    editButton.style.height = "17";
    editButton.style.marginLeft = "5em";

    console.log(e);     // logging the result

    editButton.addEventListener("click", function(e) {
        // Here we are just assigning the value of the prompt box that the user edits the value of to equal the new item name or value
        let userInput = prompt("Please edit your entry.");

        myDivText.innerHTML = userInput;

        console.log(e);     // logging the result
    })

    let delButton = document.createElement("button");
    delButton.textContent = "X"

    //  Here in the following is the styling of the newly created button
    delButton.style.width = "30px";
    delButton.style.height = "17px";

    delButton.addEventListener("click", function(e) {
        newListItem.remove();

        
        console.log(e);   // logging the result 
    })

    //  Here in the following is the area of appending the elements to the DOM in the HTML page. All that is happening is that we are adding the main element the LI or list item, then the appendChild ones are where we are appending to the list item. 
    unorderedList.append(newListItem);
    unorderedList.appendChild(myDivText);
    unorderedList.appendChild(editButton);
    unorderedList.appendChild(delButton);

    e.preventDefault();
})


/*    In the following section is the area of the deleting items. This will contain nothing more then the actions of the deleting functions. */

/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */

let buttonDelete = document.querySelector(".btnDelete");

let iList = document.querySelector("li");

buttonDelete.addEventListener("click", function() {
   iList.remove();
})


//    The following code is just a simple message box with a single parameter that is displaying a message box with a simple success statement with the included parameter to it

function successMessage(message) {
    window.alert("You have successfully removed " + message);
}