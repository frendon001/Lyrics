import { FETCH_VIDEOS, FETCH_TRACKS, FETCH_TRACK, FETCH_LYRICS } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_VIDEOS:
      return {...state, videos: action.payload};
    case FETCH_TRACKS:
      let track_list = action.payload.data.message.body.track_list;
      return {...state, tracks: track_list};
    case FETCH_TRACK:
      let {track} = action.payload.data.message.body;
      // console.log('Fetch Track: ', track);
      return {...state, track}
    case FETCH_LYRICS:
      let {lyrics} = action.payload.data.message.body;
      return {...state, lyrics}
    default:
      return state;
  }
}