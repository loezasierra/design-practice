import Link from "next/link"
import Logo from "./logo"
import NavLinks from "./nav-links"

export default function Nav() {
    return (
        <div>
            <Logo />
            <NavLinks>
                <Link href="/"><a>Home</a></Link>
            </NavLinks>
        </div>
    )
}
