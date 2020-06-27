import React from 'react'
import {Link} from 'react-router-dom'

// creating individual single recipe page
// mapping over api results and creating a page for each

const Recipe = props => {
    const recipe = props.location.state
    return (
    <div className="container">
        <header className="App-header">
            <h1 id="App-title"><Link to ="/">Recipe Search</Link></h1>
        </header>
        <div className="active-recipe">
            <div className="col-lg-8 col-md-10 col-sm-12">
                <h3 className="active-recipe__title">{recipe.label}</h3>
                <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>
                <h4 className="active-recipe__calories">Calories: <span>{recipe.calories.toFixed()}</span></h4>
                <div className="active-recipe__website">Details: 
                    <p><a href={recipe.url}>{recipe.url > 30 ? `${recipe.url.substring(0, 30)}...` : recipe.url}</a></p>
                </div>
                <div className="active-recipe__ingredients">
                    <div className="ingredients">Ingredients:</div>
                    {recipe.ingredientLines.map((ingredient, i) => <p key={i}>{ingredient}</p>)}
                </div>
                <button className="active-recipe__button"><Link to="/">I'm full, take me <span role="img" aria-label="emoji">🏡</span></Link></button>
            </div>
        </div>
    </div>
    )
}

export default Recipe