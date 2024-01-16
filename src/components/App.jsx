import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = votes;
  const options = Object.keys(votes);

  const onLeaveFeedback = keyName => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [keyName]: prevVotes[keyName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedBack = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const good = votes.good;
    return Math.round((good * 100) / totalFeedBack);
  };

  return (
    <div className={css.box}>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      </div>
      <div>
        <Section title="Statistics">
          {totalFeedBack !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedBack}
              positiveFeedBackPercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
};
