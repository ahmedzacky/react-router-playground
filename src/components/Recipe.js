import React from 'react'
import {Link} from 'react-router-dom'


const Recipe = props => {
    const recipe = props.location.state
    // const counter = 0
    return (
    <div className="container">
        <div className="active-recipe">
            <div className="col-lg-8 col-md-10 col-sm-12">
            {console.log(recipe)}
            <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>
            <h3 className="active-recipe__title">{recipe.label}</h3>
            <h4 className="active-recipe__publisher">Calories: <span>{recipe.calories.toFixed()}</span></h4>
            <p className="active-recipe__website">Details: 
                <span><a href={recipe.url}>{recipe.url > 30 ? `${recipe.url.substring(0, 30)}...` : recipe.url}</a></span>
            </p>
            <div className="active-recipe__url">{
                recipe.ingredientLines.map((ingredient, i) => <p key={i}>{ingredient}</p>)}
            </div>
            <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
        </div>
        </div>
    </div>
    )
}

export default Recipe