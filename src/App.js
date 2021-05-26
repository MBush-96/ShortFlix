import './App.css';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Nav from './components/nav'
import AddFilm from './pages/addfilm'
import Films from './pages/films'
import PlayFilm from './pages/playfilm'
import Profile from './pages/profile'
import { Redirect, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [userEmail, setUserEmail] = useState('')

  return (
    <div className="App">
      <Nav />

      <Route
        exact
        path='/'
        render={() => {
          if(localStorage.getItem('userId')) {
            return <Redirect to='/films' />
          }
          return <Home setUserEmail={setUserEmail} />
        }}
      />

      <Route
        exact
        path='/login'
        render={() => (
          <Login />
        )}
      />

      <Route
        exact
        path='/signup'
        render={() => (
          <Signup userEmail={userEmail} />
        )}
      />

      <Route
        exact
        path='/newfilm'
        render={() => {
          if(localStorage.getItem('userId')) {
            return <AddFilm />
          }
          return <Redirect to='/login' />
        }}
      />

      <Route
        exact
        path='/films'
        render={() => {
          if(localStorage.getItem('userId')) {
            return <Films />
          }
          return <Redirect to='/login' />
        }}
      />

      <Route
        exact
        path='/movie/:id'
        render={rProps => {
          if(localStorage.getItem('userId')) {
            return <PlayFilm rProps={rProps.match.params.id} />
          }
          return <Redirect to='/login' />
        }}
      />

      <Route
        exact
        path='/profile'
        render={() => (
          <Profile />
        )}
      />
    </div>
  );
}

export default App;
