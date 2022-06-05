import { useState } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = e => {
    const value = e.currentTarget.textContent.toLowerCase();

    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return +((good * 100) / countTotalFeedback()).toFixed(2);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          onBtnClick={onBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {bad === 0 && good === 0 && neutral === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
