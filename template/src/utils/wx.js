export function share (options = {}) {
  window.wx.ready(() => {
    setTimeout(() => {
      var option = {
        link: window.location.href,
        title: options.title || document.title || '{{name}}',
        desc: options.desc || '{{name}}',
        imgUrl: options.imgUrl || 'http://7xoxz4.com1.z0.glb.clouddn.com/user_top_img.jpg',
        success: options.success || (() => {})
      }
      window.wx.onMenuShareAppMessage(option)
      window.wx.onMenuShareTimeline(option)
    }, 0)
  })
}

export const wxApis = [
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'getLocation',
  'chooseWXPay',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'openLocation'
]
