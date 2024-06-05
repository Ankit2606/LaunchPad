import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

const projectId = '2fa6c12dde1b5cd1a88e4fd4cb690bca'

const sepolia = {
  chainId: 11155111,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io/',
  rpcUrl: 'https://eth-sepolia.public.blastapi.io'
}

const BNBTestnet = {
  chainId: 97,
  name: 'BSC Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://testnet.bscscan.com/',
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}

const AmoyTestnet = {
  chainId: 80002,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://sepolia.etherscan.io/',
  rpcUrl: 'https://amoy.polygonscan.com/'
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', 
  icons: ['https://avatars.mywebsite.com/']
}

const ethersConfig = defaultConfig({
  metadata
})

createWeb3Modal({
  ethersConfig,
  chains: [sepolia,BNBTestnet,AmoyTestnet],
  projectId,
  enableAnalytics: true
})
function App() {
  return (
    <>
    <Navbar />
    
    </>
  );
}

export default App;
