import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {API_KEY, API_ID} from './api'
import Recipes from './components/Recipes'


// a simple form that fetches data from api on submit
// reponse is submitted to Recipes
class App extends Component {
  state = {
    recipes: [],
	hasLoaded: false
}
	//for local use add https://cors-anywhere.herokuapp.com/ before api link
  getRecipe = async (e) => {
	e.preventDefault()
	this.setState({isLoading: true})
    const recipeName = e.target.elements.recipeName.value
    const req = await fetch( `https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&SameSite=None`)
    const data = await req.json()
    this.setState({recipes: data.hits, hasLoaded: true})
  }
  render() {
    return (
      	<div className="App">
        	<header className="App-header">
          		<h1 id="App-title"><Link to ="/">Recipe Search</Link></h1>
        	</header>
        	<form onSubmit={this.getRecipe} >
          		<input className="form__input" type="text" name="recipeName" placeholder="Search a recipe 🍕"/>
          		<button className="form__button">Go  <span role="img" aria-label="emoji">🚀</span></button>
        	</form>	
			<Recipes data={this.state.recipes} loaded={this.state.hasLoaded}/>
     	 </div>
    );
  }
}










// const App = () => {
// 	const [recipes, setRecipes] = useState([]);
// 	const [hasLoaded, setHasLoaded] = useState(false);

// 	const getRecipe = async(e) =>{
// 		e.preventDefault()
// 		const recipeName = e.target.elements.recipeName.value
// 		const req = await fetch( `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&SameSite=None`)
// 		const data = await req.json()
// 		setRecipes(data.hits)
// 		setHasLoaded(true)
// 	};

// 	return (
// 		<div className="App">
// 		  <header className="App-header">
// 				<h1 id="App-title"><Link to ="/">Recipe Search</Link></h1>
// 		  </header>
// 		  <form onSubmit={getRecipe} >
// 				<input className="form__input" type="text" name="recipeName" placeholder="search a recipe"/>
// 				<button className="form__button">Go !</button>
// 		  </form>	
// 		  <Recipes data={recipes} loaded={hasLoaded}/>
// 		</div>
//  	);
// }


export default App;