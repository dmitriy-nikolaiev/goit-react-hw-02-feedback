import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((option) => {
          return (
            <button key={'id-' + option} onClick={onLeaveFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
