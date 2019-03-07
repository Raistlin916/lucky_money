const methods = ['get', 'post']

const instance = {
  init(tokenManager) {
    instance.tokenManager = tokenManager
  },
  refreshToken() {
    return instance.post('/uc/auth/refreshToken', {
      client: { clientId: 'wmp_lottery_v1' },
      authorizationType: 'wechat_micro_program',
      authDetail: { refreshToken: instance.tokenManager.tokens.refreshToken }
    })
  }
}

methods.forEach(method => {
  instance[method] = (url, data) =>
    new Promise((resolve, reject) => {
      wx.request({
        url: `https://api.ippapp.com${url}`,
        method,
        data,
        header: {
          'X-Client-Id': 'wmp_lottery_v1',
          'X-Access-Token': instance.tokenManager.tokens.accessToken
        },
        success: res => {
          if (res.statusCode === 200) {
            return resolve(res.data)
          }
          if (res.statusCode === 401) {
            return instance
              .refreshToken()
              .then(() => instance[method](url, data))
              .then(resolve, reject)
          }
          reject(res.errMsg)
        },
        fail: reject
      })
    })
})

export default instance
