import React from 'react'
import { useState } from "react";

const SearchBar = ({ onSearchSubmit, lastSearchQuery }) => {
    const [query, setQuery] = useState(lastSearchQuery || '');

    const handleChange = (event) => {
      setQuery(event.target.value);
    };

    // Allow Enter to be used to submit search
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        onSearchSubmit(query);
      }
    };
  
    return (
        <div className="search-bar">
            <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            placeholder="I would like to see..."
            />
            <button onClick={() => onSearchSubmit(query)}>
                Go
            </button>
      </div>
    );
}

export default SearchBar;