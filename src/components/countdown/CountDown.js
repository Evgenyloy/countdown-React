import { Component } from 'react'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }
  }

  countDownStart = () => {
    const curentDate = new Date()
    const year = new Date(`2024.01.01 00:00:00`)
    const difference = year - curentDate

    const day = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hour = Math.floor(difference / 1000 / 60 / 60) % 24
    const minute = Math.floor(difference / 1000 / 60) % 60
    const second = Math.floor(difference / 1000) % 60

    this.setState({ days: day })
    this.setState({ hours: hour })
    this.setState({ minutes: minute })
    this.setState({ seconds: second })
  }

  componentDidMount() {
    this.countDownStart()
    this.tmerId = setInterval(this.countDown)
  }

  componentWillUnmount() {
    clearInterval(this.tmerId)
  }
  render() {
    const { days, hours, minutes, seconds } = this.state

    return (
      <>
        <div className="main-title">New Year Countdown</div>
        <div className="countdown">
          <div className="countdown__block">
            <div className="countdown__number-day number">{days}</div>
            <div className="countdown__number-title">days</div>
          </div>
          <div className="countdown__block">
            <div className="countdown__number-hour number">
              {hours <= 9 ? '0' + hours : hours}
            </div>
            <div className="countdown__number-title">hours</div>
          </div>
          <div className="countdown__block">
            <div className="countdown__number-minute number">
              {minutes <= 9 ? '0' + minutes : minutes}
            </div>
            <div className="countdown__number-title">minutes</div>
          </div>
          <div className="countdown__block">
            <div className="countdown__number-second number">
              {seconds <= 9 ? '0' + seconds : seconds}
            </div>
            <div className="countdown__number-title">seconds</div>
          </div>
        </div>
      </>
    )
  }
}

export default CountDown
