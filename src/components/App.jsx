import { useState } from 'react';
import { Feedbackoptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddFeedback = (key) => {
    switch (key) {
      case 'good': 
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad': 
        setBad(prevState => prevState + 1)
        break;
      default:
        return;
    }
  };
 
  const TotalFeedback = 
      good  + neutral + bad;
   
  const CheckPositivFeedback = 
      Math.round(good / TotalFeedback * 100);

  return (
    <div>
      <Feedbackoptions options={['good', 'neutral', 'bad']} onFeedback={onAddFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={TotalFeedback}
        percent={CheckPositivFeedback}
      />
    </div>
  );
}