import { FETCH_TRACKS, FETCH_TRACK, FETCH_LYRICS } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_TRACKS:
      let track_list = action.payload.data.response.hits;
      return {...state, tracks: track_list};
    case FETCH_TRACK:
      let {song} = action.payload.data.response;
      return {...state, track: song}
    case FETCH_LYRICS:
      console.log('Fetch Track Action: ', action.payload)
      let lyrics = action.payload.data;
      let index = getLyricsIndex(lyrics);
      return {...state, lyrics: lyrics[index]}
    default:
      return state;
  }
}

function getLyricsIndex(lyrics){
  let correctLyrics = {
    size: 0,
    index: 0
  };
  for(let i = 0; i < lyrics.length; i++){
    if(lyrics[i].length > correctLyrics.size){
      correctLyrics.size = lyrics[i].length;
      correctLyrics.index = i;
    } 
  }

  return correctLyrics.index;
}