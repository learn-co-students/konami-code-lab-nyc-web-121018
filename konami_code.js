const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let counter = 0

  let body = document.querySelector("body")
  body.addEventListener('keydown', e => {

    if (e.key === codes[counter]) {
      counter++

      if (counter === codes.length) {
        alert("Congrats! You got the code right!")
      }
    } else {
      counter = 0
    }
  })
}
