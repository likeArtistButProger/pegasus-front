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
          <nav className="nav-menu-container">
            <ul className="nav-menu">
                <li className="nav-menu-children"><a> Swap </a></li>
                <li className="nav-menu-children"><a> PGC v2 BEP-20 Contracts </a></li>
                <li className="nav-menu-children"><a> Buy </a></li>
                <li className="nav-menu-children"><a> Staking </a></li>
                <li className="nav-menu-children"><a> Affiliate </a></li>
                <li className="nav-menu-children"><a> Projects </a></li>
                <li className="nav-menu-children"><a> Pegascoin v1 (old1) </a></li>
                <li className="nav-menu-children"><a> Join </a></li>
            </ul>
          </nav>
        </div>
    )
}
export default Header;