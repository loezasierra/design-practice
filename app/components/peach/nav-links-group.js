import Link from 'next/link'
import styles from './styles/nav-links-group.module.css'


export default function NavLinksGroup({ title, links }) {
    return (
        <div>
            <text className={styles.title}>{title}</text>
            <div>
                {links.map(({ id, href }) => (
                    <Link key={id} href={href}><a>{id}</a></Link>
                ))}
            </div>
        </div>
    )
}
