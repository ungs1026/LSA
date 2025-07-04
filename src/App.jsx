import React, { useState, useEffect } from 'react';
// db.js와 함께 classDB.js에서도 데이터를 가져옵니다.
import { menuItems, arksData, stories, oldEsthers, currentEsthers, commanders, bossRaids } from './data/db';
import { classData } from './data/classDB.js';
import MainMenu from './components/MainMenu';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import StoryPage from './pages/StoryPage';
import CharactersPage from './pages/CharactersPage';
import BossPage from './pages/BossPage';
import WorldviewPage from './pages/WorldviewPage';
import ArkPage from './pages/ArkPage';
import ClassPage from './pages/ClassPage';

const App = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [activePage, setActivePage] = useState('main');
  
  const [searchIndex, setSearchIndex] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    // 검색 인덱스 생성 로직에 classData 추가
    const allClassData = [];
    classData.forEach(baseClass => {
      // 기본 클래스 추가
      allClassData.push({ ...baseClass, source: 'classDB', page: 'class', type: 'class' });
      // 세부 클래스 추가
      if (baseClass.advancedClasses) {
        baseClass.advancedClasses.forEach(advClass => {
          allClassData.push({ ...advClass, baseClassId: baseClass.id, source: 'classDB', page: 'class', type: 'class' });
        });
      }
    });

    const allData = [
      ...allClassData, // 통합된 클래스 데이터 추가
      ...oldEsthers.map(item => ({ ...item, source: 'allEsthersData', page: 'characters', type: 'character' })),
      ...currentEsthers.map(item => ({ ...item, source: 'allEsthersData', page: 'characters', type: 'character' })),
      ...commanders.map(item => ({ ...item, source: 'commanders', page: 'characters', type: 'character' })),
      ...bossRaids.filter(item => item.patterns).map(item => ({ ...item, source: 'bossRaids', page: 'boss', type: 'boss' })),
      ...arksData.map(item => ({ ...item, source: 'arksData', page: 'ark', type: 'ark' })),
      ...stories.map(item => ({ ...item, name: item.title, source: 'stories', page: item.category === 'worldview' ? 'worldview' : 'continents', type: 'story' }))
    ];
    
    const uniqueData = Array.from(new Set(allData.map(item => JSON.stringify({name: item.name, source: item.source}))))
      .map(str => JSON.parse(str))
      .map(uniqueItem => allData.find(item => item.name === uniqueItem.name && item.source === uniqueItem.source));
      
    setSearchIndex(uniqueData);
  }, []);

  useEffect(() => {
    const activeItem = menuItems[currentMenuIndex];
    const backgroundElement = document.getElementById('main-background');
    if (backgroundElement && activeItem.bg) {
      backgroundElement.style.backgroundImage = `url(${activeItem.bg})`;
    }
  }, [currentMenuIndex]);

  const handleMenuChange = (index) => setCurrentMenuIndex(index);
  
  const handleNavigate = () => {
    const targetPage = menuItems[currentMenuIndex].id;
    if (targetPage !== 'home') {
      setInitialData(null); 
      setActivePage(targetPage);
    }
  };

  const handleReturnToMain = () => {
    setActivePage('main');
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchIndex.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        (item.id && item.id.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results.slice(0, 10));
    } else {
      setSearchResults([]);
    }
  };
  
  const handleResultClick = (result) => {
    setInitialData(result);
    setActivePage(result.page);
    setSearchQuery('');
    setSearchResults([]);
  };

  const renderPageContent = () => {
    switch(activePage) {
      case 'worldview': 
        return <WorldviewPage />;
      case 'continents': 
        return <StoryPage pageType="continent" title="CONTINENTS" initialData={initialData} />;
      case 'characters': 
        return <CharactersPage initialData={initialData} />;
      case 'boss': 
        return <BossPage initialData={initialData} />;
      case 'ark':
        return <ArkPage initialData={initialData} />;
      case 'class':
        return <ClassPage initialData={initialData} />;
      default: 
        return null;
    }
  };

  return (
    <div id="app-container">
      <div id="main-background"></div>

      {activePage === 'main' ? (
        <div className="main-view">
          <div className="main-content-wrapper">
            <h1 id="home-title">Lost Ark Archives</h1>
            <div className="search-container">
              <SearchBar query={searchQuery} onQueryChange={handleQueryChange} onSearch={() => { if(searchResults.length > 0) handleResultClick(searchResults[0]) }} />
              <SearchResults results={searchResults} onResultClick={handleResultClick} />
            </div>
          </div>
          <MainMenu
            menuItems={menuItems}
            currentMenuIndex={currentMenuIndex}
            onMenuClick={handleMenuChange}
            onNavigate={handleNavigate}
          />
        </div>
      ) : (
        <div className="page-wrapper">
          <button className="return-btn" onClick={handleReturnToMain}>&#8617;</button>
          {renderPageContent()}
        </div>
      )}
    </div>
  );
};

export default App;