console.log("page loaded...");



// function over(element) {
//     // element.style.backgroundColor = "lime";
//     var x = document.getElementById("exampleVideo");
//     document.getElementById("exampleVideo").play;
// }
// function out(element) {
//     // element.style.backgroundColor = "silver";
//     var x = document.getElementById("exampleVideo");
//     document.getElementById("exampleVideo").pause;
// }
function over(element) {
    element.play();
}
function out(element) {
    element.pause();
}