import {MissionContent} from './MissionContent';

 function Mission(props) {
  return (
    <div>
        <h1>{props.nomePagina}</h1>
        <p>{props.paginaPrincipal}</p>

        <MissionContent/>
        
    </div>
  )
}

export default Mission