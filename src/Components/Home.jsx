import {HomeContent} from './HomeContent';
 
function Home(props) {
    return (
      <div>
        <h1>{props.nomePagina}</h1>
        <p>{props.paginaPrincipal}</p>

        <HomeContent />

      </div>
    )
  }
  
  export default Home