import React, { useEffect, useState } from 'react';

import { useWeb3React } from '@web3-react/core'; 
import { Header } from './components';
import CrafringAbi from '../../contracts/abis/crafting.json';
import ERC20Abi from '../../contracts/abis/erc20.json';
import { CRAFTING, x1, x2, x3, y, MAX_UINT } from '../../shared/constants';
import { Button } from '../../shared/components';
import BigNumber from 'bignumber.js';


function App() {
  const { account, library } = useWeb3React();
  const [crafting, setCrafting] = useState<any>(null);
  const [x1Contract, setX1Contract] = useState<any>(null);
  const [x2Contract, setX2Contract] = useState<any>(null);
  const [x3Contract, setX3Contract] = useState<any>(null);
  const [yContract, setYContract] = useState<any>(null);

  const [allowanceX1, setAllowanceX1] = useState<string>("0");
  const [allowanceX2, setAllowanceX2] = useState<string>("0");
  const [allowanceX3, setAllowanceX3] = useState<string>("0");
  const [allowanceY, setAllowanceY] = useState<string>("0");

  const [craftingBalanceX1, setCraftingBalanceX1] = useState<string>("0");
  const [craftingBalanceX2, setCraftingBalanceX2] = useState<string>("0");
  const [craftingBalanceX3, setCraftingBalanceX3] = useState<string>("0");
  const [craftingBalanceY, setCraftingBalanceY] = useState<string>("0");

  useEffect(() => {
    if(!!library) {
      const crafting = new library.eth.Contract(CrafringAbi, CRAFTING);
      const x1C = new library.eth.Contract(ERC20Abi, x1);
      const x2C = new library.eth.Contract(ERC20Abi, x2);
      const x3C = new library.eth.Contract(ERC20Abi, x3);
      const yC = new library.eth.Contract(ERC20Abi, y);

      setCrafting(crafting);
      setX1Contract(x1C);
      setX2Contract(x2C);
      setX3Contract(x3C);
      setYContract(yC);
    }
  }, [library]);

  const getRewards = () => {
    if(!!crafting && !!account) {

      crafting.methods.getAllAvailableRewards(account).call().then((res: any) => {
        console.log(res);
      }); 
     }
  }

  const onApprove = (c: string) => {
    switch(c) {
      case "x1":
        x1Contract?.methods?.approve(CRAFTING, MAX_UINT).send({ from: account });
        return;
      case "x2":
        x2Contract?.methods?.approve(CRAFTING, MAX_UINT).send({ from: account });
        return;
      case "x3":
        x3Contract?.methods?.approve(CRAFTING, MAX_UINT).send({ from: account });
        return;
      case "y":
        yContract?.methods?.approve(CRAFTING, MAX_UINT).send({ from: account });
        return;
      default:
        return;        
    }
  }

  useEffect(() => {
    x1Contract?.methods?.allowance(account, CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setAllowanceX1(resStr);
      });

    x2Contract?.methods?.allowance(account, CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setAllowanceX2(resStr);
      });
    
    x3Contract?.methods?.allowance(account, CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setAllowanceX3(resStr);
      });

    yContract?.methods?.allowance(account, CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setAllowanceY(resStr);
      });

    x1Contract?.methods?.balanceOf(CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setCraftingBalanceX1(resStr);
      });

    x2Contract?.methods?.balanceOf(CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setCraftingBalanceX2(resStr);
      });

    x3Contract?.methods?.balanceOf(CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setCraftingBalanceX3(resStr);
      });

    yContract?.methods?.balanceOf(CRAFTING).call()
      .then((res: any) => {
        const resStr = new BigNumber(res).toFixed();
        setCraftingBalanceY(resStr);
      });

  }, [x1Contract, x2Contract, x3Contract, yContract, account]);
  
  return (
    <div className="App">
      <Header />
      <Button onClick={getRewards}>Get Rewards</Button>
      
      <Button onClick={() => {onApprove('x1')}}>Approve X1</Button>
      <Button onClick={() => {onApprove('x2')}}>Approve X2</Button>
      <Button onClick={() => {onApprove('x3')}}>Approve X3</Button>
      <Button onClick={() => {onApprove('y')}}>Approve Y</Button>
      <div style={{"display": "grid", gridTemplateColumns: "1fr", "gap": 5, marginBottom: 10, marginTop: 10}}>
        <span>Allowance X1: {allowanceX1}</span>
        <span>Allowance X2: {allowanceX2}</span>
        <span>Allowance X3: {allowanceX3}</span>
        <span>Allowance Y: {allowanceY}</span>
      </div>
      <div style={{"display": "grid", gridTemplateColumns: "1fr", "gap": 5}}>
        <span>X1 Balance: {craftingBalanceX1}</span>
        <span>X2 Balance: {craftingBalanceX2}</span>
        <span>X3 Balance: {craftingBalanceX3}</span>
        <span>Y Balance: {craftingBalanceY}</span>
      </div>
    </div>
  );
}

export default App;
