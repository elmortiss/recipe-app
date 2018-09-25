import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Slider from './components/Slider';
import Form from "./components/Form";
import Recipes from "./components/Recipes";


const API_KEY = "c99d8bff072e2698bb725d875ea1a47e";

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
            <Header />
        </header>
        <div className="slider">
          <Slider />
        </div>
        <div className="wrappper">
          <div className="row">
            <div className="col-md-6 title-container">
              <h2>We make finding fantastic recipes easy with searching by ingredients</h2>
            </div>
            <div className="col-md-6 form-container">
              <h2>Looking for a chicken dish? Beef? 
                Narrow your search by main ingredient to find recipes and meal ideas fast</h2>
              <Form getRecipe={this.getRecipe} /></div>
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