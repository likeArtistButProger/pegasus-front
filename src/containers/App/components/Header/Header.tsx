import React from "react";
import { useConnect } from "../../../../shared/hooks";

import "./styles.scss";

const Header = () => {
    const { connect } = useConnect();
  
    return (
        <div className="header navbar">
            <div className="header-content">
                <div id="logo" className="pull-left">
                    <h1>
                        <a href="/" className="scrolltop">
                            <img src="/images/logo_32.png" alt="logo" width="32" height="32"/>
                            <span className="logo-text">PGC</span> 
                        </a>
                    </h1>
                </div>
                <nav id="nav-menu-container" className="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="nav-menu-children"><a href="/swap" className="header-link"> Swap </a></li>
                        <li className="nav-menu-children"><a className="header-link"> PGC v2 BEP-20 Contracts </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Buy </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Staking </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Affiliate </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Projects </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Pegascoin v1 (old1) </a></li>
                        <li className="nav-menu-children"><a className="header-link"> Join </a></li>
                    </ul>
                    <div onClick={connect} id="metamask" className="metamask">
                        <img src="/images/metamask.svg" alt="metamask-icon" />
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;