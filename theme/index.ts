import colors from './foundations/colors';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors,
    fonts: {
        body: '"syncopate", sans-serif',
    },
});

export default theme;
