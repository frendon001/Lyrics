import { FETCH_VIDEOS, FETCH_TRACKS } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_VIDEOS:
      return {...state, videos: action.payload};
    case FETCH_TRACKS:
      let track_list = action.payload.data.message.body.track_list;
      console.log(track_list);
      return {...state, tracks: track_list};
    default:
      return state;
  }
}