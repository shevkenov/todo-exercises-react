import React, { useState } from 'react';

import "./Home.css";
import data from '../../store/data.json';
import Item from '../Item/Item';

const Home = () => {
  const [exercises, setExercises] = useState(data.exercises);

  const removeItem = (id) => setExercises(prevValue => prevValue.filter(exercise => exercise.id !== id));
  const toggle = (id) => setExercises(prevValue => prevValue.map(exercise => {
    if(exercise.id === id){
      exercise = {...exercise, completed: !exercise.completed};
    };
    
    return exercise
  }))

  return (
    <div className='home'>
      {
        exercises && exercises.map(item => <Item key={item.id} item={item} toggle={toggle} remove={removeItem}/>)
      }
    </div>
  );
};

export default Home;
