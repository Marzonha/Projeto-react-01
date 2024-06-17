import {HistoryContent} from './HistoryContent';


function History(props) {
  return (
    <div>
      <h1>{props.nomePagina}</h1>
      <p>{props.paginaPrincipal}</p>

     <HistoryContent/>

    </div>
  )
}

export default History