import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
// youtube api key
const API_KEY = 'AIzaSyCIa36jKRWEy0mjFfcVUw-mSrvD0VO-Jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App/> , document.querySelector('.container'));
