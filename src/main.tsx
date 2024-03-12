import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Mainpage from './routes/mainpage';
import Login from './routes/login';
import Signup from './routes/signup';
import Profile from './routes/profile';
import Search from './components/search';
import Settings from './routes/settings';
import ForumCatalog from './components/forumCatalog';
import Forum from './components/forum';
import NewsCatalog from './components/newsCatalog';
import News from './components/news';
import TeamRanking from './components/teamranking';
import Team from './components/team';
import PlayerRanking from './components/playerranking';
import Player from './components/player';
import EventsCatalog from './components/eventsCatalog';
import Events from './components/events';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forumcatalog" element={<ForumCatalog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/newscatalog" element={<NewsCatalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/teamranking" element={<TeamRanking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/playerranking" element={<PlayerRanking />} />
          <Route path="/player" element={<Player />} />
          <Route path="/eventscatalog" element={<EventsCatalog />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}