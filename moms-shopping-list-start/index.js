/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */

//   Here are some const variables that we have defined  that will never change in value.
const unorderedList = document.getElementById("list");
const addingItems = document.getElementById("addItems");

//     Here is the function for adding items. In the click event will be also adding in the functions for the delete and the editing for the items within this one event. 
//     Thanks to all the help I received with this part. 
addingItems.addEventListener("click", function (e) {
    
    let li = document.createElement("li");

    let d = document.createElement("div");
    d.textContent = document.getElementById("title").value;
    

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "edit";

    //Below here is the styling portion of the button element 
    btnEdit.style.marginRight = "5px";

    let btnX = document.createElement("button");
    btnX.textContent = "X";

    li.append(d, btnEdit, btnX);

    unorderedList.appendChild(li);

    btnEdit.addEventListener("click", function (e) {
        let userInput = prompt("Please enter the new item and press OK!");
    
        d.innerHTML = userInput;
        console.log(e);
    })

    btnX.addEventListener("click", function (e) {
        li.remove();
    })

    document.getElementById("title").value = "";

    e.preventDefault();
})

