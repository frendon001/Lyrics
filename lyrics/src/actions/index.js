import axios from 'axios';
import { FETCH_TRACKS, FETCH_TRACK, FETCH_LYRICS } from './types';
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
  return function(dispatch){
    let url = `${ROOT_URL}/song`;
    axios.get(url, {
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
    axios.get(aurl, {
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

export function fetchTrackTest(id){
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

export function fetchLyricsTest(url){
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
  // Again, Redux Thunk will inject dispatch here.
  // It also injects a second argument called getState() that lets us read the current state.
  return (dispatch, getState) => {
    // Remember I told you dispatch() can now handle thunks?
    return dispatch(fetchTrackTest(trackId)).then(() => {
      console.log('Double Action: ', getState())
      const fetchedTrack = getState().fetch.track;
      const trackUrl = fetchedTrack.url;

      return dispatch(fetchLyricsTest(trackUrl))

      // Assuming this is where the fetched user got stored

      // const fetchedUser = getState().usersById[userId]

      // Assuming it has a "postIDs" field:

      // const firstPostID = fetchedUser.postIDs[0]

      // And we can dispatch() another thunk now!

      // return dispatch(getPost(firstPostID))
    })
  }
}
