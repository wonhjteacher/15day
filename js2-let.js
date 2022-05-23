

let hello = '안녕하세요'; //전역변수 
console.log(hello);

if(true){
    let hello = 'hello'; // 지역변수로 사용 : 재선언이 아님  
    console.log(hello);
}


//let hello = '반갑습니다.'; // 재선언 안됨 
hello = '반갑습니다.' // 재할당 가능 

console.log(hello);