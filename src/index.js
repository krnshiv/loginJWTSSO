import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
  domain='dev-hmptrq0apdwctzne.us.auth0.com'
  clientId='creGcDVFv1S1C2qBXFXW6pcaQ4xbizap'
  authorizationParams={{
    redirect_uri:'http://localhost:3000'
  }}>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>
  </Auth0Provider>
);
