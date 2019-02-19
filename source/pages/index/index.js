import React from "@react"
import ResultBlock from "@components/ResultBlock/index"
import FriendsBlock from "@components/FriendsBlock/index"
import CountDown from "@components/CountDown/index"
import LuckyCodeList from "@components/LuckyCodeList/index"
import AdList from "@components/AdList/index"
import "./index.scss"

const tokens = {
  storageKey: 'LOGIN_DATA',
  tokens: {},
  userInfo: {},
  login() {
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
    } catch(e) {
      loginData = {
        ...emptyLoginData
      }
    }
    if (!loginData.accessToken) {
      this.weixinAuth()
      return
    }

    Object.assign(this.tokens, loginData)

    wx.checkSession({
      success: (e) => {
        this.fetchUserInfo()
      },
      fail: (e) => {
        this.weixinAuth()
      }
    })
  },
  weixinAuth() {
    wx.login({
      success: (r) => {
        wx.request({
          url: 'https://api.ippapp.com/uc/auth/wmpAuthorize',
          method: 'post',
          data: {
            client: {clientId: 'wmp_lottery_v1'},
            authorizationType: 'wechat_micro_program',
            authDetail: {authorizationCode: r.code}
          },
          success: ({ data }) => {
            Object.assign(this.tokens, data)
            wx.setStorageSync(this.storageKey, JSON.stringify(this.tokens))
            this.login()
          }
        })
      },
      fail(e) {
        console.log(e)
      }
    });
  },
  fetchUserInfo() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => {
              this.saveUserInfo(res)
            }
          })
        } else {
          console.log('need user auth')
        }
      }
    })
  },
  saveUserInfo({ userInfo, ...rest}) {
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
      },
      success: (res) => {
        console.log(res)
      }
    })
  }
}

class P extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
  }
  componentDidMount() {
    tokens.login()
  }
  getUserInfo() {
    React.api.getUserInfo({
      success: function(res) {
        tokens.saveUserInfo(res.userInfo)
      }
    });
  }
  render() {
    return (
      <div class="page">
        <div>{this.state.code}</div>
        <button
					type="primary"
					open-type="getUserInfo"
					onGetUserInfo={this.getUserInfo.bind(this)}
				>
					授权登录
				</button>
        <ResultBlock />
        <LuckyCodeList />
        <p className="line">
          下 1 位好友登记抽签 = 再解锁 1 枚券
        </p>
        <div className="btn">
          继续邀请登记
        </div>
        <FriendsBlock />
        <div className="center">
          <CountDown />
        </div>
        <div class="steps-image"/>
        <AdList />
      </div>
    )
  }
}

export default P
