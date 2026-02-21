//* 1. primitive types
const isDone: boolean = false;
const age: number = 30;
const firstName: string = "John";

const getPrimitive = (
  arg1: boolean,
  arg2: number,
  arg3: string
): [string, number, boolean] => {
  console.log(arg1, arg2, arg3);
  return [arg3, arg2, arg1];
};
getPrimitive(isDone, age, firstName);

//* 2. any type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

const getAny = (arg: any): any => {
  arg += 1;
  console.log(arg);
  return arg;
};
getAny("This is any type");
getAny(123);
getAny(true);

//* 3. unknown type
let value: unknown = 30;
value = "a string instead";
value = false; // okay, definitely a boolean

const getUnknown = (arg: unknown): unknown => {
  if (typeof arg === "number") {
    arg += 1;
  }
  console.log(arg);
  return arg;
};

//* 4. generic type
const getGeneric = <MyType>(arg: MyType): MyType => {
  console.log(arg);
  return arg;
};
const stringMyType = getGeneric<string>("This is a generic type");
const numberMyType = getGeneric<number>(123);
const booleanMyType = getGeneric<boolean>(true);

//* 5. generic type with multiple type parameters */
const getMultipleGeneric = <T, U, V>(arg1: T, arg2: U, arg3: V): [T, U, V] => {
  console.log(arg1, arg2, arg3);
  return [arg1, arg2, arg3];
};
const multipleGeneric = getMultipleGeneric<string, number, boolean>(
  "This is a generic type with multiple type parameters",
  123,
  true
);
