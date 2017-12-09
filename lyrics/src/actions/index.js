import axios from 'axios';
import { FETCH_VIDEOS, FETCH_TRACKS } from './types';
import YTSearch from 'youtube-api-search';
import { KEYS } from '../config';

export function fetchVideos(term){
  YTSearch({key: KEYS.google, term}, (videos) => {
    return{
      type: FETCH_VIDEOS,
      payload: videos
    }
  });
}

export function fetchTracks(term, history){
  const url = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${KEYS.musixmatch}&`;
  const request = axios.get(`${url}q_track_artist=${term}&page_size=10&page=1&s_track_rating=desc`);

  if(history){
    history.push('/')
  }
  
  return{
    type: FETCH_TRACKS,
    payload: request
  }
}

export function fetchTrack(id){

}

export function fetchLyrics(id){
  
}
