//对象接口---对对象进行限制
interface IPerson {
	name:string,
	readonly age:number,
	sex?:string
}
const person:IPerson = {
	name:'tom',
	age:19,
	sex:'男',
}

//函数接口
interface basicFunc {
	(a:string,b:string):boolean
}

const searchKeyWord:basicFunc = function (source,keyWord){
	return source.search(keyWord) > -1
}
console.log(searchKeyWord('abcd','a'));

//类接口

//轮子接口
interface IWhell {
	whellType:string,
	roll(a,b):any
}
//灯光接口
interface ILight {
	lightOn():boolean
	lightOff():boolean
}
interface ICar extends IWhell,ILight{
	
}

class Car implements ICar {
	whellType = '防滑轮胎'
	roll(distance:number,other:string){
		console.log(`车轮飞速的滚动了${distance}米`,other);
	}
	lightOn(){
		console.log('灯打开了');
		return true
	}
	lightOff(){
		console.log('灯关闭了');
		return false
	}
}
const c1 = new Car()
console.log(c1);
c1.lightOn()
c1.lightOff()
c1.roll(100,'qwe')

