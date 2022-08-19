import React from 'react';

import {RandomMeal, Meal} from './components';





function App() {
  return (
    <div className="App">
      <input type="text"/>
        <RandomMeal/>
       
        <Meal meal={{}}/>
        <Meal meal={{}}/> 
        
    </div>
  );
}

export default App;
