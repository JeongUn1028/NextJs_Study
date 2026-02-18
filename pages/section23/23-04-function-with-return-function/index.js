//* 1. 함수를 return 하는 함수
function aaa() {
  const apple = 10;
  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}
aaa()();

//* 2. 함수를 return 하는 함수 - 파라미터가 있는 경우
function aaa(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}
aaa(100)(200);

//* 3. 함수를 return 하는 함수 - 화살표 함수로 표현
const aaa = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};
aaa(100)(200);

//* 4. 함수를 return 하는 함수 - 인자 여러개
const ccc = (apple) => (banana) => (tomato) => {
  console.log(tomato);
  console.log(banana);
  console.log(apple);
};
ccc(100)(200)(300);
