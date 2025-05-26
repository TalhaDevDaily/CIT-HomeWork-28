const counterHeader = document.querySelectorAll(".counter-header");

let i = 0;

const headerArray = Array.from(counterHeader);
console.log(headerArray);

counterHeader.forEach(function (items) {
  console.log(items);
});
