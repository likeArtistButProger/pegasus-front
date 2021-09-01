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
            {
                !!account
                ?
                <span className="account">{shortenAddress(account)}</span>
                :
                <Button onClick={connect}>Connect</Button>
            }
        </div>
    )
}

export default Header;