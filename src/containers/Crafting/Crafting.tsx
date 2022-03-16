import React, { useCallback, useEffect, useMemo, useState } from "react";
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
    const [rewards, setRewards] = useState<any[]>([]);
    const [craftingTime, setCraftingTime] = useState<number>(1);

    const pgc0 = useContract(Pgc0);
    const pgr1 = useContract(Pgr1);
    const pgsv = useContract(Pgsv);
    
    const usableCoins = useMemo(() => [
        {title: "PGC0", ...pgc0, amount: amountPGC0, setAmount: setAmountPGC0},
        {title: "PGR1", ...pgr1, amount: amountPGR1, setAmount: setAmountPGR1},
        {title: "PGSV", ...pgsv, amount: amountPGSV, setAmount: setAmountPGSV}
    ], [amountPGC0, amountPGR1, amountPGSV, pgc0, pgr1, pgsv]);

    const updateRewards = useCallback(() => {
        Crafting.methods.getAllAvailableRewards(account).call().then((res: any) => {
            setRewards(res);
        })
    }, [Crafting, account]);

    const onDeposit = useCallback(async () => {
        if(!!Crafting && !!Pgc0 && !!Pgr1 && !!Pgsv) {
            const pgc0Decimals = await Pgc0.methods.decimals().call();
            const pgr1Decimals = await Pgr1.methods.decimals().call();
            const pgsvDecimals = await Pgsv.methods.decimals().call();

            const depositAmountPgco0 = new BigNumber(amountPGC0).times(10 ** pgc0Decimals).toFixed();
            const depositAmountPgr1 = new BigNumber(amountPGR1).times(10 ** pgr1Decimals).toFixed();
            const depositAmountPgsv = new BigNumber(amountPGSV).times(10 ** pgsvDecimals).toFixed();

            const gas = await Crafting.methods.deposit(depositAmountPgco0, depositAmountPgr1, depositAmountPgsv).estimateGas({ from: account });

            Crafting.methods
                .deposit(depositAmountPgco0, depositAmountPgr1, depositAmountPgsv)
                .send({ from: account, gas: gas })
                .then(() => {
                    usableCoins.forEach(coin => coin.updateBalance())
                    updateRewards();
                })
        }
    }, [Crafting, Pgc0, Pgr1, Pgsv, account, amountPGC0, amountPGR1, amountPGSV, usableCoins, updateRewards]);

    const onCollect = async (rewardId: number) => {
        if(!!Crafting && !!account) {
            // const gas = await Crafting.methods.claimReward(rewardId).estimateGas({ from: account });

            // console.log(gas);
            
            Crafting.methods.claimReward(rewardId).send({ from: account, gas: 220000}).then(() => {
                updateRewards();
                usableCoins.forEach(coin => {
                    coin.updateBalance();
                });
            })
        }
    }

    useEffect(() => {
        if(!!Crafting) {
            if (!!account) {
                Crafting.methods.craftingTime().call().then((res: number) => {
                    setCraftingTime(res);
                });

                updateRewards();
            }
        }
    }, [Crafting, account, updateRewards]);

    const formattedRewards = useMemo(() => {
        return rewards.map((reward) => {
            const { id, rewardX1, rewardY, collectedRewardX1, collectedRewardY, lockTime } = reward;

            const leftPGC0 = new BigNumber(rewardX1)
                .minus(new BigNumber(collectedRewardX1))
                .div(10 ** 8)
                .toNumber()
                .toFixed(5);

            const leftPGC = new BigNumber(rewardY)
                .minus(new BigNumber(collectedRewardY))
                .div(10 ** 8)
                .toNumber()
                .toFixed(5);
            
            const rewardLockTime = parseInt(lockTime) * 1000;
            const craftingTimeInMilliseconds = new BigNumber(craftingTime).times(1000).toNumber();
            const now = new Date().getTime();

            const timeDelta = now >= (rewardLockTime + craftingTimeInMilliseconds) ? craftingTimeInMilliseconds : now - rewardLockTime;
            const allocatedRewardX1 = new BigNumber(rewardX1)
                .times(timeDelta)
                .div(craftingTimeInMilliseconds)
                .minus(collectedRewardX1)
                .div(10 ** 8)
                .toNumber()
                .toFixed(5);

            const allocatedRewardY = new BigNumber(rewardY)
                .times(timeDelta)
                .div(craftingTimeInMilliseconds)
                .minus(collectedRewardY)
                .div(10 ** 8)
                .toNumber()
                .toFixed(5);

            console.table({
                id,
                allocatedRewardX1,
                allocatedRewardY,
                leftPGC0,
                leftPGC,
                rewardX1,
                rewardY,
                craftingTimeInMilliseconds,
                now,
                rewardLockTime,
                timeDelta,
            });
            
            return {
                id: parseInt(id),
                leftPGC0,
                leftPGC,
                allocatedRewardX1,
                allocatedRewardY
            }
        }).filter((reward) => {
            const leftPGC0 = new BigNumber(reward.leftPGC0);
            const leftPGC = new BigNumber(reward.leftPGC);
            const allocatedRewardX1 = new BigNumber(reward.allocatedRewardX1);
            const allocatedRewardY = new BigNumber(reward.allocatedRewardY);

            return ((leftPGC0.gt(0) || leftPGC.gt(0)) && (allocatedRewardX1.gte(0) || allocatedRewardY.gte(0)));
        })
    }, [rewards, craftingTime]);

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
            
            <div className="crafting-card">
                <div className="crafting-card-header">Rewards</div>
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
                                                Claim
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
        
    )
}

export default Crafting;