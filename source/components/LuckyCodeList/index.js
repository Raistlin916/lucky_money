import React from "@react";
import './index.scss';

class LuckyCodeList extends React.Component {
  constructor(props) {
    super(props)
    const prizeMap = new Map([
      [1, 2],
      [3, 3],
      [7, 4],
      [14, 6],
      [29, 10]
    ])
    this.state = {
      prizeArray: Array(50).fill(1).map((num, index) => prizeMap.get(index) ? prizeMap.get(index) : num)
    }
  }
  render() {
    return (
      <div className="lucky-code__list">
        {this.state.prizeArray.map((num, index) =>
          <div className="lucky-code__item" key={index}>
            {
              num > 1 ?
                <div className="lucky-code__ticket-num-wrapper">
                  <div class="lucky-code__img lucky-code__img--multiple"/>
                  <span className="lucky-code__ticket-num">{num}张</span>
                </div> :
                <div class="lucky-code__img"/>
            }
            <div className="lucky-code__line">
              <div className="lucky-code__circle"></div>
            </div>
            <div className="lucky-code__num">
              {index + 1}人
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LuckyCodeList;
