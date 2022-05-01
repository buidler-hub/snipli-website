import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Read = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="snipli read -i id=...605"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />
            {isDone && (
                <>
                    <SpinnerText
                        text="Fetching Gist...."
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    {isDone2 && (
                        <Flex flexDir="column" mt="5">
                            <Text>
                                <Text as="span" color="purple.500">
                                    const
                                </Text>{' '}
                                triedSnipli ={' '}
                                <Text as="span" color="red.400">
                                    {'true'}
                                </Text>
                                {';'}
                            </Text>
                            <br />
                            <Text>
                                <Text as="span" color="cyan.500">
                                    while
                                </Text>
                                <Text as="span" color="yellow.500">
                                    {'('}
                                </Text>
                                snipli
                                <Text as="span" color="yellow.500">
                                    {')'}
                                </Text>
                                <Text as="span" color="yellow.200">
                                    {' {'}
                                </Text>
                            </Text>{' '}
                            <Text ml="5">
                                <Text as="span" color="white">
                                    console
                                </Text>
                                {'.'}
                                <Text as="span" color="blue.400">
                                    log
                                </Text>
                                <Text as="span" color="yellow.500">
                                    {'('}
                                </Text>
                                <Text as="span" color="green.300">
                                    {'"I 😻 snipli"'}
                                </Text>
                                <Text as="span" color="yellow.500">
                                    {')'}
                                </Text>
                                {';'}
                            </Text>
                            <Text color="yellow.200">{'}'}</Text>
                        </Flex>
                    )}

                    <Text display="flex" mt="4">
                        <Text as="span" color="green.500" mr="2">
                            ✔
                        </Text>{' '}
                        Fetched gist
                    </Text>
                </>
            )}
        </Flex>
    );
};

export { Read };
