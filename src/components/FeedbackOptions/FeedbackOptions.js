import { Component } from 'react';

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
