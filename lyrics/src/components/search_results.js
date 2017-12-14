import React from 'react';
import {Link} from 'react-router-dom';

function getTrack(track){
  return(
    <div className="track-result-box" key={track.id}>
      <p><strong>{track.title}</strong> BY <strong>{track.primary_artist.name}</strong></p>
      <p>The lyrics to this song from Genius can be found <a href={track.url} target="_blank">here</a></p>
      <div><Link className="btn btn-success" to={`/song/${getURLSafeString(track.title)}&${getURLSafeString(track.primary_artist.name)}&${track.id}`}>{track.title}</Link></div>
    </div>
  );
}

function getURLSafeString(unsafeString){
  let safeString = unsafeString.replace(/[^a-zA-Z ]/g, "");
  return safeString;
}

function renderTracks(hits){
  return hits.map(hit => {
    let track = hit.result;
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