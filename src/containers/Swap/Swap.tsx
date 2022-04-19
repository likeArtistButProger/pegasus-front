import React from "react";
import { useHistory } from "react-router-dom";

import './styles.scss';

const Swap = () => {
    const history = useHistory();

    const redirectToMainPage = () => {
        history.push("/");
    }

    return (
        
    <div className="swap-container">
        <a href="/" className="back-to-main-link">
            <div onClick={redirectToMainPage} className="divh2">
                <div className="row">
                    <div className="col-auto pr-0"><img src="/images/logo_128.png" width="45" height="45" alt="logo" className="mr-2"/></div>
                    <div className="col pl-2 bigtext">Pegascoin Swap</div>
                </div>
            </div>
        </a>

        <hr className="mt-3"></hr>
        
        <ol className="ol">
            <li className="li"><a className="a-link" href="https://wallet.pegascoin.com" target="_blank" rel="nofollow noopener noreferrer">Create</a> a new Pegascoin wallet. Keep the keys and password safe!<br />
                <span className="warning">Warning! Your Pegascoin wallet address will be used in both Pegascoin blockchain and Binance Smart Chain.</span><br />
                <span className="comment">You can buy Pegascoins at the following exchanges:
                <ul>
                    <li><a className="a-link" href="https://app.stex.com/en/trading/pair/BTC/PGC/1D" target="_blank" rel="nofollow noopener noreferrer">STEX</a></li>
                    <li><a className="a-link" href="https://btc-alpha.com/ru/trade/PGC_BTC" target="_blank" rel="nofollow noopener noreferrer">BTC-alpha</a></li>
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
                <span className="comment">Use our <a className="a-link" href="https://wallet.pegascoin.com" target="_blank" rel="nofollow noopener noreferrer">wallet</a> to transfer coins.</span><br />
                <span className="comment">You should see the transfered coins at PGC Swap Balance Page in 30 minutes.</span>
            </li>
            <li className="li"><a className="a-link" href="https://metamask.io/download.html" target="_blank" rel="nofollow noopener noreferrer">Install</a> the <img className="metamask-icon" src="/images/metamask.svg" width="25" height="25" alt="metamask"/> <span className="orange-span">Metamask</span> extension to your browser.</li>
            <li className="li"><span className="a-link">Import</span> your wallet to Metamask.</li>
            <li className="li"><span className="a-link">Add</span> the Binance Smart Chain to the wallet.</li>
            <li className="li">Go to your PGC Swap Balance Page.</li>
        </ol>

        <hr className="mt-5"></hr>

        <p className="mt-4">Enter your PGC address to go to your PGC Swap Balance Page:</p>
        <div className="input-group">
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
            <tbody className="tbody">
                <tr className="tr">
                    <th className="th">Minimal swap balance for claim</th>
                    <th className="text-center th">Claim price (PGC) from swap balance</th>
                    <th className="text-right th">Claim take (PGC0) from swap balance</th>
                </tr>
                <tr className="tr">
                    <td className="td">10 000</td>
                    <td className="text-center td">10 %</td>
                    <td className="text-right td">50 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">50 000</td>
                    <td className="text-center td">20 %</td>
                    <td className="text-right td">90 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">250 000</td>
                    <td className="text-center td">30 %</td>
                    <td className="text-right td">120 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">500 000</td>
                    <td className="text-center td">50 %</td>
                    <td className="text-right td">150 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">750 000</td>
                    <td className="text-center td">70 %</td>
                    <td className="text-right td">180 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">1 000 000</td>
                    <td className="text-center td">100 %</td>
                    <td className="text-right td">250 %</td></tr>        
            </tbody>
        </table>

        <p className="mt-2"><span className="comment">To complete the swap procedure (PGC to PGC0 Binance Smart Chain tokens) and to receive additional exchange bonus you need to pay in old PGC tokens according to the table above.</span><br/>
           <span className="warning">Claim Option will be opened soon.</span></p>
        
           <table className="table table-condensed swapBalanceTable mb-3">
            <caption className="t-caption">Bonus size (at the end of the stage):</caption>
            <tbody className="tbody">
                <tr className="tr">
                    <th className="th">Balance</th>
                    <th className="text-right th">Bonus</th>
                </tr>
                <tr className="tr">
                    <td className="td">0 ≤ <span className="italic">x</span> &lt; 10000 PGC</td>
                    <td className="text-right td">-100 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">10000 ≤ <span className="italic">x</span> &lt; 50000 PGC</td>
                    <td className="text-right td">0 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">50000 ≤ <span className="italic">x</span> &lt; 100000 PGC</td>
                    <td className="text-right td">10 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">100000 ≤ <span className="italic">x</span> &lt; 250000 PGC</td>
                    <td className="text-right td">15 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">250000 ≤ <span className="italic">x</span> &lt; 500000 PGC</td>
                    <td className="text-right td">20 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">500000 ≤ <span className="italic">x</span> &lt; 1000000 PGC</td>
                    <td className="text-right td">25 %</td>
                </tr>        
                <tr className="tr">
                    <td className="td">1000000 ≤ <span className="italic">x</span> &lt; 2500000 PGC</td>
                    <td className="text-right td">30 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">2500000 ≤ <span className="italic">x</span> &lt; 5000000 PGC</td>
                    <td className="text-right td">40 %</td>
                </tr>
                <tr className="tr">
                    <td className="td">5000000 PGC and more</td>
                    <td className="text-right td">50 %</td>
                </tr>       
            </tbody>
        </table>

        <table className="table table-condensed swapBalanceTable mb-3">
            <caption className="t-caption">Top 10 wallets for swap:</caption>
            <tbody className="tbody">
                <tr className="tr">
                    <th className="th">Adress</th>
                    <th className="text-right th">Amount</th>
                    <th className="text-right th">Bonus</th>
                    <th className="text-right th">Total</th>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x777…99f</td>
                    <td className="text-right td">6 148 281 PGC</td>
                    <td className="text-right td">3 074 140 PGC</td>
                    <td className="text-right td">9 222 421 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0xf66…aa5</td>
                    <td className="text-right td">1 465 215 PGC</td>
                    <td className="text-right td">439 565 PGC</td>
                    <td className="text-right td">1 904 780 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0xef1…b8d</td>
                    <td className="text-right td">742 963 PGC</td>
                    <td className="text-right td">185 741 PGC</td>
                    <td className="text-right td">928 704 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x681…921</td>
                    <td className="text-right td">617 524 PGC</td>
                    <td className="text-right td">154 381 PGC</td>
                    <td className="text-right td">771 905 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x794…b96</td>
                    <td className="text-right td">507 687 PGC</td>
                    <td className="text-right td">126 922 PGC</td>
                    <td className="text-right td">634 609 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0xaf8…aa2</td>
                    <td className="text-right td">370 917 PGC</td>
                    <td className="text-right td">74 183 PGC</td>
                    <td className="text-right td">445 101 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0xd50…1f0</td>
                    <td className="text-right td">363 189 PGC</td>
                    <td className="text-right td">72 638 PGC</td>
                    <td className="text-right td">435 827 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x456…ff3</td>
                    <td className="text-right td">285 092 PGC</td>
                    <td className="text-right td">57 018 PGC</td>
                    <td className="text-right td">342 110 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x03b…258</td>
                    <td className="text-right td">283 988 PGC</td>
                    <td className="text-right td">56 798 PGC</td>
                    <td className="text-right td">340 786 PGC</td>
                </tr>
                <tr className="tr">
                    <td className="td td-blue-bold">0x74e…db2</td>
                    <td className="text-right td">280 610 PGC</td>
                    <td className="text-right td">56 122 PGC</td>
                    <td className="text-right td">336 732 PGC</td>
                </tr>
                <tr className="tr">
                    <td></td>
                    <td className="text-right t-conclusion">13 447 837 PGC</td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                </tr>
            </tbody>
        </table>
        <div className="swap-page-bottom-spacemaker"/>
    </div>
    )
}

export default Swap;
