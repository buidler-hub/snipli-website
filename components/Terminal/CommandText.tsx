import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import Typist from 'react-typist';

interface Props {
    command: string;
    onTypingDone: () => void;
}

const CommandText: FC<Props> = ({ command, onTypingDone }) => {
    return (
        <Typist cursor={{ show: false }} onTypingDone={onTypingDone}>
            <Text display="flex">
                <Text as="span" color="blue.500" mr="2">
                    $
                </Text>
                <Text
                    bgGradient="linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)"
                    fontWeight="600"
                    bgClip="text"
                >
                    {command}
                </Text>
            </Text>
        </Typist>
    );
};

export default CommandText;
