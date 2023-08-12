import './App.css';
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

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

  }

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
      <Navbar darkMode={darkMode} colorMode={colorMode} />
      <SearchBar darkMode={darkMode} handleColorMode={handleColorMode} colorMode={colorMode}/>
      <NewsBox darkMode={darkMode} colorMode={colorMode} />
    </>
  );
}

export default App;
