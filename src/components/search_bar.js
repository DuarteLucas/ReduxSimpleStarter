import React, { Component } from 'react';

// - FUNCTIONAL COMPONENT EXAMPLE:
// const SearchBar = () => {
//   return <input />
// };

// CLASS-based COMPONENT:
// - added functionality;
// - must always definde a RENDER METHOD and return
// some JSX otherwise you'll end up with an error
class SearchBar extends Component {
  // this is how we initialize state in a class-based component
  // always called whenever we create an instance of SearchBar
  constructor(props) {
    // super calls the parent method
    super(props);
    // When creating a state we also create a object which
    // passes properties we want to record
    // MANUALLY CHANGING STATE
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // UPDATING STATE
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}




export default SearchBar;
