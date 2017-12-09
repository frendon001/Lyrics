import React, { Component } from 'react';
import Welcome from '../components/welcome';
import SearchResults from '../components/search_results';
import SearchNav from './search_nav';
import { connect } from 'react-redux';

// TODO: Handle use-case where no results are returned

class Lyric extends Component {

  render(){
    let display = !this.props.tracks ? <Welcome /> : <SearchResults tracks={this.props.tracks} />
    return(
      <div>
        <SearchNav />
        {display}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    tracks: state.fetch.tracks
  }
}

export default connect(mapStateToProps)(Lyric);