import { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback-container">
        {options.map((option) => {
          return (
            <button
              key={'id-' + option}
              onClick={onLeaveFeedback(option)}
              className="feedback-button"
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
