import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/syncopate/400.css';
import '@fontsource/syncopate/700.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg" href="/assets/logo.svg" />
            </Head>
            <NextSeo
                title="Snipli"
                titleTemplate="Snipli"
                defaultTitle="Snipli"
                description="Convert your local files into a gist in just a snap"
                canonical="https://snipli.live"
                openGraph={{
                    url: 'https://snipli.live',
                    title: 'Snipli',
                    description:
                        'Convert your local files into a gist in just a snap',
                    images: [
                        {
                            url: '/assets/og.png',
                            width: 1200,
                            height: 630,
                            alt: 'Snipli',
                        },
                    ],
                }}
                twitter={{
                    handle: '@avneesh0612',
                    site: '@avneesh0612',
                    cardType: 'summary_large_image',
                }}
            />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default MyApp;
