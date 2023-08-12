import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    GetYourNews
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                World <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Business
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Entertainment
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Politics
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Sports
                            </a>
                        </li>

                        {/* category=food, health */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Food
                            </a>
                        </li>

                        {/* category=technology, science */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Technology
                            </a>
                        </li>

                        {/* category=environment, tourism */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Environment
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
