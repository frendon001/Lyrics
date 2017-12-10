import React from 'react';

const renderInfo = ({ lyrics, track }) => {
  return(
    <div className="track-display">
      <h2><em>{track.track_name}</em> by <em>{track.artist_name}</em></h2>
      <h5><em>{track.album_name}</em></h5>
      <hr />
      <p>{displayLyrics(lyrics)}</p>
      <div>You can find the full lyrics from Musixmatch <a href={track.track_share_url} target="_blank">here</a>.</div>
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