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
        <div class="lucky-code__slicer"/>
        <div class="friends-block__empty"/>
      </div>
    )
  }
}

export default FriendsBlock;
