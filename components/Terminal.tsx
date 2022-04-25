import { Box, Flex } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Terminal: NextComponentType = () => {
    return (
        <Box
            w={['90%', 'md']}
            h="64"
            bgColor="black"
            rounded="md"
            p="4"
            boxShadow="-2px 5px 54px 9px rgba(67, 25, 156, 0.25)"
        >
            <Flex gap="3">
                <Box
                    w="15px"
                    h="15px"
                    borderRadius="50%"
                    background="red.500"
                ></Box>
                <Box
                    w="15px"
                    h="15px"
                    borderRadius="50%"
                    background="yellow.500"
                ></Box>
                <Box
                    w="15px"
                    h="15px"
                    borderRadius="50%"
                    background="green.500"
                ></Box>
            </Flex>
        </Box>
    );
};

export default Terminal;
