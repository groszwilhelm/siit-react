import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing/Landing";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/404/404";
import CreateMovie from './components/CreateMovie/CreateMovie';
import EditMovie from './components/EditMovie/EditMovie';
import Register from './components/Register/Register';

import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import React, { useState } from 'react';

export const AuthContext = React.createContext();

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('accessToken'));

  return (
    <main>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Navigation />

        {/* Switch statement */}
        <Routes>
          {/* Switch cases */}
          <Route path="/" element={<Landing />} />
          <Route path="/movie-details/:idMovie" element={<MovieDetails />} />
          <Route path="create-movie" element={<CreateMovie />} />
          <Route path="edit-movie/:id" element={<EditMovie />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </main>
  );
}

export default App;
