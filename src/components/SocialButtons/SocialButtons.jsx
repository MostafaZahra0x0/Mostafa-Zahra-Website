import styles from './SocialButtons.module.css'

const socials = [
    { href: 'https://github.com/MustafaZahra101', icon: 'fa-github', label: 'GitHub' },
    { href: 'https://www.instagram.com/mostafazahra.null/', icon: 'fa-instagram', label: 'Instagram' },
    { href: 'https://x.com', icon: 'fa-x-twitter', label: 'X' },
    { href: 'mailto:mostafazahra.null@gmail.com', icon: 'fa-envelope', label: 'Gmail' },
    { href: 'https://t.me/MostafaZahraNull', icon: 'fa-telegram', label: 'Telegram' },
    { href: 'https://youtube.com/@mostafazahra101', icon: 'fa-youtube', label: 'YouTube' },
    { href: 'https://www.reddit.com/user/mostafazahra-null/', icon: 'fa-reddit', label: 'Reddit' },
]

export default function SocialButtons({ className }) {
    return (
        <div className={`${styles.socialButtons} ${className || ''}`}>
            {socials.map((social) => (
                <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={social.label}
                >
                    <i className={`fab ${social.icon}`}></i>
                </a>
            ))}
        </div>
    )
}
