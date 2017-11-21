import React, { Component } from 'react';
import SearchNav from './search_nav';

class Lyric extends Component {

  onSearchSubmit(term){
    // Fetch API using the entered term
    console.log(term);
  }

  render(){
    return(
      <SearchNav onSearchSubmit={this.onSearchSubmit} />
    );
  }
}

export default Lyric;