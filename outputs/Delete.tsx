import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Delete = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize={['md', 'lg']}>
            <CommandText
                command="snipli delete -i=...605"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <SpinnerText
                        text="⠏ Deleting gist..."
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Text display="flex">
                            <Text as="span" color="green.500" mr="2">
                                ✔
                            </Text>{' '}
                            Gist ...605 has been deleted
                        </Text>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Delete };
