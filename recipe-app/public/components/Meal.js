import React from "react";
const Meal =({
    meal:{
        strMealThumb,
        strMeal,
        strInstructions,
        strCategory,
        strArea
    },
}) => (
    <div className="meal">
        <div className="meal-img">
            <img src={strMealThumb} alt={strMeal}/>            
            </div>
            <div className="meal-details">
                <h3 className="meal-title">{strMeal}</h3>
                <p className="meal-instruction">
                    {strInstructions &&strInstructions.substring(0,200)+"..."}</p>
                <ul className="meal-info">
                    <li>
                        Category:
                        <strong>{strCategory}</strong>
                    </li>
                    <li>
                        Area:
                        <strong>{strArea}</strong>
                    </li>
                </ul>
                <button className="btn">
                    VieW RecipE <i className="fas fa-arrow-alt-circle-right"></i>

                </button>
            </div>
        </div>
)
export default Meal;