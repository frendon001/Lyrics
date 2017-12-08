import { combineReducers } from 'redux';
import LyricsReducer from './reducer_lyrics';

const rootReducer = combineReducers({
    fetch: LyricsReducer
});

export default rootReducer;