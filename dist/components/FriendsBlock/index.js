import React from "../../ReactWX.js";

function FriendsBlock() {}

var FriendsBlock = React.toClass(FriendsBlock, React.Component, {
  render: function () {
    var h = React.createElement;

    return h(
      "view",
      { className: "box__wrapper block" },
      h(
        "view",
        { className: "box__title" },
        "已登记好友"
      ),
      h(
        "view",
        { className: "friends-block__desc" },
        h(
          "view",
          null,
          "你有 50 张抽签券待领取，快去邀请好友登记吧"
        )
      )
    );;
  },
  classUid: "c416"
}, {});
Component(React.registerComponent(FriendsBlock, "FriendsBlock"));


export default FriendsBlock;