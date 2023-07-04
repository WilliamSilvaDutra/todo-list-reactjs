import svgLogo from '../assets/svgLogo.svg';
import styles from './Header.module.css'
//
export function Header(){
   return(
        <header className={styles.containerHeader}>
            <img  className={styles.logoHeader} src={svgLogo} alt="Imagem do logo" />
            <div className={styles.titleHeader}>
                <span>to</span>
                <span>do</span>
            </div>
        </header>
   )
}