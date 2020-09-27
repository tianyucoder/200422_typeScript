(()=>{

	//父类---Animal类
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
	
	//子类---Dog类
	class Dog extends Animal{
		//构造器
		constructor(name,age){
			super(name,age)
		}
		
		//重写从父类继承过来的方法
		run(distance:number):void{
			console.log(`狗奔跑了${distance}米`);
		}
	
	}

	//子类---Snake类
	class Snake extends Animal{
		//构造器
		constructor(name,age){
			super(name,age)
		}
		
		//重写从父类继承过来的方法
		run(distance:number):void{
			console.log(`蛇滑行了${distance}米`);
		}

		attack(n:number){
			console.log(`我咬了你${n}口`);
		}
	
	}

	const a1:Animal = new Animal('tom',3)
	const d1:Animal = new Dog('旺财',4)
	const s1:Snake = new Snake('眼镜蛇李四',5)
	
	a1.run(50)
	d1.run(50)
	s1.run(50)
	s1.attack(2)

})()
