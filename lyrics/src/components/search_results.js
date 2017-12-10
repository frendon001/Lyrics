import React from 'react';
import {Link} from 'react-router-dom';

function getTrack(trackParent){
  let track = trackParent.track;
  return(
    <div className="track-result-box" key={track.track_id}>
      <p><strong>{track.track_name}</strong> BY <strong>{track.artist_name}</strong> FROM <strong>{track.album_name}</strong></p>
      <p>Track Genre: {getGenres(track.primary_genres.music_genre_list)}</p>
      <p>The lyrics to this song from Musixmatch can be found <a href={track.track_share_url} target="_blank">here</a></p>
      <div><Link className="btn btn-success" to={`/song/${track.track_id}`}>{track.track_name}</Link></div>
    </div>
  );
}

function getGenres(genres){
  return genres.map((genre, index) => {
    let g = genre.music_genre;
    if(index === 0){
      return(
        <em key={g.music_genre_id}>{g.music_genre_name}</em>
      );
    }
    else{
      return(
        <em key={g.music_genre_id}> | {g.music_genre_name}</em>
      );
    }
    
  });
}

function renderTracks(tracks){
  return tracks.map(track => {
    return getTrack(track);
  });
}

const renderResults = ({tracks}) => {
  return(
    <div className="container">
      {renderTracks(tracks)}
    </div>
  );
}

export default renderResults;