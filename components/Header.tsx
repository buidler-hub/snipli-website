import { Flex, Link as ChakraLink, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import type { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiNpm } from 'react-icons/di';

const Header: FC = () => {
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
            <Link href="/" passHref>
                <Flex cursor="pointer" alignItems="center" gap="2" zIndex="1">
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
            </Link>

            <Flex>
                <ChakraLink
                    href="https://www.npmjs.com/package/snipli"
                    isExternal
                    textColor="gray.50"
                    _hover={{ textColor: 'gray.200' }}
                    zIndex="1"
                    mr="4"
                    mt="-7px"
                >
                    <DiNpm size="50" />
                </ChakraLink>

                <ChakraLink
                    href="https://github.com/Kira272921/snipli/"
                    isExternal
                    textColor="gray.50"
                    _hover={{ textColor: 'gray.200' }}
                    zIndex="1"
                >
                    <BsGithub size="35" />
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Header;
