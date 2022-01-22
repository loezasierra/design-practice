import Link from 'next/link'


export default function NavLinksGroup({ title, links }) {
    return (
        <div>
            <text>{title}</text>
            <div>
                {links.map(({ id, href }) => (
                    <Link key={id} href={href}><a>{id}</a></Link>
                ))}
            </div>
        </div>
    )
}
