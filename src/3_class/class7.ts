(()=>{

	//类接口----限制类
	/* interface Animal {
		run(a):void
		cry():string
	} */

	//抽象类
	abstract class Animal{
		abstract run(a):void
		cry(){
			return '我吼叫了，吓死你！'
		}
	}

	class Dog extends Animal {
		run(distance:number):void{
			console.log(`狗狗奔跑了${distance}米`);
		}
	}

	class Snake extends Animal {
		run(distance:number):void{
			console.log(`蛇滑行了${distance}米`);
		}
	}

	const d = new Dog()
	const s = new Snake()
	console.log(s.cry());
	console.log(d.cry());

})()