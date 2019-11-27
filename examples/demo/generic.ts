// 泛型
function identify<T>(arg: T): T {
    return arg
}

function identifyLength<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

// 泛型接口
interface GenericIdentifyFn<T> {
    (arg: T): T
}
let myIdentify: GenericIdentifyFn<number> = identify

// 泛型类
class GenericNumber<T> {
    zeroNumber: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroNumber = 10
myGenericNumber.add = (x, y) => x + y

let myGenericNumber2 = new GenericNumber<string>()
myGenericNumber2.zeroNumber = '12'
myGenericNumber2.add = (x, y) => x + y


// 泛型约束
interface Lengthwise {
    length: number
}

function loggingIdentify<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}
loggingIdentify([1])
loggingIdentify('vv')
loggingIdentify({ length: 10 })

// 获取属性
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x = {a: 1, b: 2, c: 2}
getProperty(x, 'a')

// 构造函数
function create<T>(c: { new(): T }): T {
    return new c()
}