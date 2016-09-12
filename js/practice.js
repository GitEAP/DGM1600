//this is a boolean var
var levelLocked = true;
var attempts = 3;
//declares a function
function passwordPrompt() {
    //this is a string var
    var myPassword = prompt("Enter password");
    //this tests if myPassword is a certain string
    //also tests for the number of login attempts
    if (myPassword == "ou812") {
        //if true this changes the bool to false
        levelLocked = false;
    }
    else {
            attempts--;
        if (attempts > 0) {
            //recall of the function if false
            passwordPrompt();
        }
    }
}
//calls the function
passwordPrompt();
//this will test if levelLocked is true or false.
if (levelLocked) {
    alert("This level is locked.");
}
else {
    alert("The level is unlocked");
}