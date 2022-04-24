import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <NextSeo
                title="Snipli"
                titleTemplate="Snipli"
                defaultTitle="Snipli"
                description="Make your local files a gist in just a snap"
                canonical="https://snipli.live"
                openGraph={{
                    url: 'https://snipli.live',
                    title: 'Snipli',
                    description: 'Make your local files a gist in just a snap',
                    images: [],
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
