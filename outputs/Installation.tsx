import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Installation = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="npm i -g snipli"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <SpinnerText
                        text="⠏ Installing snipli"
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Text display="flex">
                            <Text as="span" color="green.500" mr="2">
                                ✔
                            </Text>{' '}
                            Snipli has been installed successfully. Try running
                            snipli help
                        </Text>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Installation };
