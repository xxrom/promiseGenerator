function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();

const one = generator.next();
const two = generator.next();
const three = generator.next();

console.log(one); // {value: 1, done: false}
console.log(two); // {value: 1, done: false}
console.log(three); // {value: 1, done: false}

function* count(x = 0) {
  let item = x;

  while (item < 10) {
    yield item++;
  }

  return item;
}

const myNewCount = count();

console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
console.log(myNewCount.next());
