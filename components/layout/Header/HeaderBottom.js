import { Box, Container, Flex } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderBottom = () => {
  return (
    <Box bg="white" shadow="sm">
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" h="70px">
          <Logo />
          <MegaMenu />
          <ThemeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default HeaderBottom;