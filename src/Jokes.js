import React from 'react'
import Joke from './components/Joke';
import jokesData from './components/jokesData';

function Jokes() {

  const jokeComponents = jokesData.map(i => {
    return (
      <Joke question={i.question} answer={i.answer} key={i.id} />
    )
  })

  return(
    <>
      {jokeComponents}
    </>
  )

}

export default Jokes