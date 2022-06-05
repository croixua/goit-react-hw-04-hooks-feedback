import { Component } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const value = e.currentTarget.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return +((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            onBtnClick={this.onBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {this.state.bad === 0 &&
          this.state.good === 0 &&
          this.state.neutral === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
