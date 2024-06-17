import styles from './Footer.module.css'  

function Footer(props) {
  return (
    <footer className={styles.footer}>
        <div className={styles.pfooter}>
          <a href="">Fale Conosco</a>
          <a  href="">Suporte</a>
          <a  href="">Comunidade</a>
        </div>
        <div className={styles.pfooter}>
          <a href="">Parceiros</a>
          <a href="">Redes Sociais</a>
          <a href="">Participe</a>
        </div>
        <p>{props.anoProducao}</p>
    </footer>
  )
}

export default Footer