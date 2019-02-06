import React from "@react"
import ResultBlock from "@components/ResultBlock/index"
import FriendsBlock from "@components/FriendsBlock/index"
import CountDown from "@components/CountDown/index"
import LuckyCodeList from "@components/LuckyCodeList/index"
import AdList from "@components/AdList/index"
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
        <div className="center">
          <CountDown />
        </div>
        <div class="center">
          <image
            class="steps-image"
            src="https://i.loli.net/2019/02/05/5c599d5da3b14.png"
            mode="aspectFit"
          />
        </div>

        <AdList />
      </div>
    )
  }
}

export default P
