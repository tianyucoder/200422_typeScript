class Animal {
	//声明属性
	name:string
	age:number

	//构造器
	constructor(name:string,age:number){
		this.name = name 
		this.age = age 
	}

	//一般方法
	run(distance:number):void{
		console.log(`动物前进了${distance}米`);
	}
}

class Dog extends Animal{
	//构造器
	constructor(name,age){
		super(name,age)
	}

	//一般方法
	cry(time:number){
		console.log(`狗吼叫了${time}秒`);
	}

	//重写从父类继承过来的方法
	run(distance:number):void{
		console.log(`狗奔跑了${distance}米`);
	}

}

const a1 = new Animal('tom',4)
const d1 = new Dog('旺财',5)
console.log(a1);
console.log(d1);
a1.run(100)
d1.run(200)
