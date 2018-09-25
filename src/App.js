import React, { Component } from 'react';
import './App.css';
import logo from './components/img/logo.png';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from "./components/Form";
import Recipes from "./components/Recipes";


const API_KEY = "f22ce42bbcafca9b1e5dc59852910c69";

class App extends Component {
  state = {
    page: 1,
    recipes: [],
    recipeName: ''
  }
 
  handleFormSubmit = (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    this.setState({
      ...this.state,
      page: 1,
      recipeName: recipeName,
    }, this.getRecipe)
  }
  getRecipe = async () => {
    const page = this.state.page;
    const recipeName = this.state.recipeName;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${this.state.recipeName}&count=10&page=${page}`);
    
    const data = await api_call.json();
    this.setState({
      ...this.state,
      recipes: data.recipes,
      recipeName: recipeName
    });
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
  handleNextClick = () => {
    this.setState({
      ...this.state,
      page: this.state.page +1
    })
    this.getRecipe()
  }

  handlePrevClick = () => {
    this.setState({
      ...this.state,
      page: this.state.page -1
    })
    this.getRecipe()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="flex-container">
            <a href="/"><img src={logo} alt={logo}/></a>
            <Navbar />
          </div>
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
                <Form getRecipe={this.handleFormSubmit} />
                </div>
          </div>
        </div>
        
        <Recipes recipes={this.state.recipes} />
        <button className="form__button" onClick={this.handlePrevClick}>Prev</button>
        <button className="form__button" onClick={this.handleNextClick}>Next</button>
        <footer className="page-footer font-small grey pt-4">       
    <div className="footer-copyright text-center py-3">© 2018 Copyright</div>
  </footer>
      </div>
    );
  }
}

export default App;