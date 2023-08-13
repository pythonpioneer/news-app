import './App.css';
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';

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

  // state variable for the category of the news
  const [category, setCategory] = useState('top');

  // this method is used to fetch the clicked navabar element
  const getCategory = (event) => {
    setCategory(event.currentTarget.textContent);
  };

  // to change the category to top again
  const getHomeCategory = (event) => {
    setCategory('top');
  };

  // state variable to defint the color mode
  const [darkMode, setDarkMode] = useState('light');

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
      <Navbar darkMode={darkMode} colorMode={colorMode} getCategory={getCategory} getHomeCategory={getHomeCategory} />
      <SearchBar darkMode={darkMode} handleColorMode={handleColorMode} colorMode={colorMode} />

      <Routes>
        {/* the key props is sent to reload the page automatically */}
        <Route exact path={"/" + category.includes(',') ? category.split(',')[0] : category.toLowerCase()}
          element={<NewsBox key={category} darkMode={darkMode} colorMode={colorMode} category={category}/>}
        />
      </Routes>
    </>
  );
}

export default App;
