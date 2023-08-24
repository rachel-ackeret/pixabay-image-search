import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(null);

  const value = {
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
    pageNumber,
    setPageNumber,
    totalPageNumber,
    setTotalPageNumber,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
