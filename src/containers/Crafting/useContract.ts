import { useEffect, useState, useCallback } from "react"
import { useWeb3React } from "@web3-react/core";
import BigNumber from 'bignumber.js';

import { CRAFTING, MAX_UINT } from "../../shared/constants";

type Output = {
    allowance: BigNumber,
    balance: BigNumber,
    onApprove: ()=>void,
    updateBalance: ()=>void
}

export const useContract = (contract: any): Output => {
    const { account } = useWeb3React();

    const [allowance, setAllowance] = useState<BigNumber>(new BigNumber(0));
    const [balance, setBalance] = useState<BigNumber>(new BigNumber(0));

    const updateAllowance = useCallback(async () => {
        if(!!contract) {
            const allowance = await contract.methods.allowance(account, CRAFTING).call();
            const allowanceBN = new BigNumber(allowance);
    
            setAllowance(allowanceBN);
        }
    }, [account, contract]);

    const updateBalance = useCallback(async () => {
        if (!!contract) {
            const balance = await contract.methods.balanceOf(account).call();
            const decimals = await contract.methods.decimals().call();
    
            const balanceBN = new BigNumber(balance).div(10 ** decimals);
    
            setBalance(balanceBN)
        }
    }, [account, contract]);

    useEffect(() => {
        const update = async () => {
            await updateAllowance();
            await updateBalance();
        }
        
        update();
    }, [account, contract?.methods, updateAllowance, updateBalance]);

    const onApprove = useCallback(() => {
        if(!!contract) {
            contract.methods.approve(CRAFTING, MAX_UINT).send({ from: account }).then(() => {
                updateAllowance();
            });
        }
    }, [contract, updateAllowance, account]);

    return { balance, allowance, onApprove, updateBalance }
}