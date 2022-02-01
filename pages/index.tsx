import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/home/hero";
import Items from "../components/home/Items";
import List from "../pages/contato/list";
import Form from "../components/form";

const Home: NextPage = () => {
    return (
        <div data-test="comp-home">
            <Head>
                <title>Kalloo English School</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Hero />
                <Items />
                <Form />
                <List />
            </main>
        </div>
    );
};

export default Home;
