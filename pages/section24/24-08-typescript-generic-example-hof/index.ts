//* 1. HOF - Normal Function
function hofNormalFunction<T>(arg1: T): <U>(arg2: U) => [T, U] {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = hofNormalFunction("Hello")(1); // ["Hello", 1]
console.log(result);

//* 2. HOF - Arrow Function
const hofArrowFunction =
  <T>(arg1: T): (<U>(arg2: U) => [T, U]) =>
  <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const resultArrow = hofArrowFunction("World")(2); // ["World", 2]
console.log(resultArrow);

//* 3. HOF - loginCheck
const loginCheck = <C>(component: C): (<P>(props: P) => [C, P]) => {
  return function <P>(props: P): [C, P] {
    return [component, props];
  };
};
