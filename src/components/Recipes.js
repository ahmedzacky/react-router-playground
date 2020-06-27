import React from 'react'
import {Link} from 'react-router-dom'

const Recipes = ({data, loaded}) => (
    <div className="container">
        <div className="row">
            {loaded && data.length > 0 ? 
            data.map((recipe, i) => (
                <div className="col-lg-4" key={i} style={{marginBottom: "2rem"}}> 
                    <div className="recipes__box" >
                        <img 
                            className="recipe__box-img" 
                            src={recipe.recipe.image} 
                            alt={recipe.recipe.label}/>
                        <div className="recipe__text">
                            <h5 className="recipes__title">
                            {recipe.recipe.label.length < 20
                                ? recipe.recipe.label
                                : `${recipe.recipe.label.substring(0, 25)}...`}
                            </h5>
                            <p className="recipes__subtitle">Calories: 
                                <span>{recipe.recipe.calories.toFixed()}</span>
                            </p>
                        </div>
                        <button className="recipe_button">
                            <Link to={{
                                pathname: `/recipe/${recipe.recipe.calories.toFixed()}`,
                                state: recipe.recipe }} >
                                View Recipe
                            </Link>
                        </button>
                    </div>
                </div>
            ))
            : loaded
                ? <div className="message">No Data Found :(</div>
                : <div className="message">Hello, please search</div>
            }
        </div>
    </div>

)
export default Recipes