import React from 'react'


const Form = ({getRecipe}) => (
    <form onSubmit={getRecipe} >
        <input type="text" name="recipeName"/>
        <button>Search</button>
    </form>
)

export default Form