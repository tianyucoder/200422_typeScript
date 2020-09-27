//书写完整函数类型
const add:(a:number,b:number)=>number = function(x:number,y:number):number{
	return x+y
}

//可选参数和默认参数
function getFullName (firstName:string = '李',lastName?:string):string{
	if(lastName){
		return firstName + lastName
	}else{
		return firstName
	}
}
console.log(getFullName(undefined,'四'));

//剩余参数
function test0 (a:number,b:number,...c:[number,number,string]){
	console.log('%%',a,b,c);
}
test0(1,2,3,4,'5')

/* 
	需求：传入的是 'abc' 、 'bcd' 返回 'abcd'
			  传入的是 1 、 8  返回 9
*/
//函数重载
function myAdd(a:string,b:string):string
function myAdd(a:number,b:number):number

function myAdd (a:string | number,b:string | number){
	if(typeof a === 'string' && typeof b === 'string'){
		return a+b
	}
	else if(typeof a === 'number' && typeof b === 'number'){
		return a+b
	}
}
console.log(myAdd('a','b'));
console.log(myAdd(1,2));
// console.log(myAdd(1,'b')); //没有与此调用匹配的重载。
