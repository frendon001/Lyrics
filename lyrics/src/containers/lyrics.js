import React, { Component } from 'react';
import SearchNav from './search_nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTracks } from '../actions';

class Lyric extends Component {
  constructor(props) {
    super(props);

  }

  onSearchSubmit(term){
    // Fetch API using the entered term
    console.log('Search Term: ', term);
    this.props.fetchTracks(term);
  }

  render(){
    return(
      <SearchNav onSearchSubmit={this.onSearchSubmit} />
    );
  }
}

function mapStateToProps(state){
  return{
    tracks: state.fetch.tracks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTracks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lyric);