import { useScrollReveal } from '../../hooks'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ label, title, description, highlight }) {
    const [ref, isVisible] = useScrollReveal()

    return (
        <div
            ref={ref}
            className={`${styles.sectionHeader} ${isVisible ? 'visible' : ''} reveal`}
        >
            <p className={styles.sectionLabel}>{label}</p>
            <h2 className={styles.sectionTitle}>
                {title.split(' ').map((word, i) => (
                    word === highlight ? <em key={i}>{word} </em> : `${word} `
                ))}
            </h2>
            {description && <p className={styles.sectionDesc}>{description}</p>}
        </div>
    )
}
