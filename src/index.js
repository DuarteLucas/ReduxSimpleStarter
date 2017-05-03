import React from 'react';
import ReactDOM from 'react-dom';

// - '.' before the path means 'in the current folder'
// - don't need to include the file extension if it's
// a '.js' file
import SearchBar from './components/search_bar';

const API_KEY = ' AIzaSyDOy40pU-caImdARxvBYsMmHuFmJ05xTok ';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));



