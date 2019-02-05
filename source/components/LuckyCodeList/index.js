import React from "@react";
import './index.scss';

class LuckyCodeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      array50: Array(50).fill(1)
    }
  }
  render() {
    return (
      <div className="lucky-code__list">
        {this.state.array50.map((item, index) =>
          <div className="lucky-code__item" key={index}>
            <image
              class="lucky-code__img"
              src="https://i.loli.net/2019/02/05/5c5986d7b825e.png"
              mode="aspectFit"
            />
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
