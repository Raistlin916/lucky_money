import React from '@react'
import ResultBlock from '@components/ResultBlock/index'
import FriendsBlock from '@components/FriendsBlock/index'
import CountDown from '@components/CountDown/index'
import LuckyCodeList from '@components/LuckyCodeList/index'
import AdList from '@components/AdList/index'
import tokenManager from './tokenManager'
import request from './request'
import './index.scss'

class P extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prizes: [{}],
      drawAt: ''
    }
  }
  async componentDidMount() {
    await tokenManager.login()
    request.init(tokenManager)
    const result = await request.get(
      '/lottery/lotteryInfo/getById',
      {
        lotteryId: 1
      }
    )
    this.setState({
      prizes: result.prizes,
      drawAt: result.drawAt
    })
  }
  getUserInfo() {
    React.api.getUserInfo({
      success: function(res) {
        tokenManager.saveUserInfo(res.userInfo)
      }
    })
  }
  render() {
    return (
      <div class="page">
        {/* <button
					type="primary"
					open-type="getUserInfo"
					onGetUserInfo={this.getUserInfo.bind(this)}
				>
					授权登录
        </button> */}
        <ResultBlock prize={this.state.prizes[0]} />
        <LuckyCodeList />
        <p className="line">下 1 位好友登记抽签 = 再解锁 1 枚券</p>
        <div className="btn">继续邀请登记</div>
        <FriendsBlock />
        <div className="center">
          <CountDown targetDate={this.state.drawAt} />
        </div>
        <div class="steps-image" />
        <AdList />
      </div>
    )
  }
}

export default P
