import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <button type="button" className={s.btn} onClick={this.props.onBtnClick}>
          Good
        </button>
        <button type="button" className={s.btn} onClick={this.props.onBtnClick}>
          Neutral
        </button>
        <button type="button" className={s.btn} onClick={this.props.onBtnClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
