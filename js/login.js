
const signinButtonOnClickHandle = () => {
  AccountService.getInstance().signin();
} 

class AccountService { //싱글톤
  
  authUsername = "aaa";
  authPassword = "1234";
  //변수명 앞에 #을 붙이면 접근지정자가 private임
  static #instance = null;
  
  //js는 생성자에 private 부여 불가능 -> 생성자는 따로 쓰지 않음
  static getInstance() {
    if(this.#instance == null){
      this.#instance = new AccountService();
    }
    return this.#instance;
  }
  
  signin(){
    const usernameInput = document.querySelector('.username-input');
    //element 전체를 가져오는 거임
    const passwordInput = document.querySelector('.password-input');
    // console.log(usernameInput.value); //요소.value : 요소에 적힌 value 속성값
    // console.log(passwordInput.value);
    const username = usernameInput.value;
    const password = passwordInput.value
    
    if(username !== this.authUsername || password !== this.authPassword){
      alert("사용자 정보가 일치하지 않습니다.");
      return;
    }
    alert("로그인 성공");
  }
  
}