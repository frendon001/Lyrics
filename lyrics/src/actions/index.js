import axios from 'axios';
import { FETCH_TRACKS, FETCH_TRACK, FETCH_LYRICS } from './types';
// use the local host URL for local testing
// const ROOT_URL = 'http://localhost:3030'
const ROOT_URL = ''

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
  return function(dispatch){
    let url = `${ROOT_URL}/song`;
    return axios.get(url, {
      headers: { songid: id }
    })
      .then(response => {
        dispatch({
          type: FETCH_TRACK,
          payload: response
        });
      });
  }
}

export function fetchLyrics(url){
  return function(dispatch){
    let aurl = `${ROOT_URL}/lyrics`;
    return axios.get(aurl, {
      headers: { songurl: url }
    })
      .then(response => {
        dispatch({
          type: FETCH_LYRICS,
          payload: response
        });
      });
  }
}

export function fetchTrackAndLyrics(trackId) {
  return (dispatch, getState) => {
    return dispatch(fetchTrack(trackId)).then(() => {
      const fetchedTrack = getState().fetch.track;
      const trackUrl = fetchedTrack.url;
      return dispatch(fetchLyrics(trackUrl))
    })
  }
}
