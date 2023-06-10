/*  In the following code we are removing particular items from the shopping list by the click of the X button per line. This is being done by declaring the items li statement and the button itself. 

Coding in here that once the user is to click the X button on that item section, it will remove the whole list item on that unordered list. */

var coffee = document.getElementById("coffeePods");
var coffeeButton = document.getElementById("coffeeDelete");

coffeeButton.addEventListener("click", F => coffee.remove())

var myCereal = document.getElementById("cereal"); 
var cerealButton = document.getElementById("btnDelCereal");

cerealButton.addEventListener("click", F => myCereal.remove())

var mySyrup = document.getElementById("syrup");
var syrupButton = document.getElementById("btnDelSyrup");

syrupButton.addEventListener("click", F => mySyrup.remove())

var myTacquitos = document.getElementById("taquitos");
var taquButton = document.getElementById("btnDelTaq");

taquButton.addEventListener("click", F => myTacquitos.remove())

var myBrats = document.getElementById("brats");
var bratsButton = document.getElementById("btnDelBrats");

bratsButton.addEventListener("click", F => myBrats.remove())

var myPRolls = document.getElementById("pizzaRolls");
var pRollsDelButton = document.getElementById("btnDelPRolls");

pRollsDelButton.addEventListener("click", F => myPRolls.remove())