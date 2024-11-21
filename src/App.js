import NavBar from './component/navBar';
import About from './pages/About';
import Contact from './pages/contact';
import Acceuil from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import ThemeProvider from './utils/context/Context';
import GlobalStyle from './style/globalStyle';
import Footer from './component/Footer';
import Paniers from './pages/Panier';
import { useState } from 'react';
import { plantList } from './data/plantList';
import PanierContainer from './component/panier/PanierContainer';

function App() {

  const [active, setActive] = useState(null)
  const [ajout, setAjout] = useState([]);
  const [souhait, setSouhait] = useState([]);
  const handleAdd = (add)=> {
    setAjout(ajout => [...ajout, add])
    setActive(true)
  }
  const handleDelet = (id)=> {
    setAjout(item => item.filter(items => items.id !== id) )
    setActive(false)
  }
  const handleDeletSouh = (id)=> {
    setSouhait(item => item.filter(items => items.id !== id) )
    setActive(false)
  }
  const handleSouhait = (items, id)=> {
    setSouhait(item => [...item, items ])
    setActive()
  }

  console.log(active)

  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle/>
        <NavBar ajout={ajout} />
        <Routes>
          <Route path='/Paniers/:id' element={<PanierContainer 
              ajout={ajout} 
              onAdd={handleAdd}   
              onDelet={handleDelet} 
              souhait={souhait}
              Active={active}
              onDeleSouh={handleDeletSouh}

          />} />
          <Route path='/' element={<Acceuil onAdd = {handleAdd} Active={active} onSouhait={handleSouhait} />}/>
          <Route path='/Apropos' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
