import { ResolvedFn, RejectedFn } from './../types/index'

// 拦截器接口
interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = [] // 存储每个拦截器
  }

  // 添加拦截器
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })

    return this.interceptors.length - 1
  }

  // 内部使用，遍历拦截器
  forEach(fn: (interceptors: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptors => {
      if (interceptors !== null) {
        fn(interceptors)
      }
    })
  }

  // 删除拦截器
  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
