import { useScrollReveal } from '../../hooks'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import styles from './Portfolio.module.css'

const works = [
    {
        image: '/assets/imgs/othe-imgs/11.jpg',
        title: 'Digital Composition',
        description: 'An exploration of form and color through digital media, creating visual narratives that blend traditional artistic principles with modern technology.',
    },
    {
        image: '/assets/imgs/othe-imgs/12.webp',
        title: 'Visual Study',
        description: 'A deep dive into visual storytelling, examining how composition and lighting interact to create compelling narratives in digital art.',
    },
    {
        image: '/assets/imgs/othe-imgs/13.png',
        title: 'Creative Piece',
        description: 'A multifaceted design project that combines illustration, typography, and interactive elements to deliver a unique visual experience.',
    },
]

export default function Portfolio() {
    const [headerRef, headerVisible] = useScrollReveal()

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div ref={headerRef} className={`${headerVisible ? 'visible' : ''} reveal`}>
                    <SectionHeader
                        label="Portfolio"
                        title="Selected Works"
                        highlight="Works"
                        description="A collection of creative projects spanning digital art, design, and visual storytelling."
                    />
                </div>
                <div className={styles.workCards}>
                    {works.map((work, index) => {
                        const [cardRef, isVisible] = useScrollReveal()
                        return (
                            <div
                                key={work.title}
                                ref={cardRef}
                                className={`${styles.workCard} ${isVisible ? 'visible' : ''} reveal reveal-delay-${index}`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.cardImage}>
                                        <img src={work.image} alt={work.title} />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{work.title}</h3>
                                        <p className={styles.cardDesc}>{work.description}</p>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardLabel}>
                                        <span>Selected Work</span>
                                    </div>
                                    <div className={styles.cardLinks}>
                                        <a href="#" className={styles.cardLink}>View Project</a>
                                        <a href="#" className={styles.cardLink}>Case Study</a>
                                        <a href="#" className={styles.cardLink}>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
