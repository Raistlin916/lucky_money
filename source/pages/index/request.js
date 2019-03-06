const methods = ['get', 'post']
const instance = {
  header: null,
  init(header) {
    instance.header = header
  }
}
methods.forEach(method => {
  instance[method] = (url, data) =>
    new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        data,
        header: instance.header,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(res.errMsg)
          }
        },
        fail: reject
      })
    })
})

export default instance