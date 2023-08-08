import Link from "next/link";
import styles from '../../styles/Header.module.css'

const Header = () => {



  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          HappiPet
        </Link>
      </h1>
      <nav aria-label="main" className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/newpet">
              New Pet
            </Link>
          </li>
          <li>
            <Link href="/game">
              Game
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
    
  ) 
};

export default Header;
