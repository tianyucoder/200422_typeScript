
class Person {
	//属性声明
	name:string
	age:number

	//构造器函数
	constructor(  name:string,age:number){
		this.name = name
		this.age = age
	}

	//一般方法
	speak():void{
		console.log(`我叫${this.name}，年龄是${this.age}`);
	}
	
}

const p1 = new Person('老刘',18)
const p2 = new Person('老王',19)
console.log(p1,p2);
p1.speak()