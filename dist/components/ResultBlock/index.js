import React from "../../ReactWX.js";

function ResultBlock() {}

var ResultBlock = React.toClass(ResultBlock, React.Component, {
  render: function () {
    var h = React.createElement;

    return h(
      "view",
      { className: "box__wrapper block" },
      h(
        "view",
        { className: "box__title" },
        h("image", { className: "result-block__title-img", src: "https://i.loli.net/2019/02/05/5c593c85b4852.png", mode: "aspectFit" }),
        "参与抽奖成功"
      ),
      h(
        "view",
        { className: "result-block__goods-wrapper" },
        h("image", { className: "result-block__goods-image", src: "https://i.loli.net/2019/02/05/5c5869d5a33e6.png", mode: "aspectFit" }),
        h(
          "view",
          { className: "result-block__goods-side" },
          h(
            "view",
            { className: "result-block__goods-title" },
            "NIKE AIR FORCE ONE CLOT WORLD 2018"
          ),
          h(
            "view",
            {
              className: "result-block__goods-2nd-title" },
            "NIKE AIR FORCE ONE CLOT WORLD 2018 / 42s"
          )
        )
      ),
      h(
        "view",
        { className: "result-block__result" },
        h(
          "view",
          { style: React.toStyle({ fontWeight: "bold" }, this.props, 'style2102') },
          "你的抽奖券："
        ),
        h(
          "view",
          { className: "result-block__result-right" },
          h("image", { className: "result-block__lucky-code", src: "https://i.loli.net/2019/02/05/5c593abd822b3.png", mode: "aspectFit" }),
          " x 3 >"
        )
      )
    );;
  },
  classUid: "c1456"
}, {});
Component(React.registerComponent(ResultBlock, "ResultBlock"));


export default ResultBlock;