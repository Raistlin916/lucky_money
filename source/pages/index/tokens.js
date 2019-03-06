const tokens = {
  storageKey: 'LOGIN_DATA',
  tokens: {},
  userInfo: {},
  async login() {
    let loginData = wx.getStorageSync(this.storageKey)
    const emptyLoginData = {
      accessToken: null,
      refreshToken: null
    }
    try {
      if (loginData) {
        loginData = {
          ...emptyLoginData,
          ...JSON.parse(loginData)
        }
      } else {
        throw new Error()
      }
    } catch (e) {
      loginData = {
        ...emptyLoginData
      }
    }
    if (!loginData.accessToken) {
      await this.weixinAuth()
    }

    Object.assign(this.tokens, loginData)

    wx.checkSession({
      success: e => {
        this.fetchUserInfo()
      },
      fail: e => {
        this.weixinAuth()
      }
    })
  },
  weixinAuth() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: r => {
          wx.request({
            url: 'https://api.ippapp.com/uc/auth/wmpAuthorize',
            method: 'post',
            data: {
              client: { clientId: 'wmp_lottery_v1' },
              authorizationType: 'wechat_micro_program',
              authDetail: { authorizationCode: r.code }
            },
            success: ({ data }) => {
              Object.assign(this.tokens, data)
              wx.setStorageSync(this.storageKey, JSON.stringify(this.tokens))
              this.login()
              resolve()
            },
            fail: reject
          })
        },
        fail(e) {
          console.log(e)
        }
      })
    })
  },
  fetchUserInfo() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.saveUserInfo(res)
            }
          })
        } else {
          console.log('need user auth')
        }
      }
    })
  },
  saveUserInfo({ userInfo, ...rest }) {
    Object.assign(this.userInfo, userInfo)
    wx.request({
      url: 'https://api.ippapp.com/uc/wechatUser/syncWmpUserInfo',
      method: 'post',
      data: {
        ...rest
      },
      header: {
        'X-Client-Id': 'wmp_lottery_v1',
        'X-Access-Token': this.tokens.accessToken
      }
    })
  }
}

export default tokens
