import React from 'react';

const renderInfo = ({ track }) => {


  return(
    <div>
      <h2><em>{track.title}</em> by <em>{track.primary_artist.name}</em></h2>
      <img src={track.album ? track.album.cover_art_url : "http://www.lovespirals.com/wp-content/themes/soundcheck212/images/default-artwork.png"} alt="Album Cover" width="70%" />
      <h5 className="track-album"><em>{track.album ? track.album.name : "Unknown Album"}</em></h5>
      <hr />
    </div>
  );
}

export default renderInfo;