import { useTheme } from '../../context/ThemeContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <i className={`fas fa-moon ${styles.moon} ${theme === 'light' ? styles.hidden : ''}`}></i>
            <i className={`fas fa-sun ${styles.sun} ${theme === 'dark' ? styles.hidden : ''}`}></i>
        </button>
    )
}
