import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ICommandButtonProps {
    name: string;
    command: string;
    // eslint-disable-next-line no-unused-vars
    setCommand: (command: string) => void;
}

const CommandButton: FC<ICommandButtonProps> = ({
    name,
    command,
    setCommand,
}) => {
    return (
        <Text
            onClick={() => setCommand(name)}
            cursor="pointer"
            fontSize="sm"
            w="40"
            mt="2"
            mr="2"
            borderRadius="20px"
            px="3"
            py="1"
            background={
                command === name
                    ? 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)'
                    : '#241C36'
            }
            color={command === name ? 'black' : 'white'}
            align="center"
        >
            <Text as="span" color="blue.500">
                $
            </Text>{' '}
            snipli {name}
        </Text>
    );
};

export default CommandButton;
