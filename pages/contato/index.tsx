import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Contact from "../../components/home/contact";

const Contato: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kalloo English School</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Contact />
            </main>
        </div>
    );
};

export default Contato;
