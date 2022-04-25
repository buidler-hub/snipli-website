import Header from '../components/Header';
import Hero from '../components/Hero';
import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            w="100%"
            h="100%"
            minH="100vh"
            justifyContent="center"
            background="black"
        >
            <Header />
            <Hero />
        </Flex>
    );
};

export default Home;
