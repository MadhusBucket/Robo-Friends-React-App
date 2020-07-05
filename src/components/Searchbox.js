import React from 'react';
import 'tachyons';


const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2 ma2">
      <input
        className="wa-5 pa3 ma2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for Unknown "
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;