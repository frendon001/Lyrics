import React, { Component } from 'react';
import SearchNav from './search_nav';
import TrackInfo from '../components/track_info';
import YTSearch from 'youtube-api-search';
import VideoDisplay from '../components/video_display';
import VideoList from '../components/video_list';
import TrackLyrics from '../components/track_lyrics';
import { KEYS } from '../config';
import { fetchTrackAndLyrics } from '../actions';
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
    this.props.fetchTrackAndLyrics(id);
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
      <div className="song-details">
        <SearchNav history={this.props.history} />
        <div className="track-display">
          <TrackInfo track={this.props.track} />
          <TrackLyrics lyrics={this.props.lyrics} />
          <div className="track-lyrics">You can also find the full lyrics and annotations from <a href={this.props.track.url} target="_blank">Genius</a>.</div>
        </div>
        <div className="video-detail">
          <VideoDisplay video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    track: state.fetch.track,
    lyrics: state.fetch.lyrics
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchTrackAndLyrics
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongDetails);