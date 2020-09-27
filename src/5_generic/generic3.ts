class Data<T> {
	value:T
	add:(a:T,b:T)=>T
}
const d = new Data<number>()
const d2 = new Data<string>()

d.value = 123
d.add = function(a:number,b:number):number{
	return a+b
}

d2.value = 'abcd'
d2.add = function(a:string,b:string):string{
	return a+b
}

