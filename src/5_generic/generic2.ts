
//定义了一个User类
class User {
	id:number
	name:string
	age:number

	constructor(id:number,name:string,age:number){
		this.id = id
		this.name = name
		this.age = age
	}
}

interface IBasicCRUD<T> {
	datas:T[]
	add(a:string,b:number):number
	getDataById(a:number):T
}

class DataCRUD implements IBasicCRUD<User> {
	//给实例追加一个users属性，用于存储一个一个的user对象
	datas:User[] = []
	//追加一个user
	add(name:string,age:number):number{
		const id = Date.now()
		this.datas.push(new User(id,name,age))
		return id
	}
	//查询一个人
	getDataById(id:number):User{
		return this.datas.find(user=>user.id === id)
	}
}

const d01 = new DataCRUD()
console.log(d01.datas);
d01.add('jerry',19)
console.log(d01.datas);
console.log(d01.getDataById(1));