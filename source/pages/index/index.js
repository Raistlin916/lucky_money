import React from '@react'
import ResultBlock from '@components/ResultBlock/index'
import FriendsBlock from '@components/FriendsBlock/index'
import CountDown from '@components/CountDown/index'
import LuckyCodeList from '@components/LuckyCodeList/index'
import AdList from '@components/AdList/index'
import tokens from './tokens'
import request from './request'
import './index.scss'

class P extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prizes: [{}]
    }
  }
  async componentDidMount() {
    await tokens.login()
    request.init({
      'X-Client-Id': 'wmp_lottery_v1',
      'X-Access-Token': tokens.tokens.accessToken
    })
    const result = await request.get(
      'https://api.ippapp.com/lottery/lotteryInfo/getById',
      {
        lotteryId: 1
      }
    )
    this.setState({
      prizes: result.prizes
    })
    console.log(111, result)
  }
  getUserInfo() {
    React.api.getUserInfo({
      success: function(res) {
        tokens.saveUserInfo(res.userInfo)
      }
    })
  }
  render() {
    return (
      <div class="page">
        <button
					type="primary"
					open-type="getUserInfo"
					onGetUserInfo={this.getUserInfo.bind(this)}
				>
					授权登录
        </button>
        <ResultBlock prize={this.state.prizes[0]} />
        <LuckyCodeList />
        <p className="line">下 1 位好友登记抽签 = 再解锁 1 枚券</p>
        <div className="btn">继续邀请登记</div>
        <FriendsBlock />
        <div className="center">
          <CountDown />
        </div>
        <div class="steps-image" />
        <AdList />
      </div>
    )
  }
}

export default P
