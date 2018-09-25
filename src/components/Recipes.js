import React from 'react';

import { Link } from "react-router-dom";


const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipes.map((recipe) => {
      return (
        <div key={recipe.title} className="col-md-4" style={{ marginTop:"2rem" }}>
          <div className="recipes__box">
            <img 
              className="recipes_img img-fluid " 
              src={recipe.image_url} 
              alt={recipe.title}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  { recipe.publisher }
                </span></p>
                <p className="recipes__subtitle">Source:  
               <span>&nbsp;<a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
              </div>
              <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
                }}>View Recipe</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Recipes;