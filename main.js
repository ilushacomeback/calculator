const numberOne = document.querySelector(".number-one");
const numberTwo = document.querySelector(".number-two");
const buttons = document.querySelector(".buttons");
// const btnPlus = document.querySelector('.plus')
// const btnMinus = document.querySelector('.minus')
// const btnYmn = document.querySelector('.ymn')
// const btnDel = document.querySelector('.del')
// const result = document.querySelector('.result')
let resultInput = document.querySelector(".result-input");
// let action = ''

function res() {
  if (event.target.className === "plus" && numberTwo.value !== "") {
    resultInput.value = Number(numberOne.value) + Number(numberTwo.value);
    alert("ангелина лох");
  } else if (event.target.className === "minus" && numberTwo.value !== "") {
    resultInput.value = Number(numberOne.value) - Number(numberTwo.value);
  } else if (event.target.className === "ymn" && numberTwo.value !== "") {
    resultInput.value = Number(numberOne.value) * Number(numberTwo.value);
  } else if (event.target.className === "del" && numberTwo.value !== "") {
    resultInput.value = Number(numberOne.value) / Number(numberTwo.value);
  } else return;

  numberOne.value = "";
  numberTwo.value = "";
}

buttons.addEventListener("click", res);

// btnPlus.onclick = () => {
//     action = '+'
// }

// btnMinus.onclick = () => {
//     action = '-'
// }

// btnYmn.onclick = () => {
//     action = '*'
// }

// btnDel.onclick = () => {
//     action = '÷'
// }

// function res () {
//     if (action == '+') {
//         resultTwo.value = Number(numberOne.value) + Number(numberTwo.value)
//     } else if (action == '-') {
//         resultTwo.value = Number(numberOne.value) - Number(numberTwo.value)
//     } else if (action == '*') {
//         resultTwo.value = Number(numberOne.value) * Number(numberTwo.value)
//     } else {
//         resultTwo.value = Number(numberOne.value) / Number(numberTwo.value)
//     }
//     numberOne.value = ''
//     numberTwo.value = ''
// }

// result.addEventListener('click', res)
