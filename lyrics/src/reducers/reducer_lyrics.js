import { FETCH_TRACKS, FETCH_TRACK } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_TRACKS:
      let track_list = action.payload.data.response.hits;
      return {...state, tracks: track_list};
    case FETCH_TRACK:
      let {song} = action.payload.data.response;
      console.log('Fetch Track: ', song);
      return {...state, track: song}
    default:
      return state;
  }
}