const toString = Object.prototype.toString

// 是否为日期
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 是否为对象
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 是否为普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (let key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
