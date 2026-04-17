import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

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
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <span className={styles.footerBrand}>Mostafa Zahra</span>
                    <p className={styles.footerText}>&copy; {currentYear} Mostafa Zahra. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                        <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
