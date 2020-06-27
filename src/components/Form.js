import React from 'react'


const Form = ({getRecipe}) => (
    <form onSubmit={getRecipe} >
        <input className="form__input" type="text" name="recipeName" placeholder="search a recipe"/>
        <button className="form__button">Go !</button>
    </form>
)

export default Form