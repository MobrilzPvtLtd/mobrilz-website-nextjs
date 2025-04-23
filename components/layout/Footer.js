import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.100" py={6}>
      <Container maxW="container.xl">
        <Text textAlign="center">© 2024 Your Website. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;