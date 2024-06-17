import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li><Link to="./">Home</Link></li>
        <li><Link to="./Mission">Missão</Link></li>
        <li><Link to="./Product">Produtos</Link></li>
        <li><Link to="./History">Nossa História</Link></li>
        <li><Link to="./Contact">Contato</Link></li>        
      </ul>
    </header>


  )
}