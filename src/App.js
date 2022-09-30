import './App.css';
import Home from './pages/Home/Home';
import { Route, Link } from "wouter"
import Navbar from "./components/Navbar/Navbar"
import Proyects from "./pages/Proyects/Proyects"
import Footer from './components/Footer/Footer';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
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
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
