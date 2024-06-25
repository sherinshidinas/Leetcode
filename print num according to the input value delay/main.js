//Write a JavaScript function that takes an array of integers as input and prints each integer after a delay corresponding to its value in seconds. For example, if the input array is [2, 4, 5, 6, 3], the function should print 2, 4, 5, 6, and 3 sequentially, each after a delay of 2, 4, 5, 6, and 3 seconds respectively.

const inp = [2, 4, 5, 7, 3];
const printNumber = (inp) => {
  let timeRequired = 0;
  for (let i = 0; i < inp.length; i++) {
    timeRequired += inp[i] * 1000;
    setTimeout(() => {
      console.log(inp[i]);
    }, timeRequired);
  }
};

printNumber(inp);
