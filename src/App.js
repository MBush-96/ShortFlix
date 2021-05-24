import logo from './logo.svg';
import './App.css';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Nav from './components/nav'
import { Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [userEmail, setUserEmail] = useState('')

  return (
    <div className="App">
      <Nav />

      <Route
        exact
        path='/'
        render={() => (
          <Home setUserEmail={setUserEmail} />
        )}
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
    </div>
  );
}

export default App;
