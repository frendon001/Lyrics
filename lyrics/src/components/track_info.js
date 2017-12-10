import React from 'react';

const renderInfo = ({ lyrics, track }) => {
  return(
    <div className="track-display">
      <h2><em>{track.track_name}</em> by <em>{track.artist_name}</em></h2>
      <div>Album: {track.album_name}</div>
      <hr />
      <p>{displayLyrics(lyrics)}</p>
    </div>
  );
}

function displayLyrics(lyrics){
  return lyrics.map((line, index) => {
    if(index > lyrics.length - 3){
      return '';
    }
    return <span key={index}>{line}<br/></span>
  });
}

export default renderInfo;