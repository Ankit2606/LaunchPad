import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home';
import CreateToken from './pages/CreateToken';
import ManageToken from './pages/ManageToken';
import DistributeToken from './pages/DistributeToken';
import CreateTokenSale from './pages/CreateTokenSale';
import ManageTokenSale from './pages/ManageTokenSale';
import CreateNFT from './pages/CreateNFT';
import ManageNFT from './pages/ManageNFT';
import DistributeNFT from './pages/DistributeNFT';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="createToken" element={<CreateToken />} />
      <Route path="manageToken" element={<ManageToken />} />
      <Route path="distributeToken" element={<DistributeToken />} />
      <Route path="createTokenSale" element={<CreateTokenSale />} />
      <Route path="manageTokenSale" element={<ManageTokenSale />} />
      <Route path="createNFT" element={<CreateNFT />} />
      <Route path="manageNFT" element={<ManageNFT />} />
      <Route path="distributeNFT" element={<DistributeNFT />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
