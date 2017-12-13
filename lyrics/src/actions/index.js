import axios from 'axios';
import { FETCH_TRACKS, FETCH_TRACK } from './types';
const ROOT_URL = 'http://localhost:3030'

export function fetchTracks(term, history){
  const request = axios.get(`${ROOT_URL}/search`, {
    headers: { term: term }
  });

  if(history){
    history.push('/')
  }

  return{
    type: FETCH_TRACKS,
    payload: request
  }
}

export function fetchTrack(id){
  const request = axios.get(`${ROOT_URL}/song`, {
    headers: { songid: id }
  });

  return{
    type: FETCH_TRACK,
    payload: request
  }
}

export function fetchLyrics(url){
  const request = axios.get(`${ROOT_URL}/lyrics`, {
    headers: { songurl: url }
  });

  return{
    type: 'fetch_lyrics',
    payload: request
  }
}
