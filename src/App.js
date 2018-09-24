import React, { Component } from 'react';
import './App.css';
import logo from './components/img/logo.png';
import Slider from './components/Slider';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "26e3fb7cbe0d134ee6c6a281d83529c3";

class App extends Component {
  
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=30`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="flex-container">
            <a href="/"><img className="logo" src={logo} /></a>
            <h1 className="App-title">Recipe Book</h1>
          </div>
        </header>
          <Slider />
        <div className="wrappper">
          <div className="row">
            <div className="col-md-6 title-container">
              <h2>We make finding fantastic recipes easy with searching by ingredients</h2>
            </div>
            <div className="col-md-6 form-container"><Form getRecipe={this.getRecipe} /></div>
          </div>
        </div>
        
        <Recipes recipes={this.state.recipes} />
        <footer class="page-footer font-small grey pt-4">       
    <div class="footer-copyright text-center py-3">© 2018 Copyright</div>
  </footer>
      </div>
    );
  }
}

export default App;