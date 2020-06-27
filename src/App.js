import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Form from './components/Form'
import {API_KEY, API_ID} from './api'
import Recipes from './components/Recipes'

class App extends Component {
  state = {
    recipes: [],
    hasLoaded: false
  }
  getRecipe = async (e) => {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    const req = await fetch( `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&SameSite=None`)
    const data = await req.json()
    this.setState({recipes: data.hits, hasLoaded: true})
    console.log(this.state.recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="App-title"><Link to ="/">Recipe Search</Link></h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes data={this.state.recipes} loaded={this.state.hasLoaded}/>
      </div>
    );
  }
}

export default App;