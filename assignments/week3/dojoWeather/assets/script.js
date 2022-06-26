

function loading() {
    alert("Loading weather... please wait.")
}

// remove specific class, don't need to read class
function accept() {
    var element = document.querySelector(".cookie-policy");
    element.remove();
}


function convert(element) {
    // passes in F or C
    console.log(element.value);
    // logs F or C value
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
            // id's are labeled temp1, temp2 ect. Start of function grabs all of the id's of the temp areas.
        var tempVal = parseInt(tempSpan.innerText);
        // The parseInt method parses a value as a string and returns the first integer.
        // grabs the text of the tempSpan which is the temp info
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
            // The innerText property sets or returns the text content of an element.
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}
// these do the conversion
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}