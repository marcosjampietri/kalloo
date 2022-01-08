import type { NextPage } from "next";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

const Cursos: NextPage = () => {
    return (
        <div className={styles.container} data-test="comp-cursos">
            <Head>
                <title>Kalloo English School</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>CURSOS</main>
        </div>
    );
};

export default Cursos;
