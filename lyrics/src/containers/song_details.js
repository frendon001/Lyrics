import React, { Component } from 'react';
import SearchNav from './search_nav';
import TrackInfo from '../components/track_info';
import YTSearch from 'youtube-api-search';
import VideoDisplay from '../components/video_display';
import VideoList from '../components/video_list';
import TrackLyrics from '../components/track_lyrics';
import { KEYS } from '../config';
import { fetchTrack, fetchLyrics } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SongDetails extends Component {
  constructor(props){
    super()

    this.state = {
      videos: [],
      selectedVideo: null,
      toggleLyrics: false
    }

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(){
    if (!this.state.toggleLyrics && !this.props.lyrics){
      this.setState({
        toggleLyrics: true
      });
      this.props.fetchLyrics(this.props.track.url)
    }
    else if (!this.state.toggleLyrics){
      this.setState({
        toggleLyrics: true
      });
    } else {
      this.setState({
        toggleLyrics: false
      });
    }
  }

  render(){
    if (!this.props.track) {
      return <div>Loading...</div>
    }

    let displayLyrics = this.state.toggleLyrics ? <TrackLyrics lyrics={this.props.lyrics} /> : <div></div>

    return(
      <div>
        <SearchNav history={this.props.history} />
        <div className="track-display">
          <TrackInfo track={this.props.track} />
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleClick}>Lyrics</button> 
          {displayLyrics}
          <div className="track-lyrics">You can also find the full lyrics from <a href={this.props.track.url} target="_blank">Genius</a>.</div>
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
    fetchTrack,
    fetchLyrics
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongDetails);