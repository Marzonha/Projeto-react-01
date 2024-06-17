import styles from "./HomeContent.module.css";

export  function HomeContent() {
  return (
    <div className={styles.titleHomeContent}>
    <h3 className={styles.THome}>Conteudo do home</h3>
    <p className={styles.txtHome}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos assumenda commodi debitis, odit error laudantium doloremque numquam ullam rerum dolorum voluptatum accusamus. Pariatur consectetur, doloremque impedit harum voluptatibus sint.</p>
 
 {/* Add a primeira imagem, provavelmente com o tipo de carregamento lento */}
     <div className={styles.timg}>
     <img src="https://media.istockphoto.com/id/1587601513/pt/foto/international-day-of-human-space-flight-cosmonautics-day-concept.jpg?s=2048x2048&w=is&k=20&c=gaL98rIH-pid8S1LB89y7f6z64RAuUxm5qg-65tAQAE=" alt="" />
     </div>
 </div>
  )
}

