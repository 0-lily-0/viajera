import React  from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Encabezado from './components/layout/Encabezado';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Acercade from './pages/Acercade';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Novedades from './pages/Novedades';
import Tips from './pages/Tips'; 
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faUser, faEnvelope, faComment);

function App() {
    return (
      <div className="App">
        <Encabezado></Encabezado>      
        <BrowserRouter>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Acercade' exact component={Acercade} />
               <Route path='/Galeria' component={Galeria} />
              <Route path='/Contacto' component={Contacto} />
              <Route path='/Novedades' component={Novedades} />   
              <Route path='/Tips' component={Tips} />                             />              
          </Switch>
        </BrowserRouter> 
        <Footer></Footer>       
      </div>   
    );
  }

export default App;


