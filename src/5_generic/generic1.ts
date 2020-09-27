/* 
	需求：
			传入两个参数： 3 'hello'  返回：['hello','hello','hello']
			传入两个参数： 2 true  返回：[true,true]
			传入两个参数： 4 4  返回：[4,4,4,4]
			传入两个参数： 3 {m:1} 返回：[{m:1},{m:1},{m:1}]
*/
//函数泛型
function createArr<P,T>(count:number,data:P,other:T):P[]{
	console.log('我接到的other是',other);
	let arr = []
	for (let i = 0; i < count; i++) {
		arr.push(data)
	}
	return arr
}

const arr01 = createArr<string,boolean>(3,'hello',true)
const arr02 = createArr<number,object>(4,4,{})
arr01[0].split('e')