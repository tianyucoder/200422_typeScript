(()=>{

	class Person {
		//声明属性
		firstName:string
		lastName:string
		static info:string = 'abc'

		constructor(firstName,lastName){
			this.firstName = firstName
			this.lastName = lastName
		}

		get fullName(){
			console.log('@');
			//fullName中的this是实例对象
			return this.firstName + '-' + this.lastName
		}

		set fullName(data){
			const nameArr = data.split('-')
			this.firstName = nameArr[0]
			this.lastName = nameArr[1]
		}

		//如下代码会产生死递归
		// get sex(){
		// 	return this.sex
		// }
		// set sex(s){
		// 	console.log(s);
		// 	this.sex = s
		// }

	}

	const p1 = new Person('张','三')
	// console.log(p1.sex);

	// p1.firstName = '邓'
	// console.log(p1.fullName);
	p1.fullName = '邓-伦'
	// console.log(p1.fullName);
	// console.log(p1.firstName);
	// console.log(p1.lastName);
	console.log(Person.info);

})()