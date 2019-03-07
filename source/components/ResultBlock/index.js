import React from '@react'
import './index.scss'
class ResultBlock extends React.Component {
  render() {
    return (
      <div className="box__wrapper block">
        <div className="box__title">
          <div className="result-block__title-img" />
          参与抽奖成功
        </div>
        <div className="result-block__goods-wrapper">
          {!!this.props.prize.pic && (
            <div
              className="result-block__goods-image"
              style={{ backgroundImage: `url(${this.props.prize.pic})` }}
            />
          )}

          <div className="result-block__goods-side">
            <div className="result-block__goods-title">
              { this.props.prize.title }
            </div>
            <div className="result-block__goods-2nd-title">
              一些描述信息
            </div>
          </div>
        </div>
        <div className="result-block__result">
          <div style={{ fontWeight: 'bold' }}>你的抽签券：</div>
          <div className="result-block__result-right">
            <div className="result-block__lucky-code" /> × 3
            <div className="result-block__right-arrow" />
          </div>
        </div>
      </div>
    )
  }
}

export default ResultBlock
