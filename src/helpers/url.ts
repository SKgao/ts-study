import { isDate, isPlainObject, isURLSearchParams } from './util'

interface URLOrigin {
  protocol: string
  host: string
}

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildUrl(
  url: string,
  params?: any,
  paramsSerializer?: (params: any) => string
): string {
  if (!params) {
    return url
  }

  let serializdParams = ''

  if (paramsSerializer) {
    serializdParams = paramsSerializer(params)
  } else if (isURLSearchParams(params)) {
    serializdParams = params.toString()
  } else {
    const parts: string[] = []

    Object.keys(params).forEach(key => {
      const val = params[key]
      if (val === null || typeof val === 'undefined') {
        return
      }

      let values = []
      if (Array.isArray(val)) {
        values = val
        key += '[]'
      } else {
        values = [val]
      }

      values.forEach(v => {
        if (isDate(v)) {
          v = v.toISOString()
        } else if (isPlainObject(v)) {
          v = JSON.stringify(v)
        }
        parts.push(`${encode(key)}=${encode(v)}`)
      })
    })

    serializdParams = parts.join('&')
  }

  if (serializdParams) {
    const hashIndex = url.indexOf('#')
    if (hashIndex > -1) {
      url = url.slice(0, hashIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializdParams
  }

  return url
}

const urlParsingNode = document.createElement('a')
const currentOrigin = resolveURL(window.location.href)

function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url)
  const { protocol, host } = urlParsingNode
  return { protocol, host }
}

// url是否同源
export function isURLSameOrigin(url: string): boolean {
  const parsedOrigin = resolveURL(url)
  return (
    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host
  )
}

// url是否为绝对路径
export function isAbsoluteURL(url: string): boolean {
  return /(^[a-z][a-z\d+\-\.]*:)?\/\//i.test(url)
}

// 合并url
export function combineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
