import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';

import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';




function App(props) {

  return (
      
      <div className={'app-wraper'}>
        <Header />
        <Nav state={ props.state.sideBar } />
        <div className={'app-wraper-content'}>
          <Routes>
            <Route path={'/profile'} element={<Profile 
                                              state={ props.state.profilePage }
                                              dispatch = {props.dispatch} />} />
            <Route path={'/dialogs/*'} element={<Dialogs state={ props.state.dialogsPage } />} />
            <Route path={'/news'} element={<News />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
