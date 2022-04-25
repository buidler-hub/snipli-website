import { Flex, Link, Text, Image } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import { BsGithub } from 'react-icons/bs';
import { DiNpm } from 'react-icons/di';

const Header: NextComponentType = () => {
    return (
        <Flex
            position="absolute"
            top="0"
            px={['5', '14']}
            py="6"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <Flex alignItems="center" gap="2">
                <Image
                    src="/assets/logo.svg"
                    alt="Snipli"
                    height="8"
                    width="8"
                />
                <Text
                    textColor="#fff"
                    fontFamily="body"
                    fontSize="xl"
                    fontWeight="700"
                >
                    SNIPLI
                </Text>
            </Flex>

            <Flex>
                <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    isExternal
                    textColor="gray.50"
                    _hover={{ textColor: 'gray.200' }}
                    zIndex="1"
                    mr="4"
                    mt="-7px"
                >
                    <DiNpm size="50" />
                </Link>

                <Link
                    href="https://github.com/Kira272921/snipli/"
                    isExternal
                    textColor="gray.50"
                    _hover={{ textColor: 'gray.200' }}
                    zIndex="1"
                >
                    <BsGithub size="35" />
                </Link>
            </Flex>
        </Flex>
    );
};

export default Header;
