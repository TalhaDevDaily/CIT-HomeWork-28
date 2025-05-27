const counterHeader = document.querySelectorAll(".counter-header");
const counterInput = document.querySelectorAll("input");
const counterBtn = document.querySelectorAll("button");

// Make an Array out of Nodelist
const headerArray = Array.from(counterHeader);

headerArray.map((headerItems) => {
  let i = 0;

  const headerData = Number(headerItems.dataset.header);
  const counterFun = function () {
    i++;

    if (i === headerData) {
      clearInterval(counterInterval);
    }
    headerItems.innerHTML = i;
  };

  const counterInterval = setInterval(counterFun, 100);
});

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
