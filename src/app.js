/* eslint-disable */
import "bootstrap";
import "./style.css";

// This function with this property trigger these arrays and variables
window.onload = function() {
  // Four differents arrays: subject, verb, noum and when.
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //  Four variables, one for each array, it use a Random formula to give the items array
  let uno = Math.floor(Math.random() * who.length);
  let dos = Math.floor(Math.random() * action.length);
  let tres = Math.floor(Math.random() * what.length);
  let cuatro = Math.floor(Math.random() * when.length);

  // When this selector (query) find this id String. It print this inner html
  document.querySelector("#excuse").innerHTML =
    who[uno] + " " + action[dos] + " " + what[tres] + " " + when[cuatro];
};
