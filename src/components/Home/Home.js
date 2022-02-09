import React, { useState } from 'react';

import "./Home.css";
import Item from '../Item/Item';
import Header from '../Header/Header';
import { useExerciseContext } from '../../context/ExercisesContext';

const Home = () => {
  const {exercises, setExercises} = useExerciseContext();
  const [current, setCurrent] = useState('all');

  const removeItem = (id) => setExercises(prevValue => prevValue.filter(exercise => exercise.id !== id));
  const toggle = (id) => setExercises(prevValue => prevValue.map(exercise => {
    if(exercise.id === id){
      exercise = {...exercise, completed: !exercise.completed};
    };
    
    return exercise
  }));

  let jsx;

  if(current === 'completed'){
    jsx = exercises.filter(arr => arr.completed).map(item => <Item key={item.id} item={item} toggle={toggle} remove={removeItem}/>)
  }else if(current === 'pending'){
    jsx = exercises.filter(arr => !arr.completed).map(item => <Item key={item.id} item={item} toggle={toggle} remove={removeItem}/>)
  }else{
    jsx = exercises.map(item => <Item key={item.id} item={item} toggle={toggle} remove={removeItem}/>)
  }

  return (
    <div className='home'>
      <Header type={current} filter={setCurrent}/>
      {
        exercises && jsx
      }
    </div>
  );
};

export default Home;
