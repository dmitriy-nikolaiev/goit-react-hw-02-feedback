import { Component } from 'react';
import PropTypes from 'prop-types';

import { Notification } from '../../components/Notification';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return good || neutral || bad ? (
      <div>
        <p className="stat-data">Good: {good}</p>
        <p className="stat-data">Neutral: {neutral}</p>
        <p className="stat-data">Bad: {bad}</p>
        <p className="stat-data">Total: {total}</p>
        <p className="stat-data">Positive feedback: {positivePercentage}%</p>
      </div>
    ) : (
      <Notification message="No feedback given" />
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
