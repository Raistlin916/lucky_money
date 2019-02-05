import React from "@react";
import './index.scss';

class FriendsBlock extends React.Component {
  render() {
    return (
      <div className="box__wrapper block">
        <div className="box__title">
          已登记好友
        </div>
        <div className="friends-block__desc">
          你有 50 张抽签券待领取，快去邀请好友登记吧
        </div>
        <image
          class="lucky-code__slicer"
          src="https://i.loli.net/2019/02/05/5c599ba503d86.png"
          mode="aspectFit"
        />
        <image
          class="friends-block__empty"
          src="https://i.loli.net/2019/02/05/5c599ba504446.png"
          mode="aspectFit"
        />
      </div>
    )
  }
}

export default FriendsBlock;
