import React, {Component} from 'react';
import SearchNav from './search_nav';

class SongDetails extends Component {
  componentDidMount(){
    const {id} = this.props.match.params;
    const {lid} = this.props.match.params;
  }

  render(){
    return(
      <div>
        <SearchNav history={this.props.history} />
        Song details for song clicked on.
      </div>
    )
  }
}

export default SongDetails;