export const isIos = /ip(hone|od|ad)/i.test(navigator.userAgent)
export const isWechat = /micromessenger/i.test(navigator.userAgent)
export const isIphoneX = /iphone/i.test(navigator.userAgent) && (screen.height === 812 || screen.width === 812)
