import { Box } from '@chakra-ui/react';
import HeaderTop from './Header/HeaderTop';
import HeaderBottom from './Header/HeaderBottom';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <HeaderTop />
      <HeaderBottom />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;