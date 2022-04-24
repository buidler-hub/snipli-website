import Header from '../components/Header';
import Hero from '../components/Hero';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
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
