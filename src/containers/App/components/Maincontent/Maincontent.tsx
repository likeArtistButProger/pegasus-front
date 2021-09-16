import React, { useCallback } from "react";
import { Button } from '../../../../shared/components'; 
import { useWeb3React } from '@web3-react/core'; 
import { Injected } from '../../../../shared/constants';

import "./styles.scss";

const Maincontent = () => {
   
    return (
        <div className="news">
            <div className="news-header">PEGASCOIN NEWS</div>
            <div className="news-item">
                <div className="news-date">21.05.2021</div>
                <div className="news-text">Pegascoin v2 <a href="https://bscscan.com/token/0xaafbd6940f54bb86bdbc0323b7b1fd269a69fc76#tokenInfo">Smart Contract</a> has been created!</div>
            </div>
            <div className="news-item">
                <div className="news-date">17.05.2021</div>
                <div className="news-text">Pegascoin deposits at STEX and BTC-Alpha will be closed on 20.05.2021. Old PGCs v1 can only be sent to <a href="/swap">swap</a>!</div>
            </div>
            <div className="news-item">
                <div className="news-date">01.04.2021</div>
                <div className="news-text">The Swap (1st stage) has started! <a href="/swap">Get your 50% bonus now!</a></div>
            </div>
        </div>
    )
}
export default Maincontent;