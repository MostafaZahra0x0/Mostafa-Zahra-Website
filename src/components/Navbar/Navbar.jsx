import { useNavbarScroll } from '../../hooks'
import styles from './Navbar.module.css'

export default function Navbar({ onMenuToggle, mobileMenuOpen }) {
    const isScrolled = useNavbarScroll(50)

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navInner}>
                    <a href="#home" className={styles.navBrand} onClick={(e) => handleNavClick(e, 'home')}>
                        <img src="/assets/icons/other-icons/mostafa-logo.svg" alt="MZ" className={styles.logoImg} />
                    </a>
                    <ul className={styles.navLinks}>
                        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                        <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
                        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                    </ul>
                    <button
                        className={`${styles.navToggle} ${mobileMenuOpen ? styles.active : ''}`}
                        onClick={onMenuToggle}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
