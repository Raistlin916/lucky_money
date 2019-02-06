import React from "@react";
import './index.scss';

class AdList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [
        { url: 'https://i.loli.net/2019/02/06/5c5af5f812db4.jpg' },
        { url: 'https://i.loli.net/2019/02/06/5c5af5f814ab5.jpg' }
      ]
    }
  }
  render() {
    return (
      <div className="ad-list block">
        {
          this.state.pages.map(item => {
            return (
              <div
                class="ad-list__item"
                key={item.url}
              >
                <image
                  class="ad-list__img"
                  src={item.url}
                  mode="widthFix"
                />
                <div class="ad-list__btn">立即登记</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default AdList
