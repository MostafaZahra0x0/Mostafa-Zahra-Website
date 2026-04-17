import { useEffect, useState } from 'react'
import SocialButtons from '../../components/SocialButtons/SocialButtons'
import styles from './Hero.module.css'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <p className={styles.heroLabel}>Hello, I'm</p>
                        <h1 className={styles.heroTitle}>
                            Mostafa <em>Zahra</em>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            A multidisciplinary creator exploring the intersection of technology, art, and human thought. I build things that matter.
                        </p>
                        <div className={styles.heroRoles}>
                            <span className={styles.roleTag}>Programmer</span>
                            <span className={styles.roleTag}>Designer</span>
                            <span className={styles.roleTag}>Artist</span>
                            <span className={styles.roleTag}>Philosopher</span>
                            <span className={styles.roleTag}>Historian</span>
                            <span className={styles.roleTag}>Poet</span>
                        </div>
                        <div className={styles.heroCta}>
                            <a href="#portfolio" className={styles.btnPrimary}>
                                View Work <i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#contact" className={styles.btnSecondary}>
                                Get In Touch
                            </a>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <img src="/assets/imgs/othe-imgs/personal.webp" alt="Mostafa Zahra" />
                        </div>
                        <div className={styles.heroDecoration}></div>
                        <div className={styles.heroSocials}>
                            <SocialButtons />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
