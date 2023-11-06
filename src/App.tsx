import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Codefomulaire } from './Screens/Codeformulaire';
import { Codecv } from  './Screens/Codecv';
import { NavLink } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div  className='pageaccueil'>
      <header className='headeraccueil'>
        <img className='image-accueil' src="https://th.bing.com/th?id=OIP.xOncFp4SzGejuQ5lQ_5hRgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2" alt="une image de definition" />
        <nav>
          <NavLink className="pages-du-projet"  to="/">Formulaire </NavLink>
          <NavLink className="pages-du-projet"  to="/CV"> CV</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Codefomulaire />} />
        <Route path="/CV" element={<Codecv/>} />
      </Routes>
      <footer className='footer'>
          <h3>Edite par :Abderrazak & Hamza</h3>
          <h3>Derniere mise a jour :<time>Le 22 Octobre 2023</time></h3> 
          <h3>Copyright 2023</h3>
      </footer>
    </div>
  );
}

export default App;
