import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
    color: string;
}

const TerminalButton: FC<Props> = ({ color }) => {
    return <Box w="15px" h="15px" borderRadius="50%" background={color}></Box>;
};

export default TerminalButton;
