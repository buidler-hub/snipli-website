import CommandText from '../components/Terminal/CommandText';
import SpinnerText from '../components/Terminal/SpinnerText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Typist from 'react-typist';

const Done = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);
    const [isDone3, setIsDone3] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="Successfully authenticated"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <SpinnerText
                        text="⠏ You can now close this tab"
                        onTypingDone={() =>
                            setTimeout(() => setIsDone2(true), 300)
                        }
                    />

                    <Flex mt="3" flexDir="column">
                        {isDone2 && (
                            <Typist
                                cursor={{ show: false }}
                                onTypingDone={() =>
                                    setTimeout(() => setIsDone3(true), 300)
                                }
                            >
                                <Text display="flex">
                                    <Text as="span" color="blue.500" mr="2">
                                        $
                                    </Text>
                                    <Text as="span" color="white">
                                        Run{' '}
                                    </Text>
                                    <Text
                                        bgGradient="linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)"
                                        fontWeight="600"
                                        bgClip="text"
                                    >
                                        snipli whoami
                                    </Text>
                                </Text>
                            </Typist>
                        )}

                        {isDone3 && (
                            <Text display="flex">
                                <Text as="span" color="white" mr="2">
                                    To verify your authentication
                                </Text>
                            </Text>
                        )}
                    </Flex>
                </>
            )}
        </Flex>
    );
};

export { Done };
