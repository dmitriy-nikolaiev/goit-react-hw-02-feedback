import { Component } from 'react';

import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>
      </div>
    );
  }
}

export default App;
