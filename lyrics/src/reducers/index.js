import { combineReducers } from 'redux';
import LyricsReducer from './reducer_lyrics';

const rootReducer = combineReducers({
    videos: LyricsReducer
});

export default rootReducer;