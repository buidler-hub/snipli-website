import { Create, Delete, Edit, Id, Login, Logout, Read } from '../outputs';
import CommandButton from './CommandButton';
import Terminal from './Terminal';
import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';
import { useState } from 'react';

interface Props {}

const Commands: NextComponentType<NextPageContext, {}, Props> = () => {
    const [command, setCommand] = useState('read');

    const Commands = {
        create: {
            output: <Create />,
            description: 'Create a new gist',
        },
        delete: {
            output: <Delete />,
            description: 'Delete a gist',
        },
        edit: {
            output: <Edit />,
            description: 'Edit a gist',
        },

        id: {
            output: <Id />,
            description: "Get the ID of a gist from it's link",
        },
        login: {
            output: <Login />,
            description: 'Login to snipli',
        },
        logout: {
            output: <Logout />,
            description: 'Logout from snipli',
        },
        read: {
            output: <Read />,
            description: 'Read a gist locally using vim',
        },
    };

    return (
        <Box
            display="flex"
            flexDir="column"
            gap="16"
            mt="24"
            justifyContent="center"
            id="cmnds"
        >
            <Text
                textAlign="center"
                fontSize="3xl"
                fontWeight="700"
                fontFamily="syncopate"
                textColor="white"
            >
                Commands
            </Text>
            <Flex w="100%" align="center" dir="column" justify="center">
                {/* @ts-ignore */}
                <Terminal>{Commands[command]?.output}</Terminal>
            </Flex>
            <Box
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                justifyItems="center"
                mt="5"
                gap="2"
            >
                {Object.keys(Commands).map(name => (
                    <CommandButton
                        key={name}
                        name={name}
                        command={command}
                        setCommand={setCommand}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Commands;
