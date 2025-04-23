import { Box, Container, Text } from '@chakra-ui/react';

const HeaderTop = () => {
  return (
    <Box bg="gray.100" py={2}>
      <Container maxW="container.xl">
        <Text>Welcome to our website!</Text>
      </Container>
    </Box>
  );
};

export default HeaderTop;