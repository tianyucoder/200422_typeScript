(()=>{

	/* 
    访问修饰符: 用来描述类内部的属性/方法的可访问性
      public: 默认值, 公开的外部也可以访问
      protected: 类内部、子类可以访问
      private: 只有类内部可以访问
  */

	class Person {
		//声明属性
		public name:string
		protected age:number
	
		//构造方法
		constructor(name:string,age:number){
			this.name = name
			this.age = age
		}
		//一般方法
		private speak():string{
			 return `我的名字是${this.name},我的年龄是${this.age}`
		}
		study(){
			this.speak()
		}
	}

	//Student类继承Person
	class Student extends Person {
		//构造方法
		constructor(name,age){
			super(name,age)
		}
		//一般方法
		stuSpeak():string{
			return 'abc'
			//  return super.speak() //属性“speak”为私有属性，只能在类“Person”中访问
		}
	}

	const p1 = new Person('老刘',18)
	console.log(p1.name);
	// console.log(p1.age); //属性“age”受保护，只能在类“Person”及其子类中访问。
	// console.log(p1.speak());//属性“speak”为私有属性，只能在类“Person”中访问。

})()