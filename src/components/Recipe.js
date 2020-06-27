import React from 'react'
import {Link} from 'react-router-dom'


const Recipe = props => {
    const recipe = props.location.state
    // const counter = 0
    return (
    <div className="container">
                    <header className="App-header">
            <h1 id="App-title"><Link to ="/">Recipe Search</Link></h1>
            </header>
        <div className="active-recipe">
            <div className="col-lg-8 col-md-10 col-sm-12">
            <h3 className="active-recipe__title">{recipe.label}</h3>
            <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>
            <h4 className="active-recipe__publisher">Calories: <span>{recipe.calories.toFixed()}</span></h4>
            <p className="active-recipe__website">Details: 
                <p><a href={recipe.url}>{recipe.url > 30 ? `${recipe.url.substring(0, 30)}...` : recipe.url}</a></p>
            </p>
            <div className="active-recipe__ingredients">
            Ingredients: 
            {recipe.ingredientLines.map((ingredient, i) => <p key={i}>{ingredient}</p>)}
            </div>
            <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
        </div>
        </div>
    </div>
    )
}

export default Recipe