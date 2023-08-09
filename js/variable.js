
window.onload = () => {
  main();
}

function main(){
  /**/
  var a = 10; //변수(재선언 가능->사용 x)
  let b = 20; //변수(재선언 불가)
  const c = 30; //상수
  
  console.log(a);
  console.log(b);
  console.log(c);
  
  var a = 40;
  console.log(a);
  // let b = 50; //오류
  b = 50;
  console.log(b);
  //c = 60; //상수
  console.log(c);
  
  let name = "우주영";
  let age = 30;
  let score = 80.5;
  let status = true;
  
  console.log("이름: " + name + " - type(" + typeof(name) + ")");
  console.log("나이: " + age + " - type(" + typeof(age) + ")"); //number
  console.log("성적: " + score + " - type(" + typeof(score) + ")"); //number
  console.log("상태: " + status + " - type(" + typeof(status) + ")");
  
  console.log("10" == 10); //true. 값만 비교
  console.log("10" === 10); //false. 값 + 자료형 비교
  console.log("10" != 10);
  console.log("10" !== 10); //true
  
  let count = 12;
  console.log(count); 
  //undefined: 선언은 했으나 값이 대입되지 않아 자료형이 결정되지 않은 상태.
  //js는 대입했을 때 자료형이 결정되므로 'undefined'라는 유형이 생김
  
  let count2 = null; //변수를 'null'로 '대입'한 상태.
  console.log(count2);
  
  if(count === undefined || count === null ||count === 0 || count === "") {
    console.log(true);
  }
  //위 조건문은 아래와 같음!
  //js는 값이 undefined, null, 0, '' 이면 false의 결과 반환
  if(!count){ //
    console.log('값이 없음');
  }
  console.log(typeof(!!count));
  
  if(!!count) { //!! 연산자를 붙여 자료형을 boolean으로
    console.log("값이 있음");
  }
}