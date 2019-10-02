// Your code here
let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if(e.key === "ArrowRight")  {

  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left= `${left + 1}px`;
  }
}

// or
// function moveDodgerRight() {
//   let rightNumbers = dodger.style.left.replace("px", "");
//   let right = parseInt(rightNumbers, 10)
//   ///console.log(right)
//   if(right <= 179) {
//       dodger.style.left = `${right + 1}px`;
//   }
// }
