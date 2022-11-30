import React, { useState } from 'react'
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import NavBar from '../../components/NavBar/NavBar';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import { Routes, Route } from 'react-router-dom';


export default function App() {

  const [user, setUser] = useState(null)
  
  const handleSubmit = (evt, updateUser) => {
    evt.preventDefault();
    setUser(updateUser)
  }



  // fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=George%20Clooney&prop=pageimages&format=json&pithumbsize=250')
  //  .then(response => response.json())
  //  .then(data => console.log(data))

  return (
    <div>
        <NavBar user={user}/>

        <main className="App">
        {console.log(user)}
          <Routes>
        {user ? <>
                {console.log(user)},
            <Route path="/" element={<MoviesListPage name={user.name}/>}/>
            <Route path="/actors" element={<ActorsListPage />}/>
            <Route path="/:movieName" element={<MovieDetailPage />}/>

        </>
         :

            <Route path="/" element={<LoginPage setProfile={handleSubmit}/>}/>
        }
          </Routes>      
        </main>    
    </div>
  );
}
