import React, { Component } from 'react';
import SearchNav from './search_nav';
import Welcome from '../components/welcome';
import { connect } from 'react-redux';

class Lyric extends Component {

  render(){
    let display = !this.props.tracks ? <Welcome /> : <div>Something Should display Here</div>
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