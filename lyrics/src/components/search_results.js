import React from 'react';

function result(track){
  // console.log(track.primary_genres.music_genre_list[0].music_genre_name);
  return(
    <div className="track-result-box">
      <p><strong>{track.track_name}</strong> BY <strong>{track.artist_name}</strong> FROM <strong>{track.album_name}</strong></p>
      <p>Type of music: <em>{getGenres(track.primary_genres.music_genre_list)}</em></p>
      <p>The lyrics to this song from Musixmatch can be found <a href={track.track_share_url}>here</a></p>
    </div>
  );
}

function getGenres(genres){
  return genres.map(genre => {
    let g = ' | ' + genre.music_genre.music_genre_name + ' ';
    return g;
  })
}

const renderResults = ({tracks}) => {
  // tracks[0].track.track_name
  console.log('Results Component: ', tracks);
  return(
    <div className="container">
      {result(tracks[0].track)}
    </div>
  );
}

export default renderResults;