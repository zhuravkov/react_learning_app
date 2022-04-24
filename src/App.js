import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';



import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeThunk } from './redux/appReduser';
import Preloader from './components/common/Preloader';


import { withSuspense } from './components/hoc/withSuspense';
// import UsersContainer from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
  componentDidMount() {

    this.props.initializeThunk();
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    

  return (
      
      <div className={'app-wraper'}>
        <HeaderContainer />
        <Nav />
        <div className={'app-wraper-content'}>
          <Routes>
            <Route path={'/profile'} element={<ProfileContainer  />} />
            <Route path={'/profile/:userId'} element={<ProfileContainer  />} />


            <Route path={'/dialogs/*'} element={ withSuspense(DialogsContainer) } /> 



            <Route path={'/users/*'} element={ withSuspense(UsersContainer) } /> 




            
            <Route path={'/news'} element={<News />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/settings'} element={<Settings />} />
            <Route path={'/login'} element={<Login />} />

          </Routes>
        </div>
      </div>
    
  );
}
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized,
});

export default connect (mapStateToProps, {initializeThunk})(App);
