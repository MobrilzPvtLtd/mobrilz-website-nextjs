import { Box, Flex } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderBottom = () => {
    return (
        <Flex
            as="header"
            justify="space-between"
            align="center"
            padding="1rem"
            bg="gray.100"
        >
            <Logo />
            <MegaMenu />
            <ThemeSwitcher />
        </Flex>
    );
};

export default HeaderBottom;
