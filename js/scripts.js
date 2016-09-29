"use strict"

// Member variables for elements
var _reel1 = document.getElementById("reel1");
var _reel2 = document.getElementById("reel2");
var _reel3 = document.getElementById("reel3");
var _spinBtn = document.getElementById('spinBtn');

// Spin the wheel. This is the main driver function.
function spin() {

    //get speed of the spin
    let speed = getSpeed();

    //disable the spin button!
    enableSpinButton(false);

    let reel1Degrees = getRandomIntInclusive(6, speed) * 120;
    let reel2Degrees = getRandomIntInclusive(6, speed) * 120;
    let reel3Degrees = getRandomIntInclusive(6, speed) * 120;
  
    setTransitionDuration(3);

    _reel1.style.webkitTransform = "rotateX(-" + reel1Degrees + "deg)";
    _reel2.style.webkitTransform = "rotateX(-" + reel2Degrees + "deg)";
    _reel3.style.webkitTransform = "rotateX(-" + reel3Degrees + "deg)";

    //wait until it's done spinning to detect win
    setTimeout(function(){ 
        detectWin(reel1Degrees, reel2Degrees, reel3Degrees);
    }, 3000);
}

// See what speed is set on the slider
// The number = # of faces moved. 3 = 1 full rotation.
function getSpeed() {

    let checked = (document.getElementById('speed').checked) ?  9 :  21;
    return checked;
}

// Enable the spin button (functionally and aesthetically) depending on bool
function enableSpinButton(bool) {

    if(bool) { //enable it
        _spinBtn.disabled = false;
        _spinBtn.style.opacity = 1;
    }
    else { //disable it
        _spinBtn.disabled = true;
        _spinBtn.style.opacity = .4;
    }
}

// We need to set the reels back to 0, 120, and 240 degrees for each face.
// We set the transition duration to 0s so the user cannot tell that it happened.
function resetBetweenSpins(r1d, r2d, r3d) {
    
    setTransitionDuration(0);

    _reel1.style.webkitTransform = "rotateX(-" + r1d % 360 + "deg)";
    _reel2.style.webkitTransform = "rotateX(-" + r2d % 360 + "deg)";
    _reel3.style.webkitTransform = "rotateX(-" + r3d % 360 + "deg)";

    
    //enable the spin button!
    enableSpinButton(true);
}

// Returns a random integer between min (included) and max (included)
// as per MDN's Math.random() spec
function getRandomIntInclusive(min, max) {
  
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Flexible function to set the transition duration for all reels to 
// the provided input. Supports all major browsers.
function setTransitionDuration(sec) {

    _reel1.style.webkitTransitionDuration = sec + "s";
    _reel1.style.transitionDuration = sec + "s";
    _reel2.style.webkitTransitionDuration = sec + "s";
    _reel2.style.transitionDuration = sec + "s";
    _reel3.style.webkitTransitionDuration = sec + "s";
    _reel3.style.transitionDuration = sec + "s";

}

// Check and see if a win occurred using the trusted modulus operator.
function detectWin(r1d, r2d, r3d){

    if (r1d % 360 === r2d % 360 && r2d % 360 === r3d % 360)
        showToastMessage(r1d % 360);

    resetBetweenSpins(r1d, r2d, r3d); 
}

// Pop up our toast message displaying the free item
function showToastMessage(r1d) {

    updateFreeCup(r1d);

    // Get the snackbar DIV
    var toast = document.getElementById("toast")

    // Add the "show" class to DIV
    toast.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// One of the specs for the project is to tell the user
// what they won. This does that by looking at the degree value
function updateFreeCup(degrees) {

    //figure out what face is showing

    console.log(degrees);

    var freeCup = document.getElementById("freeCup");

    if(degrees === 0)
        freeCup.innerHTML= "COFFEE!";
    else if (degrees === 120)
        freeCup.innerHTML = "TEA!";
    else
        freeCup.innerHTML = "ESPRESSO!";
}

