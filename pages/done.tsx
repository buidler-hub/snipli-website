import Header from '../components/Header';
import { Flex, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Done: NextPage = () => {
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
            <Flex
                flexDir="column"
                position="relative"
                justifyContent="center"
                alignItems="center"
                gap="6"
                w="100%"
                bgImage="url(/assets/blob.svg)"
                h="100vh"
            >
                <Text
                    bgGradient="linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);"
                    bgClip="text"
                    fontSize="84"
                    as="h3"
                    fontFamily="Nanum Pen Script"
                    mb="-50px"
                >
                    snipli
                </Text>

                <Image
                    src="/assets/Terminal-done.svg"
                    h="450"
                    alt="snipli terminal authenticated"
                />
            </Flex>
        </Flex>
    );
};

export default Done;
