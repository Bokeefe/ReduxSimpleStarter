import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCUi9IG66fxkskdHFlDaxTNBsxDw-XTSN8';

const App = function(){
  return <div>
    <SearchBar />
  </div>;
}
ReactDOM.render(<App />, document.querySelector('.container'));