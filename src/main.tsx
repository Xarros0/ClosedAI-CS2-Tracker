import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import News from './components/news';
import Mainpage from './routes/mainpage';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}