import TerminalButton from './TerminalButton';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface ITerminalProps {
    children?: any;
}

const Terminal: FC<ITerminalProps> = ({ children }) => {
    return (
        <Box
            minW={['90%', '2xl']}
            minH="64"
            bgColor="black"
            rounded="md"
            p="4"
            boxShadow="-2px 5px 54px 9px rgba(67, 25, 156, 0.25)"
            fontFamily='"Fira Code", monospace'
            color="gray.100"
        >
            <Flex gap="3">
                <TerminalButton color="red.500" />
                <TerminalButton color="yellow.500" />
                <TerminalButton color="green.500" />
            </Flex>

            <Flex position="relative" p="8" borderRadius="2xl">
                {children}
            </Flex>
        </Box>
    );
};

export default Terminal;
