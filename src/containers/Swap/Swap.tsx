import React from "react";

import './styles.scss';

const Swap = () => {

    return (
        
    <div className="swap-container">
        <div className="divh2">
            <div className="row">
                <div className="col-auto pr-0"><img src="/images/logo_128.png" width="45" height="45" alt="logo" className="mr-2"/></div>
                <div className="col pl-2 bigtext">Pegascoin Swap</div>
            </div>
        </div>

        <hr className="mt-3"></hr>
        
        <ol className="ol">
            <li className="li"><a className="a-link" href="https://wallet.pegascoin.com" target="_blank" rel="nofollow noopener">Create</a> a new Pegascoin wallet. Keep the keys and password safe!<br />
                <span className="warning">Warning! Your Pegascoin wallet address will be used in both Pegascoin blockchain and Binance Smart Chain.</span><br />
                <span className="comment">You can buy Pegascoins at the following exchanges:
                <ul>
                    <li><a className="a-link" href="https://app.stex.com/en/trading/pair/BTC/PGC/1D" target="_blank" rel="nofollow noopener">STEX</a></li>
                    <li><a className="a-link" href="https://btc-alpha.com/ru/trade/PGC_BTC" target="_blank" rel="nofollow noopener">BTC-alpha</a></li>
                </ul>
                </span>
            </li>
            <li className="li">Transfer your PGCs to your just created wallet.</li>
            <li className="li">Transfer PGCs from your wallet to the special SWAP wallet:
                    <p className="link-btn copy-to-clipboard swap-address" data-text="0xef91af0a8a19dd44c77b7ad219a02406bd7bacda" title="click to copy">
                        <span className="walletcode">0xef91af0a8a19dd44c77b7ad219a02406bd7bacda</span>
                        <span className="copy" aria-hidden="true">Text copied to clipboard!</span>
                    </p>
                <span className="warning">Warning! Using your new wallet is mandatory! New tokens will be charged to your new wallet!</span><br />
                <span className="comment">Use our <a className="a-link" href="https://wallet.pegascoin.com" target="_blank" rel="nofollow noopener">wallet</a> to transfer coins.</span><br />
                <span className="comment">You should see the transfered coins at PGC Swap Balance Page in 30 minutes.</span>
            </li>
            <li className="li"><a className="a-link" href="https://metamask.io/download.html" target="_blank" rel="nofollow noopener">Install</a> the <img className="metamask-icon" src="/images/metamask.svg" width="25" height="25"/> <span className="orange-span">Metamask</span> extension to your browser.</li>
            <li className="li"><span className="a-link">Import</span> your wallet to Metamask.</li>
            <li className="li"><span className="a-link">Add</span> the Binance Smart Chain to the wallet.</li>
            <li className="li">Go to your PGC Swap Balance Page.</li>
        </ol>

        <hr className="mt-5"></hr>

        <p className="mt-4">Enter your PGC address to go to your PGC Swap Balance Page:</p>
        <div className="input-group mb-5">
            <input id="Address" className="form-control" type="text" aria-describedby="button-go" placeholder="PGC address"/>
            <div className="input-group-append">
                <button className="btn btn-primary" id="button-go">Go</button>
            </div>
        </div>
        <p><span className="comment">All PGCs received will be summed up. You will be granted a bonus at the end of this stage.<br/>
                                 The 1st stage ends up in June, 2021. New tokens will be credited to your wallet.</span><br/>
            <span className="warning">Warning! Balances under 10000 PGC will be dropped!</span></p>
            
        <table className="table table-condensed swapBalanceTable mb-3">
            <caption className="t-caption">PGC0 token claim info:</caption>
            <tbody><tr>
                <th>Minimal swap balance for claim</th>
                <th className="text-center">Claim price (PGC) from swap balance</th>
                <th className="text-right">Claim take (PGC0) from swap balance</th>
            </tr>
            <tr><td>10 000</td><td className="text-center">10 %</td><td className="text-right">50 %</td></tr><tr><td>50 000</td><td className="text-center">20 %</td><td className="text-right">90 %</td></tr><tr><td>250 000</td><td className="text-center">30 %</td><td className="text-right">120 %</td></tr><tr><td>500 000</td><td className="text-center">50 %</td><td className="text-right">150 %</td></tr><tr><td>750 000</td><td className="text-center">70 %</td><td className="text-right">180 %</td></tr><tr><td>1 000 000</td><td className="text-center">100 %</td><td className="text-right">250 %</td></tr>        </tbody></table>
    </div>
    )
}

export default Swap;
