import React from 'react';

const TrackLyrics = ({lyrics}) => {
  if(!lyrics){
    return(
      <div>Loading...</div>
    );
  }

  let sl = splitLyrics(lyrics);

  return(
    <p className="track-lyrics">{renderLyrics(sl)}</p>
  );
}

function splitLyrics(lyrics){
  let slyrics = lyrics.split('\n');
  return slyrics;
}

function renderLyrics(lyrics){
  return lyrics.map( (verse, index) => {
    return(
      <span key={index}>
        {verse}<br />
      </span>
    );
  });
}

export default TrackLyrics;