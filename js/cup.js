window.onload = () => {
  const cupImg= document.querySelector(".img-border img"); //아래의 e.target
  cupImg.src = "./images/cup1.jpeg";
  cupImg.onclick = cupImgOnClickHandle;
  
  document.onclick = () => {
      if(cupImg.src.includes("cup1")){
        cupImg.src = "./images/cup2.jpeg";
      }else {
        cupImg.src="./images/cup1.jpeg";
      }
  };
};

const cupImgOnClickHandle = (e) => {
  if(e.target.src.includes("cup1")){
    e.target.src = "./images/cup2.jpeg";
  }else {
    e.target.src="./images/cup1.jpeg";
  }
}
//e: 이벤트 이름
//e.target: 이벤트가 일어난 대상
//querySelector = e.target