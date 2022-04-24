import GitHubIcon from './Icons';
import { Flex, Link, Text } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Header: NextComponentType = () => {
    return (
        <Flex
            position="absolute"
            top="0"
            px="10"
            py="5"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <Text fontSize="xl" fontWeight="bold" color="white">
                SNIPLI
            </Text>
            <Link isExternal href="https://github.com/Kira272921/snipli/">
                <GitHubIcon />
            </Link>
        </Flex>
    );
};

export default Header;
