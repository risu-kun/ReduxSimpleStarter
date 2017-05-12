import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {        
        super(props)
        
        this.state = { term: '' }  // initialize the form input with an empty string.
        
        this.onInputChange = this.onInputChange.bind(this);  // override method with a version where the context is bound down
    }
    
    onFormSubmit(event) {
        event.preventDefault(); // don't submit the form!
        
        //TODO: go fetch weather data
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value }) // not quite like ng-model; you have to manually re-set the state
    }
    
    render() {
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input placeholder="Get a five-day forecast in your favourite cities"
                        className="form-control"
                        value={ this.state.term }   // this is a controlled component. this links the input to term, kind of like ng-model? 
                        onChange={ this.onInputChange } />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}