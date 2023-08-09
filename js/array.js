window.onload = () => {
  const numbers = [1,2,3,4,5];
  
  const numbers2 = numbers.map((n) => {
    return n * 2;
  });
  
  console.log(numbers);
  console.log(numbers2);
  
  loadUserList();
  // console.log(userList);
  // console.log("username: "+ userList[0].username);
  // console.log(`username: ${userList[0].username}`);
}

const userList = new Array();  //객체 요소
userList.push({ username: "aaa", password: "1111"});
userList.push({ username: "bbb", password: "2222"});
userList.push({ username: "ccc", password: "3333"});
userList.push({ username: "ddd", password: "4444"});
userList.push({ username: "eee", password: "5555"});
userList.push({ username: "fff", password: "6666"});

const loadUserList = () => {
  const userListTbody = document.querySelector(".user-list");
  //방법1
  // for(let i = 0; i < userList.length; i++){
  //   userListTbody.innerHTML += `
  //     <tr>
  //       <td>${userList[i].username}</td>
  //       <td>${userList[i].password}</td>
  //     </tr>
  //   `;
  // }
  
  //방법2: foreach와 비슷
  const mapTest = userList.map((user) => { //userList의 모든 요소 순회
    return `
      <tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
      </tr>
    `;
  });
  
  // console.log(mapTest);
  userListTbody.innerHTML = mapTest.join(""); 
  //join(): 배열의 모든 요소들을 ','이 아닌 () 안의 값으로 연결
};

