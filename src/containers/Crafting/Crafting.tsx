import React, { useCallback, useMemo, useState } from "react";
import { useEthereum } from "../../contexts/EthereumContext";
import { useWeb3React } from "@web3-react/core";
import BigNumber from 'bignumber.js';

import { useContract } from "./useContract";

import "./styles.scss";

const Crafting = () => {
    const { Crafting, Pgc0, Pgr1, Pgsv } = useEthereum();
    const { account } = useWeb3React();
    const [amountPGC0, setAmountPGC0] = useState<string>("0");
    const [amountPGR1, setAmountPGR1] = useState<string>("0");
    const [amountPGSV, setAmountPGSV] = useState<string>("0");

    const pgc0 = useContract(Pgc0);
    const pgr1 = useContract(Pgr1);
    const pgsv = useContract(Pgsv);
    
    const usableCoins = useMemo(() => [
        {title: "PGC0", ...pgc0, amount: amountPGC0, setAmount: setAmountPGC0},
        {title: "PGR1", ...pgr1, amount: amountPGR1, setAmount: setAmountPGR1},
        {title: "PGSV", ...pgsv, amount: amountPGSV, setAmount: setAmountPGSV}
    ], [amountPGC0, amountPGR1, amountPGSV, pgc0, pgr1, pgsv]);

    const onDeposit = useCallback(async () => {
        if(!!Crafting && !!Pgc0 && !!Pgr1 && !!Pgsv) {
            const pgc0Decimals = await Pgc0.methods.decimals().call();
            const pgr1Decimals = await Pgr1.methods.decimals().call();
            const pgsvDecimals = await Pgsv.methods.decimals().call();

            const depositAmountPgco0 = new BigNumber(amountPGC0).times(10 ** pgc0Decimals).toFixed();
            const depositAmountPgr1 = new BigNumber(amountPGR1).times(10 ** pgr1Decimals).toFixed();
            const depositAmountPgsv = new BigNumber(amountPGSV).times(10 ** pgsvDecimals).toFixed();

            Crafting.methods
                .deposit(depositAmountPgco0, depositAmountPgr1, depositAmountPgsv)
                .send({ from: account })
                .then(() => {
                    usableCoins.forEach(coin => coin.updateBalance())
                })
        }
    }, [Crafting, Pgc0, Pgr1, Pgsv, account, amountPGC0, amountPGR1, amountPGSV, usableCoins]);

    return (
        <div className="crafting-container">
            <div className="crafting-card">
                <div className="crafting-card-header">Crafting</div>
                <div className="crafting-card-content">
                    {
                        usableCoins.map(({title, allowance, balance, onApprove, amount, setAmount}) => (
                            <div key={title} className="token-section">
                                <div className="balance-row">
                                    <div className="label">{title}</div>
                                    <div className="amount">{balance.toNumber().toFixed(2)}</div>
                                </div>
                                {
                                    allowance.toNumber() > 0
                                    ? (
                                        <div className="deposit">
                                            <input
                                                value={amount}
                                                onChange={({target: { value }}) => setAmount(value)}
                                                type="number"
                                                className="card-input"
                                            />
                                        </div>
                                    ) : (
                                        <div className="card-btn-wrapper">
                                            <button onClick={onApprove} className="card-btn">
                                                Approve
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                    <div className="card-btn-wrapper deposit-btn-wrapper">
                        <button onClick={onDeposit} className="card-btn">Deposit</button>
                    </div>
                </div>
            </div>
            {/* <div className="crafting-card">
                <div className="crafting-card-header">Rewards</div>
                <div className="crafting-card-content">

                </div>
            </div> */}
        </div>
    )
}

export default Crafting;