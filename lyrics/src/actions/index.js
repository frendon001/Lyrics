import axios from 'axios';
import {FETCH_VIDEOS} from './types';
import YTSearch from 'youtube-api-search';
import {KEYS} from '../config';

export function fetchVideos(term){
  YTSearch({key: KEYS.google, term}, (videos) => {
    return{
      type: FETCH_VIDEOS,
      payload: videos
    }
  });
}
