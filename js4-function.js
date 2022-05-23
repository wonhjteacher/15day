
function hello() { 
    console.log('hello world');
}

hello();

function num(a,b){ 
   return a + b ; // 30
}

const result = num(10,20)

console.log(result)

function userInfo(name , age){
  return `이름은${name} 나이는${age}`   
}

const profile = userInfo('홍길동',20);
console.log(profile)

// 두개의 매개변수를 받아서 두 값을 곱해서 출력 하는 함수  

function muti(num1,num2){
    return  num1*num2
}

const resultMuti1 = muti(5,30)
const resultMuti2 = muti;
console.log(resultMuti1)  // 150 
console.log(resultMuti2(50,60)) // function 