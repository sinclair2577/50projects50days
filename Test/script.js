const promise1 = new Promise((resolve, reject) => {
  console.log("1");
  resolve("3");
  console.log("2");
});

const promise2 = promise1.then((res) => {
  console.log(res);
});

console.log(promise1);
console.log(promise2);
