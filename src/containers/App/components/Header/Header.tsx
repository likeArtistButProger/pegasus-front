import React from "react";
import { useConnect } from "../../../../shared/hooks";
import { LinkWithDropdown } from "./components";
import { Links } from './LinksConfig';

import { FireIcon } from "./_resources/FireIcon";

import "./styles.scss";

const Header = () => {
    const { connect } = useConnect();
  
    return (
        <div className="header">
            <div className="header-content">
                <div id="logo" className="pull-left">
                    <h1>
                        <a href="/" className="scrolltop">
                            <img src="/images/logo_32.png" alt="logo" width="32" height="32"/>
                            <span className="logo-text">PGC</span> 
                        </a>
                    </h1>
                </div>
                <div id="nav-menu-container" className="nav-menu-container">
                    <div className="nav-menu">
                        <div className="nav-menu-children">
                            <a href="/swap" className="header-link"> 
                                <FireIcon />
                                <span>Swap</span>
                                <FireIcon />
                            </a>
                        </div>
                        {
                            Links.map(({title, href, additionalLinks}) => (
                                <LinkWithDropdown title={title} href={href} options={additionalLinks} />
                            ))
                        }
                    </div>
                    <div onClick={connect} id="metamask" className="metamask">
                        <img src="/images/metamask.svg" alt="metamask-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;