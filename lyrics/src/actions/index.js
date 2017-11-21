import axios from 'axios';
import FETCH_VIDEOS from './types';
import YTSearch from 'youtube-api-search';
import keys from '../config';

export function fetchVideos(term){
  YTSearch({key: keys.google, term}, (videos) => {
    return{
      type: FETCH_VIDEOS,
      payload: videos
    }
  });
}
