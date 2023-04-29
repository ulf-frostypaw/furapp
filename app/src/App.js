/* FIREBASE CONFIG RES */
//import {app_firebase} from './fb'

import {Route, Routes } from 'react-router-dom'
import './App.css'

import Blog from './pages/blog/Blog'
import Home from './pages/Home'
import Users from './pages/Users'
import Map from './pages/Map'
import Error404 from './pages/Error404'

// USER
import User from './pages/User/User'
import UserGallery from './pages/User/Gallery'
import UserJournals from './pages/User/Journals'
import UserFollowing from './pages/User/Following'
import UserFollowers from './pages/User/Followers'
import UserFavorites from './pages/User/Favorites' // likes & stars (Def: public)
import { useEffect, useState } from 'react'

import { useAppFirebase } from './fb'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    useAppFirebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(false)
        
      }
    })
  }, [])

  return(
    <div className="App">
      <Routes>
        {/* main page */}
        <Route path="/" isActive exact element={ <Home user={''} /> } />
        <Route path='/blog' exact element={<Blog />} />
        <Route path="/users" isActive exact element={ <Users /> } />
        <Route path="/map" isActive exact element={ <Map /> }/>
        
        <Route path='/user/:username' element={<User />} />
        {/* User */}
        <Route path="/user/:username" element={ <User /> }/>
        <Route path="/user/:username/gallery" element={ <UserGallery /> } />
        <Route path="/user/:username/journals" element={ <UserJournals /> }/>
        <Route path="/user/:username/following" element={ <UserFollowing /> }/>
        <Route path="/user/:username/followers" element={ <UserFollowers /> }/>
        <Route path="/user/:username/favorites" element={ <UserFavorites /> }/>
        <Route path="/user/:username/albums" element={ <UserFollowers /> }/>
        <Route path="/user/:username/goals" element={ <UserFavorites /> }/> {/* PARA LOGROS - V1.1*/}


        {/* about page */}
        
        {/* settings/controls page */}
  
      <Route path='*' element={ <Error404 /> } />
      </Routes>
    </div>
  )
}
export default App;
