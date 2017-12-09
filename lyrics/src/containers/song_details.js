import React, {Component} from 'react';

class SongDetails extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    console.log("Track ID: ", id)
  }

  render(){
    return(
      <div>
        Song details for song clicked on.
      </div>
    )
  }
}

export default SongDetails;