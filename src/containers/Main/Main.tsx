import React from "react";
import { NewsRow } from './components';
import { firstNewsBlock, secondNewsBlock } from './newsData';

import "./styles.scss";

const MainContent = () => {
   
    return (
        <div className="main-content">
            <div className="main-logo">
            <div className="col-auto">
                <img className="intro-logo" src="images/logo_128.png" width="128" height="128"/>
            </div>
            <div className="col-auto">
                <p className="pgc-caption">Pegascoin</p>
                <div className="row">
                    <div className="pgc-version">ver 2.0</div>
                    <div className="col-auto"> <img className="logo-binance" src="/images/logo-binance-smart-chain1.png" alt="binance_logo"/> </div>
                </div>
            </div>
            </div>

            <div className="news-block">
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
            <div className="news-block">
            <div className="news-header">ROADMAP</div>
            <div className="news">
                {
                    firstNewsBlock.map((news) => (
                        <NewsRow key={news.description} newsData={news}/>
                    ))
                }
                <img className="roadmap-img" src="/images/roadmap1.png" alt="Roadmap 2"/>
                {
                    secondNewsBlock.map((news) => (
                        <NewsRow key={news.description} newsData={news}/>
                    ))
                }
                <img className="roadmap-img" src="/images/roadmap2.png" alt="Roadmap 2"/>
            </div>
            </div>
        </div>
    );
}

export default MainContent;