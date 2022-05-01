import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Id = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="snipli id -l=https://gist.github.com/Kira272921/bfce776b3ad1145f764d89c296fec605"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />
            {isDone && (
                <>
                    <SpinnerText
                        text="Fetching ID...."
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Text display="flex">
                            <Text as="span" color="green.500" mr="2">
                                ✔
                            </Text>{' '}
                            The ID of the gist is:
                            bfce776b3ad1145f764d89c296fec605
                        </Text>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Id };
