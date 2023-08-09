//DOM(문서 객체 모델)
// console.log(document.getElementById("box1")); //객체임
// console.log(document.getElementsByClassName("box2")[0]);
// console.log(document.getElementsByTagName("div")[0]);

const box1 = document.getElementById("box1");
const box2Array = document.getElementsByClassName("box2");
const divArray = document.getElementsByTagName("div");

box1.innerHTML = `<input type="password">`; //id가 box1인 요소(=<div>) 안에 type이 password인 <input> 요소를 넣는다.

// box2Array[1].innerHTML = `<input type='text'>`;

//querySelector()
//document: html 문서 전체
const box1_qs = document.querySelector('#box1'); //querySelecter 쓸 때는 따옴표 안에 셀렉터 표기법으로 작성
const box2Array_qs = document.querySelectorAll(".box2");
const usernameInput = box2Array_qs[1].querySelector(".username-input"); //q.s.는 dom 요소에서 여러번 q.s()할 수 있음
const divArray_qs = document.querySelectorAll("div");
usernameInput.value = "test";

console.log(box2Array_qs);