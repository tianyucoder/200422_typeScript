(()=>{

	class Person {
		//属性声明
		readonly id:number = Date.now()
		name:string
		age:number
		phone:string
		eyesCount:number = 2
	
		//构造器函数
		constructor(name:string,age:number,readonly sex:string,phone:string){
			this.name = name
			this.age = age
		}
	
		//一般方法
		speak():void{
			console.log(`我叫${this.name}，年龄是${this.age}`);
		}
		
	}

	const p1 = new Person('tom',18,'男','138123443321')
	// p1.name = 'tom2'
	// p1.age = 20
	console.log(p1);

})()