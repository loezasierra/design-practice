import Head from "next/head"
import Layout from "../../components/layout"
import Nav from "../../components/peach/nav"
import Jumbotron from "../../components/peach/jumbotron"
import LabeledSection from "../../components/peach/labeled-section"
import Clients from "../../components/peach/clients"
import Button from "../../components/peach/button"

import { getImagePathsAndIDs } from "../../lib/publicFiles"
import { getPagePathsAndIDs } from "../../lib/pageFiles"


export default function Peach({ clientImages, pages }) {
    return (
        <Layout>

            <Head>
                <title>Peach</title>
                <link rel="icon" type="image/png" href="/peach/favicon.png" />
            </Head>

            <Nav linkGroup={pages} />

            <Jumbotron />

            <LabeledSection title="Stores">
                <Clients images={clientImages} />
            </LabeledSection>

            <LabeledSection title="Button">
                <Button />
            </LabeledSection>

        </Layout>
    )
}

export async function getStaticProps() {
    const clientImages = getImagePathsAndIDs("/peach/clients")
    const pages = getPagePathsAndIDs("/designs")
    return {
        props: {
            clientImages,
            pages
        }
    }
}
