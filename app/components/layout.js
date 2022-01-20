import Head from 'next/head'
import Link from 'next/link'

export default function Layout ({ children, home }) {
    return (
        <div>

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>

            {!home && (
                <div>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </div>
            )}

            <main>{children}</main>

        </div>
    )
}
