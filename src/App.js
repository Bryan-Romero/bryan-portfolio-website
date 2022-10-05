import './App.css';
import Home from './pages/Home/Home';
import { Route, Link, useLocation } from "wouter"
import Navbar from "./components/Navbar/Navbar"
import Proyects from "./pages/Proyects/Proyects"
import Footer from './components/Footer/Footer';
import React, { createContext, useEffect, useState } from 'react';
import pngegg from "./images/pngegg.png"
import ProyectDetail from './pages/ProyectDetail/ProyectDetail';

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [location])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <div className="itemsContainer">
          <picture className='imgBackgrondContainer'>
            <img className='imgBackgrond' src={pngegg} alt='imgBackgrond'/>
            {
              location[0] === '/' && <p className="firstText">Hola, soy un desarrollador de aplicaciones web en México!</p>
            }
          </picture>
          <Route 
            path="/"
            component={Home}
          />
          <Route 
            path='/404'
            component={() => <h1>Error 404 :( <Link to='/'>home</Link></h1>}
          />
          <Route 
            path='/proyects'
            component={Proyects}
          />
          <Route 
            path='/proyect-detail/:proyectName'
            component={ProyectDetail}
          />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
