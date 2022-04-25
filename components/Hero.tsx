import Terminal from './Terminal';
import { Flex, Text, Button } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    return (
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
                textAlign="center"
                fontFamily="body"
                fontWeight="700"
                bgGradient="linear(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)"
                bgClip="text"
                fontSize={['22px', '40px']}
                lineHeight="10"
                mt="12"
                letterSpacing="4"
            >
                convert your local <br />
                files into a gist in <br />
                just a snap
            </Text>
            <Button
                _focus={{}}
                fontFamily="body"
                fontWeight="700"
                textColor="white"
                bgColor="blue.600"
                _hover={{ bgColor: 'blue.500' }}
                _active={{ bgColor: 'blue.400' }}
                w="40"
                h="10"
                boxShadow="1px 1px 10px 4px rgba(59, 130, 246, 0.25);"
            >
                TRY OUT
            </Button>
            <Terminal />
        </Flex>
    );
};

export default Hero;
