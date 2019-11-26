// 抽象类
abstract class Animal {
    abstract makeSound(): void

    move(): void {
        console.log('move')
    }
}

abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }

    printName():void {
        console.log('Department name is :' + this.name)
    }

    abstract sendMessage(): void
}

class AccountingDepartment extends Department {
    constructor() {
        super('Zoro')
    }

    sendMessage(): void {
        console.log('test send')
    }
}

let department: Department = new AccountingDepartment()


class Greeter {
    static msg = 'hello, boy'

    greeting: string | void

    constructor(message?: string) {
        this.greeting = message
    }

    greet(): string {
        if (this.greeting) {
            return 'hello' + this.greeting
        } else {
            return Greeter.msg
        }
    }
}

let myGreet: Greeter = new Greeter('world')
console.log(myGreet.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.msg = 'changed msg'

let myGreet2: Greeter = new Greeter()
console.log(myGreet2.greet())