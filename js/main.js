/* function test() {
  console.log('hi');
}

test();

/* Change Content on other pages */

/*
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

/* MOVING MOUSE JS */

//This is a pen based off of Codewoofy's eyes follow mouse. It is just cleaned up, face removed, and then made to be a little more cartoony. https://codepen.io/Codewoofy/pen/VeBJEP
$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  //console.log('eye', eye)
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

/* Overlay Animation */
const expand = document.getElementsByClassName('expand')[0]
const overlay = document.getElementsByClassName('overlay')[0]

expand.addEventListener('click', () => {
  overlay.classList.toggle('active')
})

/* FUNCTIONS */

function changeType() {

  var element = document.getElementById("sentence-1");
  element.classList.add("typealien");

}

function enterSection() {

  var start = document.getElementById("start");
  start.style.display = "none";
  console.log(start);
}

function userA() {
  userA = document.getElementById('parameterUserB');
  userA.classList.add('hidden');
}

function userB() {
  userB = document.getElementById('parameterUserA');
  userB.classList.add('hidden');
}

// VALUE STUFF

/* Getting Values from Data */
/* This is mostly for testing */

/*
function getResults() {

/* SPECIES 

var e = document.getElementById("species");
var value = e.value;
var text = e.options[e.selectedIndex].text;
console.log(text + " first input");

if (e.value == "alien") {

  var element = document.getElementById("sentence-1");
  element.classList.add("typealien");

} else if (value == "human") {

  var element = document.getElementById("sentence-1");
  element.classList.add("typehuman");

}

*/

/*

// COLOR 

var c = document.getElementById("colorBg");
var cvalue = c.value;
console.log("color bg main js" + " " + cvalue);

document.body.style.backgroundColor = cvalue;

// RANGE HEIGHT 
var r = document.getElementById("rangeHeight");
var rvalue = r.value / 10;
console.log("range height main.js" + " " + rvalue);

document.getElementById('textarea').style.lineHeight = rvalue + "rem";


// RANGE SIZE
var rs = document.getElementById("rangeSize");
var rsvalue = rs.value / 10;
console.log("from main" + " " + rsvalue);

document.getElementById('textarea').style.fontSize = rsvalue + "rem";


// COLOR TEXT 
var ct = document.getElementById("colorText");
var ctvalue = ct.value;
console.log("color text main js" + " " + ctvalue);

document.body.style.color = ctvalue;
}

*/


