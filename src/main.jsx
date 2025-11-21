import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { AuthProvider } from "./contexts/authContext.jsx";   // ← Import provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>        {/* ← Wrap here */}
      <App />
    </AuthProvider>
  </StrictMode>
);
