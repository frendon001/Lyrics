import { combineReducers } from 'redux';
import { FETCH_TRACKS, FETCH_TRACK } from '../actions/types';
import LyricsReducer from './reducer_lyrics';

const appReducer = combineReducers({
    fetch: LyricsReducer
});
  
const rootReducer = (state, action) => {
    if (action.type === FETCH_TRACK) {
        state.fetch.tracks = undefined
    }
    if (action.type === FETCH_TRACKS) {
        state.fetch.track = undefined;
        state.fetch.lyrics = undefined;
    }

    return appReducer(state, action)
}

export default rootReducer;