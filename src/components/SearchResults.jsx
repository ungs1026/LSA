import React from 'react';

const SearchResults = ({ results, onResultClick }) => {
  if (results.length === 0) {
    return null;
  }

  const sourceMap = {
    'allEsthersData': '에스더',
    'commanders': '군단장',
    'bossRaids': '보스 레이드',
    'arksData': '아크',
    'stories': '스토리',
  };

  return (
    <ul className="search-results-list">
      {results.map((result, index) => (
        <li
          key={`${result.name}-${index}`}
          className="result-item"
          onClick={() => onResultClick(result)}
        >
          <span className="result-name">{result.name}</span>
          <span className="result-source">{sourceMap[result.source] || result.source}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;