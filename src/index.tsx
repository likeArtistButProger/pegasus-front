import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';

const getLibrary = (provider: any) => {
  const web3 = new Web3(provider);
  // @ts-ignore
  web3.pollingInterval = 12000;

  return web3;
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ReactProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
