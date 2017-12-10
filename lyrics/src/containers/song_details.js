import React, { Component } from 'react';
import SearchNav from './search_nav';
import TrackInfo from '../components/track_info';
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
    return(
      <div>
        <SearchNav history={this.props.history} />
        <TrackInfo lyrics={songLyrics} track={this.props.track} />
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