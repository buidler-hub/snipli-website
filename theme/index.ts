import colors from './foundations/colors';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors,
    fonts: {
        body: '"Fira Code", monospace',
    },
});

export default theme;
