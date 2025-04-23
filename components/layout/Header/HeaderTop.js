import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Icon, useColorModeValue } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeaderTop = () => {
  const bgColor = useColorModeValue('header.light.top', 'header.dark.top');
  const textColor = useColorModeValue('white', 'gray.100');
  const linkHoverColor = useColorModeValue('gray.200', 'gray.300');

  return (
    <Box 
      bg={bgColor}
      color={textColor}
      py={2}
      transition="all 0.3s ease"
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
              <ChakraLink 
                fontSize="sm"
                _hover={{ color: linkHoverColor }}
              >
                Career
              </ChakraLink>
            </Link>
            <Link href="/support" passHref legacyBehavior>
              <ChakraLink 
                fontSize="sm"
                _hover={{ color: linkHoverColor }}
              >
                Support
              </ChakraLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeaderTop;