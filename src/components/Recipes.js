import React from 'react'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

// initializing AOS for animations
Aos.init();

// mapping over api payload to produce search results
const Recipes = ({data, loaded}) =>(
    <div className="container">
        <div className="row">
            {loaded && data.length > 0 ? 
            data.map((recipe, i) => (
                <div data-aos="fade-up" data-aos-duration={1000}  className="col-lg-4" key={i} style={{marginBottom: "2rem"}}> 
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
                            {/* since there's no id in payload so link is specified as the no of calories + the index of the array to produce unique results for each search */}
                            <Link to={{
                                pathname: `/recipe/${recipe.recipe.calories.toFixed() + i}`,
                                state: recipe.recipe 
                            }}>
                                View Recipe <span role="img" aria-label="emoji">😍</span>
                            </Link>
                        </button>
                    </div>
                </div>
            ))
            : loaded
                ? <div data-aos="fade-right" data-aos-duration={1000} className="message">No recipes Found <span role="img" aria-label="emoji">😭😭</span></div>
                : <div data-aos="fade-right" data-aos-duration={1000} className="message">Hello, <br/> What can I get you? <span role="img" aria-label="emoji">🍔</span></div>
            }
        </div>
    </div>  
)

export default Recipes