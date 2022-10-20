// Holding The Elements From The Html file
const form1 = document.querySelector(".container1");
const form2 = document.querySelector(".container2");
const next1 = document.querySelector(".next1");
const prev1 = document.querySelector(".prev1");
const next2 = document.querySelector(".next2");

//  Function of the MultiStepForm

// On clicking on the first Next button
next1.addEventListener("click", (e) => {
  // Hide the first Form
  form1.style.left = "-60%";
  // Show the second Form
  form2.style.right = "0%";
});
// On clicking on the First prev button
prev1.addEventListener("click", (e) => {
  // Hide the second Form
  form2.style.right = "80%";
  // show the first Form
  form1.style.right = "21.5%";
});
