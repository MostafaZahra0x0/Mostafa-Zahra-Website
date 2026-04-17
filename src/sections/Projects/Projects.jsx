import { useScrollReveal } from '../../hooks'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import styles from './Projects.module.css'

const projects = [
    {
        number: '01',
        icon: 'fa-cloud',
        title: 'Cloudflare Workers',
        description: 'Serverless applications and edge computing projects deployed globally for optimal performance.',
    },
    {
        number: '02',
        icon: 'fa-globe',
        title: 'Web Development',
        description: 'Modern websites and web applications built with contemporary tools and best practices.',
    },
    {
        number: '03',
        icon: 'fa-pen-ruler',
        title: 'UI/UX Design',
        description: 'User-centered design solutions crafted with intention, care, and attention to detail.',
    },
    {
        number: '04',
        icon: 'fa-robot',
        title: 'Automation',
        description: 'Scripts and tools that streamline workflows and boost productivity efficiently.',
    },
]

export default function Projects() {
    const [headerRef, headerVisible] = useScrollReveal()

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <div ref={headerRef} className={`${headerVisible ? 'visible' : ''} reveal`}>
                    <SectionHeader
                        label="Projects"
                        title="Technical Work"
                        highlight="Work"
                        description="Building tools, experiments, and applications across the modern web ecosystem."
                    />
                </div>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => {
                        const [cardRef, isVisible] = useScrollReveal()
                        return (
                            <div
                                key={project.number}
                                ref={cardRef}
                                className={`${styles.projectCard} ${isVisible ? 'visible' : ''} reveal reveal-delay-${index}`}
                            >
                                <span className={styles.projectNumber}>{project.number}</span>
                                <div className={styles.projectIcon}>
                                    <i className={`fas ${project.icon}`}></i>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <a href="#" className={styles.projectLink}>
                                    View Project <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
