import './App.css';
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {

  // style for dark mode and light mode
  const colorMode = {
    darkModeNavbar: {
      backgroundColor: '#01283b',
      color: 'white',
    },
    darkModeSearchbar: {
      backgroundColor: '#02344d',
      color: 'white',
    },
    darkModeBody: {
      backgroundColor: '#02344d',
      color: 'white',
    },
    lightMode: {
      backgroundColor: 'whitesmoke',
      color: 'black',
    },
    lightModeNavbar: {
      backgroundColor: '#cbd4d1',
      color: 'black',
    }
  };

  // state variables
  const [category, setCategory] = useState('top');  // for the category of the news
  const [darkMode, setDarkMode] = useState('light');  // to define the color mode
  const [searchText, setSearchText] = useState('');  // to define the search text
  const [progress, setProgress] = useState('5');  // to display the top loading bar

  // this method is used to fetch the clicked navabar element
  const getCategory = (event) => {
    setCategory(event.currentTarget.textContent);
  };

  // this method is used to fetch the data from the search box, when clicked on search icon
  const getSearchText = () => {
    setSearchText(document.getElementById('placeholder-color').value);  // id of the search box in searchbar component
  };

  // to change the category to top again
  const getHomeCategory = (event) => {
    setCategory('top');
  };

  // writing a function to change the color mode when clicked
  const handleColorMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = colorMode.darkModeBody.backgroundColor;
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* displaying top loading bar */}
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar darkMode={darkMode} colorMode={colorMode} getCategory={getCategory} getHomeCategory={getHomeCategory} />
      <SearchBar darkMode={darkMode} handleColorMode={handleColorMode} colorMode={colorMode} getSearchText={getSearchText} />

      <Routes>
        {/* the key props is sent to reload the page automatically */}
        <Route exact path={"/" + category.includes(',') ? category.split(',')[0].toLowerCase() : category.toLowerCase()}
          element={<NewsBox key={category + searchText + Math.random.toString} darkMode={darkMode} colorMode={colorMode} category={category} searchText={searchText} setProgress={setProgress}/>}
        />
        <Route exact path={"/"}
          element={<NewsBox key={'/home' + searchText + Math.random.toString} darkMode={darkMode} colorMode={colorMode} category={category} searchText={searchText} setProgress={setProgress}/>}
        />
      </Routes>
    </>
  );
}

export default App;
