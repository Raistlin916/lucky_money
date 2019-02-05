import React from "@react"
import ResultBlock from "@components/ResultBlock/index"
import FriendsBlock from "@components/FriendsBlock/index"
import CountDown from "@components/CountDown/index"
import LuckyCodeList from "@components/LuckyCodeList/index"
import "./index.scss"

class P extends React.Component {
  render() {
    return (
      <div class="page">
        <ResultBlock />
        <LuckyCodeList />
        <p className="line">
          下 1 位好友登记抽签 = 再解锁 1 枚券
        </p>
        <div className="btn">
          继续邀请登记
        </div>
        <FriendsBlock />
        <CountDown />
      </div>
    )
  }
}

export default P
