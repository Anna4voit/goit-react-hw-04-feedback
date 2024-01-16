import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const totalFeedBack = this.countTotalFeedback();
    return Math.round((good * 100) / totalFeedBack);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const positiveFeedBackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.box}>
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
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
                positiveFeedBackPercentage={positiveFeedBackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
