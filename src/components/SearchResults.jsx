import React from 'react';

const SearchResults = ({ query, results, onResultClick }) => {
  // 검색어가 없으면 아무것도 표시하지 않음
  if (!query) {
    return null;
  }

  // 검색어는 있지만 결과가 없는 경우 메시지 표시
  if (results.length === 0) {
    return (
      <ul className="search-results-list">
        <li className="no-result-item">
          '{query}'와(과) 관련된 내용이 존재하지 않습니다.
        </li>
      </ul>
    );
  }

  const sourceMap = {
    'allEsthersData': '에스더',
    'commanders': '군단장',
    'bossRaids': '보스 레이드',
    'arksData': '아크',
    'stories': '스토리',
    'classDB': '클래스',
  };

  return (
    <ul className="search-results-list">
      {results.map((result, index) => (
        <li
          key={`${result.name}-${index}`}
          className="result-item"
          onClick={() => onResultClick(result)}
        >
          <span className="result-name">{result.name} <span>(  {result.id || ''}  )</span></span>
          <span className="result-source">{sourceMap[result.source] || result.source}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;