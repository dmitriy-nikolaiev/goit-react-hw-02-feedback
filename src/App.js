import { Component } from 'react';

import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getPositivePercentage = () => {
    return (
      Math.round(
        (this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)
      ) || 0
    );
  };

  feedbackActionHandler = (option) => () => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackActionHandler}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.good + this.state.neutral + this.state.bad}
            positivePercentage={this.getPositivePercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
