import React, { Component } from 'react';
import SearchNav from './search_nav';
import TrackInfo from '../components/track_info';
import YTSearch from 'youtube-api-search';
import VideoDisplay from '../components/video_display';
import { KEYS } from '../config';
import { fetchTrack } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SongDetails extends Component {
  constructor(props){
    super()

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount(){
    const {id, track, artist} = this.props.match.params;
    const videoTerm = artist + " " + track;
    this.props.fetchTrack(id);
    YTSearch({key: KEYS.google, term: videoTerm}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    if (!this.props.track) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <SearchNav history={this.props.history} />
        <TrackInfo track={this.props.track} />
        <VideoDisplay video={this.state.selectedVideo} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    track: state.fetch.track
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchTrack
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongDetails);