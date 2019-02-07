import React from "@react";
import "./index.scss";
class ResultBlock extends React.Component {
  render() {
    return (
      <div className="box__wrapper block">
        <div className="box__title">
          <div className="result-block__title-img"/>
          参与抽奖成功
        </div>
        <div className="result-block__goods-wrapper">
          <div className="result-block__goods-image"/>
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
            你的抽签券：
          </div>
          <div className="result-block__result-right">
            <div className="result-block__lucky-code"/> × 3<div className="result-block__right-arrow"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultBlock;
