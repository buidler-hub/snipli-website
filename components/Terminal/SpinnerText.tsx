import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import Typist from 'react-typist';

interface Props {
    text: string;
    onTypingDone: () => void;
}

const SpinnerText: FC<Props> = ({ text, onTypingDone }) => {
    return (
        <Typist cursor={{ show: false }} onTypingDone={onTypingDone}>
            <Text display="flex">
                <Text as="span" color="green.500" mr="2">
                    ?
                </Text>{' '}
                {text}
            </Text>
        </Typist>
    );
};

export default SpinnerText;
