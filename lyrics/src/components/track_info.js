import React from 'react';

const renderInfo = ({ track }) => {
  return(
    <div className="track-display">
      <h2><em>{track.title}</em> by <em>{track.primary_artist.name}</em></h2>
      <img src={track.album.cover_art_url} alt="Album Cover" width="70%" />
      <h5><em>{track.album.name}</em></h5>
      <hr />
      <div>You can find the full lyrics from Genius <a href={track.url} target="_blank">here</a>.</div>
    </div>
  );
}

export default renderInfo;