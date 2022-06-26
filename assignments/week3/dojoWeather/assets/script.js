

function loading() {
    alert("Loading weather... please wait.")
}

// remove specific class, don't need to read class
function accept() {
    var element = document.querySelector(".cookie-policy");
    element.remove();
}

// id's are labeled temp1, temp2 ect. Start of function grabs all of the id's of the temp areas.
// 

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
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