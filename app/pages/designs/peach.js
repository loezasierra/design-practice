import Head from "next/head"
import Layout from "../../components/layout"
import Nav from "../../components/peach/nav"
import Jumbotron from "../../components/peach/jumbotron"
import LabeledSection from "../../components/peach/labeled-section"
import Clients from "../../components/peach/clients"
import Button from "../../components/peach/button"
import styles from "../../components/peach/styles/peach.module.css"

import { getImagePathsAndIDs } from "../../lib/publicFiles"
import { getPagePathsAndIDs } from "../../lib/pageFiles"


export default function Peach({ clientImages, pages }) {
    return (
        <div class={styles.main}>

            <Layout>

                <Head>
                    <title>Peach</title>
                    <link rel="icon" type="image/png" href="/peach/favicon.png" />
                </Head>

                <Nav linkGroup={pages} />

                <Jumbotron 
                    title="What's the best fruit?"
                    btntxt="Eat Peach"
                    imgsrc="/peach/peaches/peach1.png"
                />

                <Jumbotron 
                    title="Want to try the delicious nectar of the gods?"
                    btntxt="Try Peach"
                    imgsrc="/peach/peaches/peach2.png"
                />

                <LabeledSection title="Find a Peach at Your Local Market">
                    <Clients images={clientImages} />
                </LabeledSection>

                <LabeledSection title="Join the Peach Machine!">
                    <Button text="Peach Jobs" />
                </LabeledSection>

            </Layout>
        
        </div>
    )
}

export async function getStaticProps() {
    const clientImages = getImagePathsAndIDs("/peach/clients")
    const pages = getPagePathsAndIDs("/designs", "peach")
    return {
        props: {
            clientImages,
            pages
        }
    }
}
