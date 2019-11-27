interface Person {
  firstName: string
  lastName: string
}

class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

function hello(person: Person) {
  return 'hello ' + person.firstName + person.lastName
}

let user: Person = {
  firstName: 'G',
  lastName: 'sk'
}
console.log(hello(user))

let user2 = new User('G', 'SK')
