import React, { useState, useEffect } from 'react'
const API_URL= 'https://www.themealdb.com/api/json/v1/1/random.php';

import Meal from './Meal';

const RandomMeal =()=> {
    const [meal, setMeal] = useState(undefined)

    useEffect(() =>{
    /*useEffect(async()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            setMeal(res.meals[0]);
        });

    },[]);
       const RandomMeal = await resizeBy.json();

        setMeal (randomMeal);

        
    },[])*/
        async function getMeal() {
            const res =await fetch (API_URL);
            const data = await res.json();
            setMeal(data.meals[0]);
        }
    },[]);
    if(!meal) return null;

    

  
    return (
        <section className="container">
            <h2> Featured Meal</h2>
            <Meal meal={meal} />
        
        </section>
    );
        
       
      
  
};
export default RandomMeal;