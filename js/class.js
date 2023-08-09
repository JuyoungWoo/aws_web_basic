//객체 생성법 1: 객체 형식으로 생성
//주로 정보를 담을 때 사용
const user = {
  //멤버 변수
  username: null, //변수 선언법. 대입을 ':'로 선언 (k-v 형태로 이루어짐)
  password: null,
  name: null,
  email: null,
  //메소드
  toString: () => {
    return "user(" + user.username + ", " + user.password + ", " + user.name + ", " + user.email + ")";
  }
}

user.username = "aaa";
user.password = "1234";
user.name = "김준일";
user.email = 'aaa@gmail.com';

console.log(user.toString());
console.log(user); //toString() 생략

//객체 생성법 2: 클래스로 만들어 클래스의 객체로 생성
//주로 기능을 만들떄 사용
class User {
  username;
  password;
  //생성자
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
  usernameAndPasswordCheck(username, password) {
    console.log("입력한 아이디 : " + username);
    console.log("입력한 비밀번호 : " + password);
    if(username !== this.username || password !== this.password){
      alert("로그인 실패");
      return;
    } 
    alert("로그인 성공");
  }
}

const bbb = new User("bbb", "1234"); 
bbb.usernameAndPasswordCheck("ccc", "1234");