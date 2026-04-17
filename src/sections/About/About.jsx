import { useScrollReveal } from '../../hooks'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import styles from './About.module.css'

const skills = [
    'Programming', 'UI/UX Design', 'Web Development',
    'Philosophy', 'History', 'Creative Writing',
    'Digital Art', 'Poetry'
]

export default function About() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.aboutGrid}>
                    <div
                        ref={ref}
                        className={`${styles.aboutImageWrapper} ${isVisible ? 'visible' : ''} reveal`}
                    >
                        <div className={styles.aboutImage}>
                            <img src="/assets/imgs/othe-imgs/1765475567070 (2).webp" alt="About Mostafa" />
                        </div>
                        <div className={styles.aboutImageAccent}></div>
                    </div>
                    <div className={styles.aboutContent}>
                        <SectionHeader label="About" title="Who I Am" highlight="Am" />
                        <h3 className={styles.aboutSubtitle}>A Journey Through Disciplines</h3>
                        <p className={styles.aboutText}>
                            I'm a passionate seeker of knowledge across many domains. My journey has led me through the worlds of programming and design, while always maintaining a deep connection to the humanities—philosophy, history, literature, and poetry.
                        </p>
                        <p className={styles.aboutText}>
                            I believe that the most meaningful work emerges at the intersection of seemingly disparate fields. Whether crafting elegant code or contemplating ancient wisdom, I bring the same dedication to excellence and attention to detail.
                        </p>
                        <div className={styles.skillsList}>
                            {skills.map((skill) => (
                                <span key={skill} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
