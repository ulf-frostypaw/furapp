import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Map from './pages/Map'

import Login from './pages/forms/Login'
import Register from './pages/forms/Register'
import RecoveryPassword from './pages/forms/RecoveryPassword'
import User from './pages/User/User'

//import Layout from './components/Layout'

function App() {
  return(
    <div className="App">
      <Routes>
        {/* main page */}
        <Route path="/" element={ <Home/> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/map" element={ <Map /> }/>
        
        <Route path="/user/:getUsername" element={ <User /> }/>

        {/* forms */}
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
        <Route path='/reset_password' component={<RecoveryPassword />} />

        {/* about page */}
        
        {/* settings/controls page */}
      </Routes>
    </div>
  )
}

export default App;
