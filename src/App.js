import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import {API_KEY, API_ID} from './api'





class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    console.log(recipeName)

    const URL = await fetch( `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&SameSite=None`)
    const data = await URL.json()
    this.setState({recipes: data.hits})
    console.log(this.state.recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        { this.state.recipes.map(recipe => (
          <div key={recipe.recipe.url}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
          <p >{recipe.recipe.label}</p>
          </div>
        )) }
      </div>
    );
  }
}

export default App;