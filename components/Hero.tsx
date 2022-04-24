import Terminal from './Terminal';
import { Flex, Image, Text } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    return (
        <Flex flexDir="column" position="relative" w="100%" marginTop="-150px">
            <Image
                alt=""
                height={['200', '600']}
                src="/assets/blob.svg"
                mx="auto"
            />
            <Flex
                position="absolute"
                w="100%"
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    bgGradient="linear(to-r, #5433FF, #20BDFF, #A5FECB)"
                    bgClip="text"
                    as="h1"
                    fontSize={['20', '64']}
                    fontWeight="extrabold"
                    maxW={['80%', '1000px']}
                    textAlign="center"
                    mt="25px"
                >
                    Convert your local files into a gist in just a snap
                </Text>
            </Flex>
            <Terminal />
        </Flex>
    );
};

export default Hero;
