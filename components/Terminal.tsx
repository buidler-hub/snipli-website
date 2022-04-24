import { Box, Flex } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Terminal: NextComponentType = () => {
    return (
        <Flex mt="-200px" background="black" w="600px" mx="auto" py="10">
            <Flex ml="4">
                <Box
                    w="20px"
                    h="20px"
                    borderRadius="50%"
                    mx="7.5px"
                    background="red.500"
                ></Box>
                <Box
                    w="20px"
                    h="20px"
                    borderRadius="50%"
                    background="yellow.500"
                    mx="7.5px"
                ></Box>
                <Box
                    w="20px"
                    h="20px"
                    borderRadius="50%"
                    background="green.500"
                    mx="7.5px"
                ></Box>
            </Flex>
        </Flex>
    );
};

export default Terminal;
