import React from 'react';
import 'bulma/css/bulma.min.css';

function Navigation() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    My Website
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>

                    <a className="navbar-item" href="/abouttt">
                        About
                    </a>

                    <a className="navbar-item" href="/contact">
                        Contact
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="/signup">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
