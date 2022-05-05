import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTicking: false,
      seconds: 0,
      currentIntervalId: null
    }
    this.handleTicking = this.handleTicking.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleTicking() {
    if(this.state.isTicking) {
      this.setState({
        isTicking: false
    });
    clearInterval(this.state.currentIntervalId);
    } else {
      this.handleInterval();
    }
  }

  handleReset() {
    if (this.state.isTicking) {
      return;
    }
    this.setState({
      seconds: 0
    });
  }
  handleInterval() {
    this.setState({
      currentIntervalId: setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000),
      isTicking: true
    });
  }

  render() {
    const playPause = this.state.isTicking ?
    `play`
    : `pause`
    return (
      <div className="container">
        <div className="row stopwatch-layout">
          <div onClick={this.handleReset} className="row stopwatch-body">
            <div> {this.state.seconds} </div>
          </div>
          <div className="play-pause-buttons">
            <i onClick={this.handleTicking} className={`fa-solid fa-${playPause}`}></i>
          </div>
        </div>
      </div>
    );
  }
}
