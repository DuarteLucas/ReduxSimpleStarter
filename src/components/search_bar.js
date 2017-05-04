import React, { Component } from 'react';

// - FUNCTIONAL COMPONENT EXAMPLE:
// const SearchBar = () => {
//   return <input />
// };

// CLASS-based COMPONENT:
// - added funcionality;
// - must always definde a RENDER METHOD and return
// some JSX otherwise you'll end up with an error
class SearchBar extends Component {
  // this is how we initialize state in a class-based component
  // always called whenever we create an instance of SearchBar
  Constructor(props) {
    // super calls the parent method
    super(props);
    // When creating a state we also create a object which
    // passes properties we want to record
    // MANUALLY CHANGING STATE -- this.state = { object_properties}
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        // UPDATING STATE -- this.setState = { object_properties}
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}



export default SearchBar;
