import React from 'react'
import { useState } from "react";

import { useDataContext } from '../../DataContext';
import { getPixabaySearch } from '../../apis/Pixabay'

import SearchBar from './SearchBar'
import ImageTiles from './ImageTiles'

const Home = () => {
  const { 
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
    setPageNumber,
    pageNumber,
    totalPageNumber,
    setTotalPageNumber,
  }
  = useDataContext();

  const [loading, setLoading] = useState(false)

  const queryForImages = (query, pageNumber = 1) => {
    setLoading(true)
    getPixabaySearch(query, pageNumber)
      .then((response) => {
        const { results, totalHits } = response;
        setLoading(false)
        setSearchQuery(query)
        setSearchResults(results)
        setTotalPageNumber(totalHits / 20)
        setPageNumber(pageNumber)
      }
    )
  }

  // Pagination for navigating through search results and querying for the next page
  const onPreviousClick = () => {
    queryForImages(searchQuery, pageNumber - 1)
  }

  const onNextClick = () => {
    queryForImages(searchQuery, pageNumber + 1)
  }

  return (
    <div className="home-page">
      <h2>Type your search parameters below to find your image:</h2>
      
      <SearchBar onSearchSubmit={queryForImages} lastSearchQuery={searchQuery} />

      {loading && <div>Loading...</div>}
      {searchResults?.length > 0 && (
        <>
          <ImageTiles images={searchResults} />
          <div className="pagination">
            {pageNumber > 1 && <button onClick={() => onPreviousClick()}>Previous</button>}
            {pageNumber < totalPageNumber && <button onClick={() => onNextClick()}>Next</button>}
          </div>
        </>
      )}
      {searchResults?.length === 0 && "No results found"}
    </div>
  )
}

export default Home;