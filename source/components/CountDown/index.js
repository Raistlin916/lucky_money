import React from "@react";
import './index.scss';

class FriendsBlock extends React.Component {
  render() {
    return (
      <div className="block">
        <div>
          <div className="countdown__title">
            开奖倒计时
          </div>
          <div className="countdown__desc">
            开奖时间为：2019年02月27日 15:00
          </div>
        </div>
      </div>
    )
  }
}

export default FriendsBlock;
