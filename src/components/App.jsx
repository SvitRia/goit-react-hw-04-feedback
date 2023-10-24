import { useState,  } from 'react';
import { Feedbackoptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onaddFeedback = ((key) => {
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
       
    }
  });
 
  const TotalFeedback = 
      good  + neutral + bad
   ;
   
  const CheckPositivFeedback = 
      Math.round(good / TotalFeedback * 100);
 

  return (
    <div>
      <Feedbackoptions options={['good', 'neutral', 'bad']} onFeedback={onaddFeedback} />
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

//   onLeavFeedback = (option) => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };
  
//   onTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return (
//       good + neutral + bad
//     )
//   }
  
//   onCheckPositivFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
   
//     return (
//       Math.round(good / total * 100));
     
//   }
 

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.onTotalFeedback();
//     const persent = this.onCheckPositivFeedback();

 
//       return (
//         <div>
//           <Feedbackoptions  options={Object.keys(this.state)} onFeedback={this.onLeavFeedback} />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             percent={persent}
//           />
//         </div>
//       );
//     };
//   };

