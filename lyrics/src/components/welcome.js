import React from 'react';

const renderMessage = () => {
  return(
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">
          This is an application that will allow you to search for any song. Upon search, select your song 
          of choice in order to view simple song information, lyrics samples (from Genius API), and related 
          YouTube Videos!
        </p>
        <hr className="my-4"/>
        <p>Search for a track by song, artist, or both to get started!</p>
      </div>
    </div>
  );
}

export default renderMessage;