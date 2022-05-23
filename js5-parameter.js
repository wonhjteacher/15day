
/* function numAdd(a,b,c){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a+b+c;
}

console.log(numAdd(10,20,30))
//console.log(numAdd(10,20)) */

/* function numAdd(a=0,b=0,c=0){  // 초기값 설정 
    console.log(arguments)
    return a+b+c; // 10+0+0 
}
console.log(numAdd(10));  
 */
function numAdd(...num){   //rest 파라미터 ES6 
    console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    return ; // 10+0+0 
}
console.log(numAdd(10,20,30));  
// for 문 이용해서 전달 받은 매개변수의 총합을 구하기 

function numSum(...num){
  /* console.log(num.length) //3
    console.log(num[0])
    console.log(num[1])
    console.log(num[2]) */
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i]; 
    }
    return sum;
 
}
console.log(numSum(10,20,30,40,50,60,70));
