import React from 'react';

const renderInfo = ({ track }) => {
  return(
    <div>
      <h2><em>{track.title}</em> by <em>{track.primary_artist.name}</em></h2>
      <img src={track.album.cover_art_url} alt="Album Cover" width="70%" />
      <h5 className="track-album"><em>{track.album.name}</em></h5>
      <hr />
    </div>
  );
}

export default renderInfo;