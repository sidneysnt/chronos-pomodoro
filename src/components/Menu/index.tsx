import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes;
    return savedTheme || 'dark';
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Nao segue o link (nao navega)
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
    // document.documentElement.setAttributes(' data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('userEffect sem dependencia', Date.now());
  // }); //Executado toda vez que o componente renderiza na tela.

  // useEffect(() => {
  //   console.log('userEffect c/array de dependencias vazio', Date.now());
  // }, []); //Executado apenas uma vez quando o componente for montado pela primeira vez.

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {
      console.log('Olha, este componente sera atualizado - Clean up');
    };
  }, [theme]); // Executa apenas quando o valor de 'theme' mudar.

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

export default Menu;
