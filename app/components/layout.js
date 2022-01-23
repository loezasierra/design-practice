import Head from 'next/head'
import Link from 'next/link'

export default function Layout ({ children, home }) {
    return (
        <div>

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700;900&display=swap" rel="stylesheet" />
            </Head>

            {!home && (
                <div>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                    Inspired by <a href="https://prisma-ai.com/">Prisma Labs</a>.
                </div>
            )}

            <main>{children}</main>

        </div>
    )
}
