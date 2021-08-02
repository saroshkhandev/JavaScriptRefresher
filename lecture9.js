// Async functions

// the callback function will be excecuted when the inner function is completed that is the timer function
// this callback function is called inside the inner function.
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

// we call our fetchData function inside this timeout function then out callback function is called with
// those values
setTimeout(() => {
  console.log("Time is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => console.log(text2));
}, 2000);

console.log("Hello");
console.log("Hi");
