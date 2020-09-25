//数据类型

//布尔值
let isHot:boolean
isHot = false
isHot = null //可以的

//数值
let n1:number = 10 //十进制的10
let n2:number = 0b1010  // 二进制10
let n3:number = 0o12 // 八进制10
let n4:number = 0xa // 十六进制10
// console.log(n1,n2,n3,n4);
n1 = null //可以的
n1 = undefined //可以的

//字符串
let str:string = 'hello,atguigu'

//undefined 和 null
//特别注意：默认情况下 null 和 undefined 是所有类型的子类型。
let u:undefined
let n:null

//数组
let arr1:number[] = [1,2,3]
let arr2:Array<boolean> = [true,false]
// arr1 = [4,5,6,7,8,true] //不可以的
// arr2 = [true] //不可以的

//元组
let arr3:[string,number,boolean] = ['1',2,true]

//枚举
enum direction {
	Top,
	Bottom,
	Left,
	Right
}
console.log(direction);
console.log(direction[0]);
console.log(direction[3]);
console.log(direction.Right);

//any
let notSure:any
let list:any[]
notSure = 1
notSure = []
notSure = {}
notSure = true
list = [1,2,'a',true]

//void
let v:void
v = undefined
v = null
//demo函数返回值是空
function demo():void{
	console.log(1);
}

//object
let obj:object = {a:1}
function test(a:number,b:string):object{
	return {a,b}
}
console.log(test(1,'2'));

//联合类型
function myToString(data:string | number){
	return data.toString()
}
console.log(myToString(123));
console.log(myToString('abc'));

//类型断言
/* 
	需求：输入：123  返回3
			  输入：'abc' 返回3
 */
function getLength(data:string | number){
	if((<string>data).length){
		return (data as string).length
	}else{
		return data.toString().length
	}
}

//类型推断(推倒)
let a:object = {}
a = []