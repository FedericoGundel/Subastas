import React, { Component } from "react";


class Countdown extends Component {
  state = {
    deadline: "Dec, 31, 2023",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => {this.getTimeUntil(this.state.deadline)
      console.log(this.state.deadline)}, 1000);
  }

  render() {
    return (
     
        <div className="countdown_wrapper">
          <div className="countdown_bottom d-flex flex-row justify-content-center row">
            <div className="counter_item p-0">
              <div className="countdown_time">
                
                <p>{this.state.days} Días y {this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
              </div>
            
            </div>
          </div>
        </div>
      
    );
  }
}

export default Countdown;
