import {Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Users from './pages/Users'
import Map from './pages/Map'
import Error404 from './pages/Error404'

import Login from './pages/forms/Login'
import Register from './pages/forms/Register'
import RecoveryPassword from './pages/forms/RecoveryPassword'

// USER
import User from './pages/User/User'
import UserGallery from './pages/User/Gallery'
import UserJournals from './pages/User/Journals'
import UserFollowing from './pages/User/Following'
import UserFollowers from './pages/User/Followers'
import UserFavorites from './pages/User/Favorites' // likes & stars (Def: public)

//import Layout from './components/Layout'

function App() {
  return(
    <div className="App">
      <Routes>
        {/* main page */}
        <Route path="/" element={ <Home/> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/map" element={ <Map /> }/>

        <Route path='*' element={ <Error404 /> } />
        
        {/* User */}
        <Route path="/user/:getUsername" element={ <User /> }/>
        <Route path="/user/:getUsername/gallery" element={ <UserGallery /> } />
        <Route path="/user/:getUsername/journals" element={ <UserJournals /> }/>
        <Route path="/user/:getUsername/following" element={ <UserFollowing /> }/>
        <Route path="/user/:getUsername/followers" element={ <UserFollowers /> }/>
        <Route path="/user/:getUsername/favorites" element={ <UserFavorites /> }/>

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
