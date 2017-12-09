import React, { Component } from 'react';
import Welcome from '../components/welcome';
import SearchResults from '../components/search_results';
import { connect } from 'react-redux';

class Lyric extends Component {

  render(){
    let display = !this.props.tracks ? <Welcome /> : <SearchResults tracks={this.props.tracks} />
    return(
      <div>
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