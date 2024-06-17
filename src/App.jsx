// Importaçoes p/ App.jsx
import { Routes, Route } from "react-router-dom"
import './App.css'



// Componentes 

import  {Header} from "./Components/Header"
import    Home   from './Components/Home'
import  Mission  from "./Components/Mission"
import  Product  from "./Components/Product"
import  History  from './Components/History'
import  {Contact} from "./Components/Contact"
import  Footer   from "./Components/Footer"


// Componentes 



function App() {

  return (
    <>
          <div>

<Header/>

<Routes>

  <Route path="/" element={<Home 
   nomePagina='Pagina Inicial'
   paginaPrincipal='Detalhes da Pagina Inicial'      
   />} />

  <Route path="/Mission" element={<Mission 
   nomePagina='Pagina Inicial da Missão'
   paginaPrincipal='Detalhes da Missão'
  />} />

  <Route path="/Product" element={<Product 
   nomePagina='Pagina Inicial do Produto'
   paginaPrincipal='Detalhes do Produto'
  />} />

  <Route path="/History" element={<History 
   nomePagina='Pagina Inicial da História '
   paginaPrincipal='Detalhes da História'
  />} />

  <Route path="/Contact" element={<Contact 
    nomePagina='Pagina Inicial da História '
    paginaPrincipal='Detalhes da História'
  />} />

</Routes>


<Footer  anoProducao='@2024'/>

</div>

    </>
  )
}

export default App
