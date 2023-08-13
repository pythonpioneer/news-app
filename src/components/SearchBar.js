import React from 'react';
import './style.css';

/**
 * This componet will contain features such as search bar and toggle mode.
 * @param {string} darkMode - This variable is used to set color for day and night mode.
 * @param {function} handleColorMode - This function is used to change the color mode. 
 * @param {function} getSearchText - This function is used to fetch the data from the serach-box when clicked on search-icon.
 * @param {object} colorMode - This object contain all the style color format for changing the color mode.
 * @returns {JSX.Element} - A JSX element shows Searchbar.
 */
export default function SearchBar(props) {
    return (
        <>
            <nav className="navbar navbar-light justify-content-between" style={props.darkMode === 'dark' ? props.colorMode.darkModeSearchbar : props.colorMode.lightMode}>

                {/* day and night mode icons */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={props.handleColorMode} width="40" height="40" fill="#B8860B" className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                    
                    {/* only visibke in light mode */}
                    {props.darkMode === 'light' && <path fill="#B8860B" d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />}
                        <path fill="#708090" d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                    </svg>
                </div>

                <form className="form-inline">
                    <div className='nav-link'>
                        <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius: '20px', backgroundColor: props.darkMode==='dark'?'#708090':'white', color: props.darkMode==='dark'?'white':'black'}} />
                    </div>

                    {/* search icon */}
                    <svg onClick={props.getSearchText} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </form>
            </nav>
        </>
    )
}
