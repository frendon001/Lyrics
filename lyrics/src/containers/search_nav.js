import React, { Component } from 'react';
// import { connect } from 'react-redux';

class SearchNav extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };
    }

    render(){
        return(
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <div className="navbar-brand">Lyrics App</div>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form className="form-inline justify-content-end">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search Songs"/>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default SearchNav;