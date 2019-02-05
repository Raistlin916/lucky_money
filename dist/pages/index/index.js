import React from "../../ReactWX.js";

function P() {}

var P = React.toClass(P, React.Component, {
  render: function () {
    var h = React.createElement;

    return h(
      "view",
      { "class": "page" },
      h(React.useComponent, { is: "ResultBlock", "data-instance-uid": 'i11_8_' + 0 }),
      h(
        "view",
        { className: "line" },
        "下 1 位好友登记抽签 = 再解锁 1 枚券"
      ),
      h(
        "view",
        { className: "btn" },
        "继续邀请登记"
      ),
      h(React.useComponent, { is: "FriendsBlock", "data-instance-uid": 'i18_8_' + 0 }),
      h(React.useComponent, { is: "CountDown", "data-instance-uid": 'i19_8_' + 0 })
    );;
  },
  classUid: "c760"
}, {});
Page(React.registerPage(P, "pages/index/index"));


export default P;