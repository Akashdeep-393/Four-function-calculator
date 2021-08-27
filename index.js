/**
 * Name: Akashdeep Bhattacherjee
 * Date: July 14, 2021
 * Section: CSE 154 AD
 *
 * This is the JS to implement the UI for my calculator. It receives the user input,
 * performs the calculation and updates the log of answers.
 */
"use strict";
(function() {

  window.addEventListener("load", init);
  let operand1 = "0";
  let operation = "+";
  let operand2 = "0";
  let result = 0;
  let answers;
  const RESPONSESIZE = 5;

  /**
   * Initializes the event listeners for all the buttons
   */
  function init() {
    let digits = document.querySelectorAll(".number");
    for (let i = 0; i < digits.length; i++) {
      digits[i].addEventListener("click", addEntry);
    }
    let operations = document.querySelectorAll(".operation");
    for (let i = 0; i < operations.length; i++) {
      operations[i].addEventListener("click", readOperand);
    }
    document.getElementById("equals").addEventListener("click", performCalculation);
  }

  /**
   * Updates the textarea with the user's numberic input
   */
  function addEntry() {
    let number = this.textContent;
    let text = document.getElementById("entry");
    text.textContent = text.textContent + number;
  }

  /**
   * Reads the first operand and the operation and clears the textarea for the
   * second operand to be entered
   */
  function readOperand() {
    operation = this.textContent;
    operand1 = document.getElementById("entry").textContent;
    let text = document.createElement("textarea");
    text.id = "entry";
    text.textContent = "";
    document.getElementById("calculator").replaceChild(text, document.querySelector("#entry"));
  }

  /**
   * Reads the second operand, performs the calculation and updates the webpage to display the
   * answer. Updates the webpage to keep track of the last 5 answers generated.
   */
  function performCalculation() {
    operand2 = document.getElementById("entry").textContent;
    if (operand2 === "") {
      operand2 = 0;
    }
    if (operand1 === "") {
      operand1 = 0;
    }
    if (operation === "+") {
      result = parseInt(operand1) + parseInt(operand2);
    } else if (operation === "-") {
      result = parseInt(operand1) - parseInt(operand2);
    } else if (operation === "*") {
      result = parseInt(operand1) * parseInt(operand2);
    } else {
      result = parseInt(operand1) / parseInt(operand2);
    }
    document.getElementById("entry").textContent = "";
    operand1 = 0;
    operand2 = 0;
    document.getElementById("recent").textContent = "Result is: " + result;
    let article = document.createElement("article");
    article.classList.add("result");
    article.textContent = result;
    answers = document.getElementById("answers");
    answers.appendChild(article);
    updatelog();
  }

  /**
   * Ensures the answer log only displays the last five results
   */
  function updatelog() {
    answers = document.querySelectorAll(".result");
    if (answers.length > RESPONSESIZE) {
      answers[0].parentNode.removeChild(answers[0]);
    }
  }

function greeting(message) {
    setTimeout(message, 1000);
 }
 async function sayHello(){
    await console.log("Hello there!");
 }
 function sayGoodbye() {
    console.log("Goodbye for now");
}
greeting(sayHello);
greeting(sayGoodbye);

})();