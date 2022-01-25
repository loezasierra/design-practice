import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import Logo from "./logo"
import NavLinks from "./nav-links"
import NavLinksGroup from "./nav-links-group"
import styles from "./styles/nav.module.css"
import utils from "./styles/peach.module.css"

export default function Nav(props) {
    const [menuVisibility, setMenuVisibility] = useState(0)
    const toggleMenu = () => menuVisibility ? setMenuVisibility(0) : setMenuVisibility(1)

    return (
        <div className={styles.nav} >

            <Logo />

            <button 
            onClick={() => toggleMenu()}
            className={`${styles.button} ${styles.menuButton} ${menuVisibility ? styles.activeButton : ""}`}
            >
                <Image src="/peach/menu.svg" height="25" width="25"/>
            </button>

            <div className={`${styles.menu} ${menuVisibility ? styles.visible : styles.hidden} ${utils.textX2}`}>

                <NavLinks>
                    <Link href="/"><a>Home</a></Link>
                    <NavLinksGroup title="Designs" links={props.linkGroup} />
                </NavLinks>

            </div>

        </div>
    )
}
