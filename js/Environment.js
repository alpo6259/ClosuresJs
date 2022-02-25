// Измените пример с занятия по замыканию (counter) так, чтобы при каждом вызове значение счетчика менялось не на 1, а на переданное пользователем число (передать его при вызове внешней функции customCounter).

// Пример использования:
// const myCounter = customCounter1(5);
// const result1 = myCounter();  // => 5
// const result2 = myCounter();  // => 10
// const result3 = myCounter();  // => 15

// Или:

// * Измените пример с занятия по замыканию (counter) так, чтобы пользователь задавал
// начальное значение счетчика (в примере с занятия это 0)
// и
// шаг изменения счетчика (в примере с занятия это 1).

// Пример использования:
// const myCounter = customCounter2(1, 5);
// const result1 = myCounter();  // => 6
// const result2 = myCounter();  // => 11
// const result3 = myCounter();  // => 16

function getCounter(k, a) {
  let i = 0 + k;
  return function () {
    return (i += a);
  };
}

let count = getCounter(Number(prompt("k")), Number(prompt("a")));

console.log(count());
console.log(count());
console.log(count());
