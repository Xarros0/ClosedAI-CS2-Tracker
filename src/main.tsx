import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './routes/login';
import Signup from './routes/signup';
import Profile from './routes/profile';
import Search from './routes/search';
import Settings from './routes/settings';
import ForumCatalog from './routes/forumCatalog';
import Forum from './routes/forum';
import NewsCatalog from './routes/newsCatalog';
import News from './routes/news';
import TopTeam from './routes/topteam';
import Team from './routes/team';
import TopPlayer from './routes/topplayer';
import Player from './routes/player';
import EventsCatalog from './routes/eventsCatalog';
import Events from './routes/events';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forumcatalog" element={<ForumCatalog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/newscatalog" element={<NewsCatalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/topteam" element={<TopTeam />} />
          <Route path="/team" element={<Team />} />
          <Route path="/topplayer" element={<TopPlayer />} />
          <Route path="/player" element={<Player />} />
          <Route path="/eventscatalog" element={<EventsCatalog />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}