import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeaderTop = () => {
  return (
    <Box 
      bg="blue.600" 
      color="white" 
      py={2}
      transition="transform 0.3s ease"
      className="header-top"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            <HStack>
              <Icon as={PhoneIcon} />
              <Text fontSize="sm">+1 234 567 890</Text>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} />
              <Text fontSize="sm">contact@mobrilz.com</Text>
            </HStack>
          </HStack>
          <HStack spacing={4}>
            <Link href="/careers" passHref legacyBehavior>
              <ChakraLink fontSize="sm">Career</ChakraLink>
            </Link>
            <Link href="/support" passHref legacyBehavior>
              <ChakraLink fontSize="sm">Support</ChakraLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeaderTop;