import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import Logo from "./logo"
import NavLinks from "./nav-links"
import NavLinksGroup from "./nav-links-group"
import styles from "./styles/nav.module.css"

export default function Nav(props) {
    const [menuVisibility, setMenuVisibility] = useState(0)
    const showMenu = () => setMenuVisibility(1)
    const hideMenu = () => setMenuVisibility(0)

    return (
        <div className={styles.nav} >

            <Logo />

            <button 
            onClick={() => showMenu()}
            className={styles.button}
            >
                <Image src="/peach/menu.svg" height="25" width="25"/>
            </button>

            <div className={`${styles.menu} ${menuVisibility ? styles.visible : styles.hidden}`}>

                <button onClick={() => hideMenu()}>X</button>
                <NavLinks>
                    <Link href="/"><a>Home</a></Link>
                    <NavLinksGroup title="Other Designs" links={props.linkGroup} />
                </NavLinks>

            </div>

        </div>
    )
}
