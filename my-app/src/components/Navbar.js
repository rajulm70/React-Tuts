import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    {/* Logo added here */}
                    <img
                        src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/25/e8/5425e86c-0752-0b84-cd1b-143d633b5c83/AppIcon-85-220-0-4-2x.png/512x512bb.png"
                        alt="Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }} // Adjust size and margin as needed
                    />
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                            <input
                                className="form-check-input"
                                onClick={props.toggleMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Set Title',
    aboutText: 'About',
};
