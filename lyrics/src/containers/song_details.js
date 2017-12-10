import React, { Component } from 'react';
import SearchNav from './search_nav';
import { fetchTrack, fetchLyrics } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SongDetails extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchTrack(id);
    this.props.fetchLyrics(id);
  }

  render(){
    if (!this.props.track || !this.props.lyrics) {
      return <div>Loading...</div>
    }
    let songLyrics = getLyrics(this.props.lyrics.lyrics_body);
    console.log(songLyrics[22])
    return(
      <div>
        <SearchNav history={this.props.history} />
        <p>{this.props.track.track_name} by {this.props.track.artist_name}</p>
        <pre >{this.props.lyrics.lyrics_body}</pre>
      </div>
    )
  }
}

function getLyrics(lyrics){
  let songLyrics = lyrics.split('\n')
  return songLyrics
}

function mapStateToProps(state){
  return{
    track: state.fetch.track,
    lyrics: state.fetch.lyrics
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchTrack,
    fetchLyrics
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongDetails);