import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Create = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="snipli create -f=code.ts -d='Need help at line 59 of file code.ts' -p"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <SpinnerText
                        text="⠋ Creating gist...."
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Flex flexDir="column">
                            <Text color="green.300">
                                Gist created successfully!
                            </Text>
                            <Flex flexDir="column" mt="4">
                                <Text as="span" color="green.300">
                                    {' '}
                                    https://gist.github.com/.....
                                </Text>
                                <Text display="flex">
                                    <Text as="span" color="green.500" mr="2">
                                        ✔
                                    </Text>{' '}
                                    Gist has been created successfully!
                                </Text>
                            </Flex>
                        </Flex>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Create };
