import Header from '../components/Header';
import { Flex, Image } from '@chakra-ui/react';
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
            <Image
                position="absolute"
                width="920"
                alt=""
                height="750"
                objectFit="contain"
                src="/assets/blob.svg"
                zIndex="50"
            />
        </Flex>
    );
};

export default Home;
