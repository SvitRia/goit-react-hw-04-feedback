import { Button, ButtonList } from './FeedbackOptions.styled';

export const Feedbackoptions = ({ options, onFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ButtonList>
        {options.map((option, idx) => (
            <Button key={option[idx]}  
            name={option.name}
            onClick={() => onFeedback(option)}
          >
            {option}  
          </Button>
        ))}
        {/* <Button name="good" onClick = {(evt) => onFeedback(evt.target.name)}>Good</Button>
            <Button name="neutral" onClick = {(evt) => onFeedback(evt.target.name)}>Neutral</Button>
            <Button name="bad" onClick = {(evt) => onFeedback(evt.target.name)}>Bad</Button> */}
      </ButtonList>
    </div>
  );
};
