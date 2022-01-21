import Head from "next/head"

import Layout from "../../components/layout"
import Nav from "../../components/peach/nav"
import Jumbotron from "../../components/peach/jumbotron"
import LabeledSection from "../../components/peach/labeled-section"


export default function Peach() {
    return (
        <Layout>

            <Head>
                <title>Peach</title>
                <link rel="icon" type="image/png" href="/peach/favicon.png" />
            </Head>

            <Nav />

            <Jumbotron />

            <LabeledSection title="Hello, World.">
                <p>I'm part of the labeled section.</p>
            </LabeledSection>

        </Layout>
    )
}
