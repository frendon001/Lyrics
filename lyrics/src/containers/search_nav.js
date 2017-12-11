import React, { Component } from 'react';
import { fetchTracks } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchNav extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault();
        // Fetch API using the entered term
        this.props.fetchTracks(this.state.term, this.props.history);
        this.setState({term: ''});
    }

    render(){
        return(
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-brand">Lyrics App</div>
    
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form className="form-inline justify-content-end" onSubmit={this.onFormSubmit}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search Songs" value={this.state.term} onChange={this.onInputChange}/>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      fetchTracks
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchNav);