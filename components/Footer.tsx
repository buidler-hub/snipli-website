import { Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import type { FC } from 'react';

const Footer: FC = () => {
    return (
        <Flex align="center" justify="center" mb="10">
            <Link
                isExternal
                href="https://vercel.com?utm_source=buidlers-hub&utm_campaign=oss"
            >
                <Image
                    src="/assets/powered-by-vercel.svg"
                    height="50"
                    width="250"
                    alt=""
                    objectFit="contain"
                />
            </Link>
        </Flex>
    );
};
export default Footer;
