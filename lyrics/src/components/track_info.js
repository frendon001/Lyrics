import React from 'react';
import NoAlbum from '../images/no_album.png';

const renderInfo = ({ track }) => {


  return(
    <div>
      <h2><em>{track.title}</em> by <em>{track.primary_artist.name}</em></h2>
      <img src={track.album ? track.album.cover_art_url : NoAlbum} alt="Album Cover" width="45%" />
      <h5 className="track-album"><em>{track.album ? track.album.name : "Unknown Album"}</em></h5>
      <hr />
    </div>
  );
}

export default renderInfo;