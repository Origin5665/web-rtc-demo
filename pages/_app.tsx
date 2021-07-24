import Head from 'next/head'
import {AppProps} from "next/dist/next-server/lib/router/router";
import '../styles/globals.scss'

const Home = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>Web-RTC Demo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>

    )
}

export default Home;