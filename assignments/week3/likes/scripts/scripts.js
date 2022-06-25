// var peppercount = 3
// var countElement3 = document.querySelector("#pepperCount")

// function add3(element) {
//     peppercount ++;
//     countElement3.innerText = peppercount + " Petting(s)";
//     // console.log(brucecount);
// }
// var brucecount = 5
// var countElement2 = document.querySelector("#bruceCount")

// function add2() {
//     brucecount ++;
//     countElement2.innerText = brucecount + " Petting(s)";
//     // console.log(brucecount);
// }



// function add1() {
    // var oscarcount = 8
//     var countElement = document.querySelector("#oscarCount")
//     oscarcount ++;
//     countElement.innerText = oscarcount + " Petting(s)";
//     // console.log(oscarcount);
// }

function addOne(element) { // giving it a name and saying that when the button is clicked do the following
    console.log(element.previousElementSibling.innerHTML) 
    var spanEle = element.previousElementSibling; // so the element or button clicked has a element after it that we are going to call spanEle
    var old = parseInt(spanEle.innerHTML) // take the old value in the span and parse it to and integer
    spanEle.innerHTML = old + 1; //then add one to it
}
