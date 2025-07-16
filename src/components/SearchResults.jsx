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
          '{query}' content does not exist.
        </li>
      </ul>
    );
  }

  // query에 영문 키워드가 포함되어 있으면 영어로 출력
  const isEnglishQuery = /[A-Za-z]/.test(query);

  const sourceMap = {
    'allEsthersData': 'Esther',
    'commanders': 'Boss',
    'bossRaids': 'Boss Raid',
    'arksData': 'ark',
    'stories': 'story',
    'classDB': 'class',
  };

  return (
    <ul className="search-results-list">
      {results.map((result, index) => {
        // displayName: 영어 쿼리일 때 영어 필드 있으면 영어로
        const displayName = isEnglishQuery
          ? (result.eng_title || result.name_en || result.name)
          : result.name;
        return (
          <li
            key={`${result.name}-${index}`}
            className="result-item"
            onClick={() => onResultClick(result)}
          >
            <span className="result-name">
              {displayName} <span>({result.id || ''})</span>
            </span>
            <span className="result-source">{sourceMap[result.source] || result.source}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
