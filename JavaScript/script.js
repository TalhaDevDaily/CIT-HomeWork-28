const counterInput1 = document.querySelector(".input-field1");
const counterBtn1 = document.querySelector(".counter-btn1");
const counterHeader1 = document.querySelector(".counter-header1");
/*
let i = 0;

const countFunction = function (counterInput) {
  i++;
  if (i === counterInput) {
    clearInterval(counterDuration);
  }
  // counterHeader1.innerHTML = i;
  // console.log(i);
  let increasingNumber = i;
  return increasingNumber;
};

const counterDuration = setInterval(countFunction, 1000);

counterBtn1.addEventListener("click", function () {
  const num1 = Number(counterInput1.value);

  // countFunction(num1);
  let paraMeter = countFunction(num1);
  counterHeader1.innerHTML = paraMeter;

  console.log(paraMeter);
});
*/

// HomeWork
// Button 1
let i = 0;

counterBtn1.addEventListener("click", function () {
  const countFunction = function () {
    i++;
    if (i == counterInput1.value) {
      clearInterval(counterDuration);
    }
    counterHeader1.innerHTML = i;
    console.log(i);
  };
  const counterDuration = setInterval(countFunction, 100);
});

// Button 2
const counterInput2 = document.querySelector(".input-field2");
const counterBtn2 = document.querySelector(".counter-btn2");
const counterHeader2 = document.querySelector(".counter-header2");

let a = 0;

counterBtn2.addEventListener("click", function () {
  const countFunction = function () {
    a++;
    if (a == counterInput2.value) {
      clearInterval(counterDuration);
    }
    counterHeader2.innerHTML = a;
    console.log(a);
  };
  const counterDuration = setInterval(countFunction, 100);
});

// Button 3
const counterInput3 = document.querySelector(".input-field3");
const counterBtn3 = document.querySelector(".counter-btn3");
const counterHeader3 = document.querySelector(".counter-header3");

let b = 0;

counterBtn3.addEventListener("click", function () {
  const countFunction = function () {
    b++;
    if (b == counterInput3.value) {
      clearInterval(counterDuration);
    }
    counterHeader3.innerHTML = b;
    console.log(a);
  };
  const counterDuration = setInterval(countFunction, 100);
});

// Button 4
const counterInput4 = document.querySelector(".input-field4");
const counterBtn4 = document.querySelector(".counter-btn4");
const counterHeader4 = document.querySelector(".counter-header4");

let x = 0;

counterBtn4.addEventListener("click", function () {
  const countFunction = function () {
    x++;
    if (x == counterInput4.value) {
      clearInterval(counterDuration);
    }
    counterHeader4.innerHTML = x;
    console.log(x);
  };
  const counterDuration = setInterval(countFunction, 100);
});

/////////////////////////////////////////CLASSWORK STUFF
// const count = function () {
//   i++;
//   counterHeader.innerHTML = i;
//   console.log(i);
// };

// setInterval(count, 1000);
// let i = 0;

// console.log(counterHeader.dataset.header);
// const headerData = Number(counterHeader.dataset.header);

// const counterFun = function () {
//   i++;

//   if (i === headerData) {
//     clearInterval(intervalCount);
//   }
//   counterHeader.innerHTML = i;
// };

// const intervalCount = setInterval(() => {
//   counterFun();
// }, 100);

// When there is only one function you directly call the function
// setInterval(counterFun, 1000)
