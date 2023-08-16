import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This componet will contain features such as category for the news.
 * @param {string} darkMode - This variable is used to set color for day and night mode.
 * @param {object} colorMode - This object contain all the style color format for changing the color mode.
 * @param {function} getCategory - This function is used to fetch the data from the currently clicked navbar element.
 * @param {function} getHomeCategory - This function is used to set the category to top. 
 * @returns {JSX.Element} - A JSX element shows Navigation bar.
 */
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                <Link onClick={props.getHomeCategory} className="navbar-brand" to="/top" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                    GetYourNews
                </Link>
                <button style={{backgroundColor: '#708090'}}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                    </svg></div>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/world" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                World
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/business" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Business
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/entertainment" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/politics" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Politics
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/sports" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Sports
                            </Link>
                        </li>

                        {/* category=food, health */}
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/health" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Health<span className="sr-only">,food</span>
                            </Link>
                        </li>

                        {/* category=technology, science */}
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/technology" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Technology<span className="sr-only">,science</span>
                            </Link>
                        </li>

                        {/* category=environment, tourism */}
                        <li className="nav-item active">
                            <Link onClick={props.getCategory} className="nav-link" to="/environment" style={props.darkMode === 'dark' ? props.colorMode.darkModeNavbar : props.colorMode.lightModeNavbar}>
                                Environment<span className="sr-only">,tourism</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
