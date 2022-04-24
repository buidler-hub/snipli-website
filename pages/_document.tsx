import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/svg" href="/assets/logo.svg" />
                <meta
                    property="og:image"
                    content="https://snipli.vercel.app/assets/og.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
