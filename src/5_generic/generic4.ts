// 没有泛型约束
interface demo {
	length:number
}

function fn<T extends demo>(x: T): void {
	console.log(x.length);
}
fn<string>('abc')