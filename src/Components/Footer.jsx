import styles from './Footer.module.css'  

function Footer(props) {
  return (
    <footer className={styles.footer}>
        <h1>Página Footer</h1>
        <p>{props.anoProducao}</p>
    </footer>
  )
}

export default Footer