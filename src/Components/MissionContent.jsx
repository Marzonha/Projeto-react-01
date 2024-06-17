import styles from './MissionContent.module.css';

export  function MissionContent() {
  return (
    <div className={styles.titleMissionContent}>
    <h3 className={styles.TMission}>Conteudo da Nossa Missão</h3>

    <p className={styles.pMission}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos assumenda commodi debitis, odit error laudantium doloremque numquam ullam rerum dolorum voluptatum accusamus. Pariatur consectetur, doloremque impedit harum voluptatibus sint.</p>

 {/* Add a primeira imagem, provavelmente com o tipo de carregamento lento */}
   <div>
     <img className={styles.Mimg} src="https://media.istockphoto.com/id/2147552556/pt/foto/alien-planet-with-hot-magma-and-asteroids-4k.jpg?s=2048x2048&w=is&k=20&c=KtuMaqk8r3AlokSXlFYSJTIyxR5sowfkySFIifjSoew=" alt="" />
    </div>
  </div>
  )
}

