import React from 'react';
import { useWeb3React } from '@web3-react/core';

import CreftingAbi from '../contracts/abis/crafting.json';
import ERC20Abi from '../contracts/abis/erc20.json';
import { CRAFTING, PGC0, PGR1, PGSV, PGC } from '../shared/constants'

const EthereumContext = React.createContext({});

type Props = {
    children: React.ReactNode
}

function EthereumProvider({children}: Props) {
    const { account, chainId, library } = useWeb3React();
    const [contextValue, setContextValue] = React.useState({});

    const initialize = async (account: any) => {
        console.log("Initializing Ethereum Provider for", account);
        const provider = library;

        if(!provider) {
            return;
        }

        const Crafting = new library.eth.Contract(
            CreftingAbi,
            CRAFTING,
        );

        const Pgc0 = new library.eth.Contract(
            ERC20Abi,
            PGC0,
        );

        const Pgr1 = new library.eth.Contract(
            ERC20Abi,
            PGR1,
        );

        const Pgsv = new library.eth.Contract(
            ERC20Abi,
            PGSV,
        );

        setContextValue({account, Crafting, Pgc0, Pgr1, Pgsv});
    }

    React.useEffect(() => {
        initialize(account);
    }, [account, chainId]);

    return (
        <EthereumContext.Provider value={contextValue}>
            {children}
        </EthereumContext.Provider>
    )
}

function useEthereum() {
    return React.useContext(EthereumContext);
}

export {EthereumProvider, useEthereum};