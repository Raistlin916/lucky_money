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
                  <image
                    class="lucky-code__img"
                    src="https://i.loli.net/2019/02/05/5c5995d408e6d.png"
                    mode="aspectFit"
                  />
                  <span className="lucky-code__ticket-num">{num}张</span>
                </div> :
                <image
                  class="lucky-code__img"
                  src="https://i.loli.net/2019/02/05/5c5986d7b825e.png"
                  mode="aspectFit"
                />
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
