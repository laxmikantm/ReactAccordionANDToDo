import React from 'react';
import qa from './qa';
import List from './List';
import './Accordion.css';

class Accordion extends React.Component {

state = {
  currentIndex : -1
}

handleChange=(i) => {
  console.log(true);
  this.setState(
    {currentIndex:i}
  )
}



  render(){
    const {handleChange} = this;
    const {currentIndex} = this.state;

    return(
      <div>
        {
          qa.map((e,i) => {
            return(
              <div className="accordion">
                <List question={e.question} answer ={e.answer} handleChange={handleChange} key={i} index={i} currentIndex={currentIndex} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Accordion;