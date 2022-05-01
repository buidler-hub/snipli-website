import CommandText from '../components/Terminal/CommandText';
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Typist from 'react-typist';

const Login = () => {
    const [isDone, setDone] = useState(false);
    const [isDone2, setDone2] = useState(false);

    return (
        <Flex flexDir="column" fontSize="lg">
            <CommandText
                command="snipli login"
                onTypingDone={() => setTimeout(() => setDone(true), 300)}
            />

            {isDone && (
                <>
                    <Text display="flex" gap="2">
                        <Text color="blue.500">?</Text> Would you like to open
                        the browser to login?
                        <Typist
                            cursor={{ show: false }}
                            onTypingDone={() =>
                                setTimeout(() => setDone2(true), 300)
                            }
                        >
                            <Text color="blue.500">Yes</Text>
                        </Typist>
                    </Text>
                    {isDone2 && (
                        <Text color="green.300" mt="2">
                            Token has been saved successfully!
                        </Text>
                    )}
                </>
            )}
        </Flex>
    );
};

export { Login };
