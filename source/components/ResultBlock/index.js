import React from "@react";
import "./index.scss";
class ResultBlock extends React.Component {
  render() {
    return (
      <div className="box__wrapper block">
        <div className="box__title">
          <image
            className="result-block__title-img"
            src="https://i.loli.net/2019/02/05/5c593c85b4852.png"
            mode="aspectFit"
          />
          参与抽奖成功
        </div>
        <div className="result-block__goods-wrapper">
          <image
            className="result-block__goods-image"
            src="https://i.loli.net/2019/02/05/5c5869d5a33e6.png"
            mode="aspectFit"
          />
          <div className="result-block__goods-side">
            <div className="result-block__goods-title">
            NIKE AIR FORCE ONE CLOT WORLD 2018
            </div>
            <div className="result-block__goods-2nd-title">
            NIKE AIR FORCE ONE CLOT WORLD 2018 / 42
            </div>
          </div>
        </div>
        <div className="result-block__result">
          <div style={{ fontWeight: "bold" }}>
            你的抽奖券：
          </div>
          <div className="result-block__result-right">
            <image
              className="result-block__lucky-code"
              src="https://i.loli.net/2019/02/05/5c593abd822b3.png"
              mode="aspectFit"
            /> × 3 >
          </div>
        </div>
      </div>
    )
  }
}

export default ResultBlock;
