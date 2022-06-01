// 图片点击更换功能
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/a.jpg') {
      myImage.setAttribute('src', 'image/b.jpg');
    } else {
      myImage.setAttribute('src', 'image/a.jpg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}

/*
加一个登入功能
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName(); // 检查名字是否有输入/null
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '你是，' + myName;
  }
}



  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '我记得你的名字是' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
 }

