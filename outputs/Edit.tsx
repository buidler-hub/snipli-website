import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Edit = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="snipli edit -i=...6496 -f=updated-code.ts -d='Updated the code' -p"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <SpinnerText
                        text="Editing gist..."
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Text display="flex">
                            <Text as="span" color="green.500" mr="2">
                                ✔
                            </Text>{' '}
                            Updated the gist successfully!
                        </Text>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Edit };
