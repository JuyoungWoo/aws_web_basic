
console.log(add(10,20));

//호이스팅: function과 var 키워드가 들어간 것들은 실행 전에 미리 정의된다.
function add(x, y){
  return x + y;
}//js는 자료형이 없기 때문에 함수 반환형도 명시할 필요 없음

function sub(x, y){
  return;
}

//ppt 15_호이스팅 예제
// var x = 10;
// function displayNumber(){
//   console.log("x is " + x);
//   var y = 20; //호이스팅은 되지만 대입된 값은 저장되지 않음!
//   console.log("y is " + y);
// }
// displayNumber();

//익명 함수(화살표 함수)
const printInfo = () => { //함수를 정의해 '변수'를 넣고 있음
  console.log("정보 출력");
  
}
console.log(typeof(printInfo)); //function 타입! -> 변수에 함수를 넣을 수 있다!

//콜백함수
function callback(fx) {
  console.log("콜백 함수");
  fx(); //매개변수로 받아온 함수를 호출!
}
callback(printInfo); //fx라는 매개'변수' 안에 printInfo라는 '함수'를 넣음

const fx1 = function(a){
  console.log("a: " + a);
}
fx1(10); //변수명이 함수명이 됨. 변수명으로 함수 호출.

//화살표 함수(람다)
const fx2 = (b) => {
  console.log("b: " + b);
}

fx2(20);