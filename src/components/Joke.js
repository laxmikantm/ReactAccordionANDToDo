import React from 'react';
import '../App.css';
import buttonComponent from './buttonComponent';

function Joke(props) {
  const Button = () => {
    return <button> Wrap Button</button>;
  };
  const withUsefulButton = Element => props => <Button {...props} color='red' />;

  const WrappedButton = withUsefulButton(Button);
  return (
    <div>
      {/* 
      ///Option -1 using ternariry operator
      {props.question?
      <div><h3>Question:</h3><p>{props.question}</p></div>:null} */}
      {props.question && (
        <h3>
          Question:<p>{props.question}</p>
        </h3>
      )}
      <h3>Answer:</h3>
      <p>{props.answer}</p>
      <WrappedButton />
      <hr />
      <br />
    </div>
  );
}

export default Joke;
