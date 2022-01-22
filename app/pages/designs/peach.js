import Head from "next/head"
import Layout from "../../components/layout"
import Nav from "../../components/peach/nav"
import Jumbotron from "../../components/peach/jumbotron"
import LabeledSection from "../../components/peach/labeled-section"
import Clients from "../../components/peach/clients"

import { getFileNamesAndIDs } from "../../lib/publicFiles"


export default function Peach({ clientImages }) {
    return (
        <Layout>

            <Head>
                <title>Peach</title>
                <link rel="icon" type="image/png" href="/peach/favicon.png" />
            </Head>

            <Nav />

            <Jumbotron />

            <LabeledSection title="Stores">
                <Clients images={clientImages} />
            </LabeledSection>

        </Layout>
    )
}

export async function getStaticProps() {
    const clientImages = getFileNamesAndIDs("/peach/clients")
    return {
        props: {
            clientImages
        }
    }
}
