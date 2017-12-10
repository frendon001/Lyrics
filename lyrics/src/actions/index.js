import axios from 'axios';
import { FETCH_VIDEOS, FETCH_TRACKS, FETCH_TRACK, FETCH_LYRICS } from './types';
import YTSearch from 'youtube-api-search';
import { KEYS } from '../config';
const ROOT_URL = 'http://api.musixmatch.com/ws/1.1/';

export function fetchVideos(term){
  YTSearch({key: KEYS.google, term}, (videos) => {
    return{
      type: FETCH_VIDEOS,
      payload: videos
    }
  });
}

export function fetchTracks(term, history){
  const url = `${ROOT_URL}track.search?apikey=${KEYS.musixmatch}&`;
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
  const url = `${ROOT_URL}track.get?apikey=${KEYS.musixmatch}&track_id=${id}`;
  const request = axios.get(url)

  return{
    type: FETCH_TRACK,
    payload: request
  }
}

export function fetchLyrics(id){
  const url = `${ROOT_URL}track.lyrics.get?apikey=${KEYS.musixmatch}&track_id=${id}`;
  const request = axios.get(url)

  return{
    type: FETCH_LYRICS,
    payload: request
  }
}
