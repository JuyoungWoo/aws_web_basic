const plus = () => {
  const resultObj = document.querySelector(".result");
  //html 파일에서의 class 이름이 result인 모든 요소의 모든 스타일을 불러옴
  let oldNumber = parseInt(resultObj.innerHTML);
  //innerHTML: 해당 태그요소를 가져옴. 반환형이 문자열이므로 parseInt()해줌
  resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
  const resultObj = document.querySelector(".result");
  let oldNumber = parseInt(resultObj.innerHTML);
  
  resultObj.innerHTML = oldNumber - 1;
}