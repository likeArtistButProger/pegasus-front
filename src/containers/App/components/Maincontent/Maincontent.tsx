import React from "react";

import "./styles.scss";

const MainContent = () => {
   
    return (
        <div className="main-content">
            <div className="main-logo">
            <div className="col-auto"><img className="intro-logo" src="images/logo_128.png" width="128" height="128"/></div>
            <div className="col-auto">
                <p className="pgc-caption">Pegascoin</p>
                <div className="row">
                    <div className="pgc-version">ver 2.0</div>
                    <div className="col-auto"> <img className="logo-binance" src="/images/logo-binance-smart-chain1.png" alt="binance_logo"/> </div>
                </div>
            </div>
            </div>

            <div className="news">
                <div className="news-header">PEGASCOIN NEWS</div>
                <div className="news-item">
                    <div className="news-date">21.05.2021</div>
                    <div className="news-text">Pegascoin v2 <a className="links" href="https://bscscan.com/token/0xaafbd6940f54bb86bdbc0323b7b1fd269a69fc76#tokenInfo">Smart Contract</a> has been created!</div>
                </div>
                <div className="news-item">
                    <div className="news-date">17.05.2021</div>
                    <div className="news-text">Pegascoin deposits at STEX and BTC-Alpha will be closed on 20.05.2021. Old PGCs v1 can only be sent to <a className="links" href="/swap">swap</a>!</div>
                </div>
                <div className="news-item">
                    <div className="news-date">01.04.2021</div>
                    <div className="news-text">The Swap (1st stage) has started! <a className="links" href="/swap">Get your 50% bonus now!</a></div>
                </div>
            </div>
            <div className="news">
            <div className="news-header">ROADMAP</div>
            <div className="news-text second-news-block">
                <p>2Q21 ! Create and verify the Binance Smart Chain Contract (BEP-20) for Pegascoin v2</p>
                <p>2Q21 ! Start of the 1st stage swap of Pegascoin v1 to Pegascoin v2 with bonus program</p>
                <p>3Q21 ! Pegascoin v2 pre-sale with</p>
                <p>3Q21 ! Mining bonus program upgrade</p>
                <p>3Q21 ! Start of the 2st stage swap of Pegascoin v1 to Pegascoin v2 on STEX Exchange</p>
                <p>3Q21 ! Affiliate program</p>
                <p>3Q21 ! Staking</p>
                <img className="roadmap-img" src="/images/roadmap1.png" alt="Roadmap 2"/>
                <p>3Q21 ! IDO</p>
                <p>4Q21 ! TokenCreate service</p>
                <p>4Q21 ! Crafting</p>
                <p>1Q22 ! PegasLottery</p>
                <p>1Q22 ! PegasTasks</p>
                <p>1Q22 ! PegasNFT</p>
                <p>2Q22 ! PegasSwap</p>
                <p>2Q22 ! Pegascoin CrossChain and Bridge</p>
                <p>2Q22 ! PegasGames</p>
                </div>
                <img className="roadmap-img" src="/images/roadmap2.png" alt="Roadmap 2"/>
            </div>
        </div>
    );
}
export default MainContent;