var React = require('react');
var Timing = require('../Timing.js');

var DELAY = 50;

/**
 *
 */
module.exports = React.createClass({
  propTypes: {
    endTime: React.PropTypes.number
  },

  getInitialState: function () {
    return {remaining: this.getRemainingTime()};
  },

  componentDidMount: function () {
    this.timerInterval = setInterval(this.tick, DELAY);
  },

  componentWillUnmount: function () {
    clearInterval(this.timerInterval);
  },

  getRemainingTime: function () {
    return this.props.endTime - Timing.getServerTime();
  },

  tick: function () {
    this.setState({remaining: this.getRemainingTime()});
  },

  render: function () {
    var seconds = this.state.remaining / 1000;
    return (
      <div class="timer">
        {seconds.toFixed(1)}
      </div>
    );
  }
});