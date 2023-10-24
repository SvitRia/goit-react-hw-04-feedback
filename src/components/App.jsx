import { Component } from 'react';
import { Feedbackoptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeavFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  
  onTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (
      good + neutral + bad
    )
  }
  
  onCheckPositivFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
   
    return (
      Math.round(good / total * 100));
     
  }
 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.onTotalFeedback();
    const persent = this.onCheckPositivFeedback();

 
      return (
        <div>
          <Feedbackoptions  options={Object.keys(this.state)} onFeedback={this.onLeavFeedback} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={persent}
          />
        </div>
      );
    };
  };

