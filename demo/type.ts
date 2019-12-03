// number类型
let decLiteral: number = 20
let hexLiteral: number = 0x14 // 十六进制
let binaryLiteral: number = 0b101010 // 二进制
let octalLiteral: number = 0o24 // 八进制

// string类型
let me: string = 'zoro'
let age: number = 20
let sentence: string = `hello, ${me} is ${age}`

// 数组类型
let list: number[] = [1, 2, 3]
let list2: Array<string> = ['a', 'b', 'c']

// 元组类型
let x: [string, number]
x = ['hello', 1]
// x[2] = 'abc'; // 越界访问为联合类型

// 枚举类型
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Blue
let colorName: string = Color[2]
console.log('colorName:', colorName)

// any类型
let notSure: any = 4
notSure = 'abc'
notSure = true
let list3: any[] = [1, 'a', true]

// void类型
function fn(): void {
  console.log('This is void')
}
let unusable: void = undefined

// null | undefined 类型
let u: null = null
let n: undefined = undefined

// never 不存在的类型
function error(message: string): never {
  throw new Error(message)
}
function fail() {
  return error('something failed')
}
// 无限循环
function inifiniteLoop(): never {
  while (true) {
    console.log('a')
  }
}

// object类型
declare function create(o: object | null): void
create({ o: { prop: 0 } })
create(null)

// 强制类型转换
let someValue: any = 'this is string'
// let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length
