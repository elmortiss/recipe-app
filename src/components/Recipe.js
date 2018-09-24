import React from 'react';


class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = () => {
        
    }
    render() {
        console.log(this.props)
        return (
            <div>Recipe Component!</div>
        );
    }
};


export default Recipe;