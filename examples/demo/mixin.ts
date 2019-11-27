// 高级类型

// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U

    for (let i in first) {
        result[i] = first[i] as any
    }
    for (let j in second) {
        if (!result[j]) {
            result[j] = second[j] as any
        }
    }
    return result
}

class Person {
    constructor(public name: string) {
        this.name = name
    }
}

interface Loggable {
    log(): void
}

class ConsoleLogger implements Loggable {
    log() {
        console.log('aaa')
    }
}
let ji = extend(new Person('zoro'),  new ConsoleLogger())
console.log(ji.name)
ji.log()


// 联合类型
function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + value
    } else {
        return padding + value
    }
}
padLeft('vv', 4)
padLeft('vv', 'aa')