import { Component } from 'react';
import { Notification } from '../../components/Notification';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return good || neutral || bad ? (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    ) : (
      <Notification message="No feedback given"></Notification>
    );
  }
}
