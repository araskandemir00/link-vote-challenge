import React from 'react';
import Logo from '../images/logo.png';
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="header">
                <div className="logo-wrapper">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="title-wrapper">
                    <p className="title">
                        <span className="link">Link</span>
                        <span className="vote">VOTE</span>
                        Challenge
                    </p>
                </div>
            </div>
            <div className="content">{children}</div>
        </div>
    )
}

export default Layout;

