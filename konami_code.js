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

let index = 0;

function init() {
  // your code here

  const listener = document.body.addEventListener('keydown', keyHandler)
  // alert('test')

}

 const keyHandler = (e) => {
  const key = e.key
  console.log(key)

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Konami Code Entered");
      console.log(this);
      index = 0;

    }
  } else {
    index = 0
  }
}


init();
