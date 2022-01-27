import { useState } from 'react'

import Link from 'next/link'
import styles from './styles/nav-links-group.module.css'


export default function NavLinksGroup({ title, links }) {
    const [groupVisibility, setGroupVisibility] = useState(0)
    const toggleGroup = () => groupVisibility ? setGroupVisibility(0) : setGroupVisibility(1)
    
    return (
        <div>
            <button className={styles.button} onClick={() => toggleGroup()}>
                <text className={styles.title}>{title}</text>
            </button>
            <div className={`${groupVisibility ? styles.visible : styles.hidden}`}>
                {links.map(({ id, href }) => (
                    <Link key={id} href={href}><a>{id}</a></Link>
                ))}
            </div>
        </div>
    )
}
