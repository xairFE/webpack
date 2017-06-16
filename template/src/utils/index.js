export function formatNumer (n) {
    return n > 9 ? n : '0' + n
}

export function setStorage (key, value, type = 'localStorage') {
    window[type].setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}

export function getStorage (key, type = 'localStorage') {
    var value = window[type].getItem(key)
    if (value) return JSON.parse(value)
    return value
}

export function copy (obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function setSessionStorage (key, value) {
    setStorage(key, value, 'sessionStorage')
}

export function getSessionStorage (key) {
    return getStorage(key, 'sessionStorage')
}

export function urlQueryString (url, params) {
    var querys = []
    for (let key in params) {
        if (params[key] !== undefined && params[key] !== '' && params[key] !== null) querys.push(`${key}=${params[key]}`)
    }
    return url + (querys.length ? '?' + querys.join('&') : '')
}
