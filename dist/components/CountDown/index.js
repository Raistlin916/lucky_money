import React from "../../ReactWX.js";

function FriendsBlock() {}

var FriendsBlock = React.toClass(FriendsBlock, React.Component, {
  render: function () {
    var h = React.createElement;

    return h(
      "view",
      { className: "block" },
      h(
        "view",
        null,
        "开奖倒计时"
      ),
      h(
        "view",
        null,
        "开奖时间为：2019年02月27日 15:00"
      )
    );;
  },
  classUid: "c337"
}, {});
Component(React.registerComponent(FriendsBlock, "FriendsBlock"));


export default FriendsBlock;