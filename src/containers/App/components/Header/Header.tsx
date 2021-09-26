import React from "react";
import { useConnect } from "../../../../shared/hooks";
import { useWeb3React } from "@web3-react/core";
import { LinkWithDropdown } from "./components";
import { Links } from './LinksConfig';

import { FireIcon } from "./_resources/FireIcon";

import "./styles.scss";

const shortenAccount = (account: string) => {
    return account.substr(0, 6) + "..." + account.substr(-4, 4);
}

const Header = () => {
    const { account } = useWeb3React();
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
                                <LinkWithDropdown key={title+href} title={title} href={href} options={additionalLinks} />
                            ))
                        }
                    </div>
                    {
                        !!account ? (
                            <div className="account">{shortenAccount(account)}</div>
                        )
                        : (
                        <button onClick={connect} id="metamask" className="metamask">
                            <img src="/images/metamask.svg" alt="metamask-icon" />
                        </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Header;