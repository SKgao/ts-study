interface Square {
  color: string
  area: number
}
// 可选属性、额外属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 额外属性
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'red', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare: Square = createSquare({
  color: 'green',
  size: 9
})
console.log('mySquare__', mySquare)

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
// p1.x = 5
let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a // 只读数组
// ro[1] = 20
// ro.push(10)

// 函数类型接口
interface SearchFunc {
  (source: string, substring: string): boolean
}
const myFunc: SearchFunc = (str, sub) => {
  return str.search(sub) > -1
}

// 可索引类型
interface StringArray {
  [index: number]: string
}
let myArr: StringArray = ['a', 'b']

interface ReadOnlyStringArray {
  readonly [index: number]: string
}
let myArr2: ReadOnlyStringArray = ['a', 'b', 'c']
// myArr2[2] = '2'

// 类类型、继承接口
interface ClockInterface {
  tick(): void
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(hour: number, minute: number) {
    console.log(hour, minute)
  }
  tick() {
    console.log('aaa')
  }
}
let digitalClock = createClock(DigitalClock, 10, 10)

// 继承接口
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square2 extends Shape, PenStroke {
  sideLength: number
}
let squar = {} as Square2
squar.color = '#fff'
squar.sideLength = 100
squar.penWidth = 20.0

// 混合类型
interface Counter {
  (start: number): string

  interVal: number

  reset(): void
}

function getCounter(): Counter {
  let counter = function(start: number) {
    return start + ''
  } as Counter

  counter.interVal = 5.0

  counter.reset = () => console.log('reset__')

  return counter
}

// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Botton extends Control implements SelectableControl {
  select() {
    console.log('select')
  }
}
