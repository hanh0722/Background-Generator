var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var Show = document.querySelector("h3");
var body = document.querySelector("body");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var show = document.querySelector("h4");
// gradient with input1
function gradientColor(){
	body.style.background = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
	Show.textContent = body.style.background;
}
color1.addEventListener("input", gradientColor);
// gradient with input2
color2.addEventListener("input", gradientColor);

show.textContent = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
color3.style.background = "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";

var _ = require('lodash');
var array = [1,2,3,4,5];
console.log(_.without(array, 3));