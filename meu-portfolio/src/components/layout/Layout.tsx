import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Outlet é importante!
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  const location = useLocation(); // Para saber a rota atual

  // Helper para verificar se o link está ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <> {/* Fragmento React */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navBrand}>
            <Link to="/" className={styles.brandLink}>MeuSite</Link>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/" 
                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/portfolio" 
                className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`}
              >
                Portfólio
              </Link>
            </li>
            {/* Adicione mais links aqui no futuro (ex: /sobre, /contato) */}
          </ul>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <Outlet /> {/* Outlet renderiza o componente da rota filha atual */}
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Seu Nome Aqui. Construído com React.</p>
      </footer>
    </>
  );
};

export default Layout;