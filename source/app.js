import React from "@react";
import "./pages/index/index";
class Global extends React.Component {
  config = {
    window: {
      navigationBarBackgroundColor: "white",
      backgroundTextStyle: "light",
      navigationBarTitleText: "百万大奖等着你",
      navigationBarTextStyle: "black"
    }
  };
  onLaunch() {
    //针对快应用的全局getApp补丁
    if (this.$data && typeof global === "object") {
      var ref = Object.getPrototypeOf(global) || global;
      var _this = this;
      ref.getApp = function() {
        return _this;
      };
    }
    console.log("App launched"); //eslint-disable-line
  }
}
// eslint-disable-next-line
export default App(new Global());
