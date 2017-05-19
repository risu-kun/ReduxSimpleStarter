import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {        
        super(props)
        
        this.state = { term: '' }  // initialize the form input with an empty string.
        
        this.onInputChange = this.onInputChange.bind(this)  // override method with a version where the context is bound down
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    onFormSubmit(event) {
        event.preventDefault(); // don't submit the form!
        
        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' })  // reset search box
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value }) // not quite like ng-model; you have to manually re-set the state
    }
    
    render() {
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input placeholder="Get a five-day forecast in your favourite US cities"
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar) // null = no state here