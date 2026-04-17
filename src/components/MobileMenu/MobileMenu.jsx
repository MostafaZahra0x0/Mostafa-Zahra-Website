import { useEffect } from 'react'
import styles from './MobileMenu.module.css'

export default function MobileMenu({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        onClose()
        setTimeout(() => {
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
        }, 300)
    }

    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        </div>
    )
}
