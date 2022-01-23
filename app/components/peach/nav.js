import Link from "next/link"
import Logo from "./logo"
import NavLinks from "./nav-links"
import NavLinksGroup from "./nav-links-group"
import styles from "./styles/nav.module.css"

export default function Nav(props) {
    return (
        <div class={styles.nav} >
            <Logo />
            <NavLinks>
                <Link href="/"><a>Home</a></Link>
                <NavLinksGroup title="Other Designs" links={props.linkGroup} />
            </NavLinks>
        </div>
    )
}
