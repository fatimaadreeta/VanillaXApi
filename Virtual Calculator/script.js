const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.number;
    screen.value += value;
  })
});

equal.addEventListener("click", () => {
  if(screen.value === ""){
    screen.value = "";
  }
  else{
    try {
      let calculation = eval(screen.value);
      screen.value = calculation;
    }
    catch{
      screen.value = "Error";
    }
  }
});

clear.addEventListener("click", () => {
  screen.value = "";
});

//equal.addEventListener("click", () => {
//if(screen.value === ""){
  //screen.value = "";
//let calculation = eval()
