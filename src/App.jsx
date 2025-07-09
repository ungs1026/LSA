import React, { useState, useEffect } from 'react';
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
import LoadingScreen from './components/LoadingScreen';
import SuggestPage from './pages/SuggestPage';
import CreditPage from './pages/CreditPage';


import backIcon from './assets/images/back.svg';


const App = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [activePage, setActivePage] = useState('main');
  
  const [searchIndex, setSearchIndex] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const [initialData, setInitialData] = useState(null);
  
  const [isLoading, setIsLoading] = useState(true);

  // --- 추가된 부분: 모바일 브라우저의 높이 문제를 해결하기 위한 useEffect ---
  useEffect(() => {
    // 실제 뷰포트 높이를 계산하는 함수
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 처음 로드될 때와 화면 크기가 변경될 때 함수 실행
    setVh();
    window.addEventListener('resize', setVh);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener('resize', setVh);
  }, []);
  // --------------------------------------------------------------------

  useEffect(() => {
    const allClassData = [];
    classData.forEach(baseClass => {
      allClassData.push({ ...baseClass, source: 'classDB', page: 'class', type: 'class' });
      if (baseClass.advancedClasses) {
        baseClass.advancedClasses.forEach(advClass => {
          allClassData.push({ ...advClass, baseClassId: baseClass.id, source: 'classDB', page: 'class', type: 'class' });
        });
      }
    });

    const allData = [
      ...allClassData,
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
    if (isLoading) return;

    const activeItem = menuItems[currentMenuIndex];
    const backgroundElement = document.getElementById('main-background');
    if (backgroundElement && activeItem.bg) {
      backgroundElement.style.backgroundImage = `url(${activeItem.bg})`;
    }
  }, [currentMenuIndex, isLoading]);

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
      case 'suggest': 
        return <SuggestPage />;
      case 'credit':
        return <CreditPage />;
      default: 
        return null;
    }
  };
  
  if (isLoading) {
    return <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />;
  }

  return (
    <div id="app-container">
      <div id="main-background"></div>

      {activePage === 'main' ? (
        <div className="main-view">
          <div className="main-content-wrapper">
            <h1 id="home-title">Lost Ark Archives</h1>
            <div className="search-container">
              <SearchBar query={searchQuery} onQueryChange={handleQueryChange} onSearch={() => { if(searchResults.length > 0) handleResultClick(searchResults[0]) }} />
              <SearchResults query={searchQuery} results={searchResults} onResultClick={handleResultClick} />
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
          <button className="return-btn" onClick={handleReturnToMain}>
            <img src={backIcon} alt="backIcon" className='return_icon_img' />
          </button>
          {renderPageContent()}
        </div>
      )}
    </div>
  );
};

export default App;