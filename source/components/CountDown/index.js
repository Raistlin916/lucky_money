import React from "@react"
import './index.scss'

class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clock: [null, null, null]
    }
    this.updateClock = this.updateClock.bind(this)
  }
  updateClock() {
    const now = Date.now()
    const targetDate = new Date(this.props.targetDate).getTime()
    const diff = ~~((targetDate - now) / 1000)
    const add0 = s => (s + '').replace(/^\d$/, m => `0${m}`)
    this.setState({
      clock: [
        parseInt(diff / 3600),
        add0(parseInt(diff / 60) % 60),
        add0(diff % 60)
      ]
    })
  }
  componentDidMount() {
    this.tid = setInterval(this.updateClock, 1000)
    this.updateClock()
  }
  componentWillMount() {
    clearInterval(this.tid)
  }
  render() {
    return (
      <div className="count-down__wrapper block">
        <div className="countdown__title">
          开奖倒计时
        </div>
        <div className="countdown__desc">
          开奖时间为：{this.props.targetDate}
        </div>
        <div className="countdown__clock">
          <div className="countdown__clock-item">{this.state.clock[0]}</div>
          <div className="countdown__clock-item">:</div>
          <div className="countdown__clock-item">{this.state.clock[1]}</div>
          <div className="countdown__clock-item">:</div>
          <div className="countdown__clock-item">{this.state.clock[2]}</div>
        </div>
      </div>
    )
  }
}

export default CountDown
