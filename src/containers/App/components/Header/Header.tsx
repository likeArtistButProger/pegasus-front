import React, { useCallback } from "react";
import { Button } from '../../../../shared/components'; 
import { useWeb3React } from '@web3-react/core'; 
import { Injected } from '../../../../shared/constants';

import "./styles.scss";

const shortenAddress = (address: string) => {
    return address.substr(0, 7) + "..." + address.substr(address.length - 4);
};

const Header = () => {
    const { account, activate } = useWeb3React();
 
    const connect = useCallback(() => {
        activate(Injected);
    }, [activate]);

    return (

        <div className="header">
            <div className="header-container">
                <div id="logo" className="pull-left">
                    <h1>
                        <a href="/" className="scrolltop">
                            <img src="/images/logo_32.png" alt="logo" width="32" height="32"/>
                            PGC
                        </a>
                    </h1>
                </div>
                <nav id="nav-menu-container" className="nav-menu-container">
                <ul className="nav-menu">
                    <li className="nav-menu-children"><a className="sf-with-ul"> Swap </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> PGC v2 BEP-20 Contracts </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Buy </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Staking </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Affiliate </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Projects </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Pegascoin v1 (old1) </a></li>
                    <li className="nav-menu-children"><a className="sf-with-ul"> Join </a></li>
                    <li className="nav-menu-children metamask-icon metamask-icon-gray"><div id="metamask" className="metamask-thing"><img src="" width="35" height="33" alt="metamask-icon"></img></div></li>
                </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;