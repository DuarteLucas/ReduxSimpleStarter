import React, { Component } from 'react';

// - FUNCTIONAL COMPONENT EXAMPLE:
// const SearchBar = () => {
//   return <input />
// };

// - CLASS-based COMPONENT:
// - added funcionality;
// - must always definde a RENDER METHOD and return
// some JSX otherwise you'll end up with an error
class SearchBar extends Component {
  render() {
    return <input />;
  }
}

export default SearchBar;
