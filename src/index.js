import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCIa36jKRWEy0mjFfcVUw-mSrvD0VO-Jpg';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App/> , document.querySelector('.container'));
