import { useState } from 'react'

function CountDown() {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval

  const startTimer = () => {
    const year = new Date(`2023.01.01 00:00:00`)

    interval = setInterval(() => {
      const curentDate = new Date()
      const difference = year - curentDate

      const day = Math.floor(difference / 1000 / 60 / 60 / 24)
      const hour = Math.floor(difference / 1000 / 60 / 60) % 24
      const minute = Math.floor(difference / 1000 / 60) % 60
      const second = Math.floor(difference / 1000) % 60

      if (difference < 0) {
        clearInterval(interval)
      } else {
        setDays(day)
        setHours(hour)
        setMinutes(minute)
        setSeconds(second)
      }
    })
  }

  startTimer()

  return (
    <>
      <div className="main-title">New Year Countdown</div>
      <div className="countdown">
        <div className="countdown__block">
          <div className="countdown__number-day number">{days}</div>
          <div className="countdown__number-title">
            {days < 2 ? 'day' : 'days'}
          </div>
        </div>
        <div className="countdown__block">
          <div className="countdown__number-hour number">
            {hours <= 9 ? '0' + hours : hours}
          </div>
          <div className="countdown__number-title">
            {hours < 2 ? 'hour' : 'hours'}
          </div>
        </div>
        <div className="countdown__block">
          <div className="countdown__number-minute number">
            {minutes <= 9 ? '0' + minutes : minutes}
          </div>
          <div className="countdown__number-title">
            {minutes < 2 ? 'minute' : 'minutes'}
          </div>
        </div>
        <div className="countdown__block">
          <div className="countdown__number-second number">
            {seconds <= 9 ? '0' + seconds : seconds}
          </div>
          <div className="countdown__number-title">
            {seconds < 2 ? 'second' : 'seconds'}
          </div>
        </div>
      </div>
    </>
  )
}

export default CountDown
