import { FETCH_VIDEOS, FETCH_TRACKS } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_VIDEOS:
      return {...state, videos: action.payload};
    case FETCH_TRACKS:
      console.log(action.payload);
      return {...state, tracks: action.payload};
    default:
      return state;
  }
}