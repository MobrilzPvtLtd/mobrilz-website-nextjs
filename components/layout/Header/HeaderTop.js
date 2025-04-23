import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Icon, useColorModeValue } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeaderTop = () => {
  const bgColor = useColorModeValue('brand.600', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');
  const linkHoverColor = useColorModeValue('brand.100', 'gray.300');

  return (
    <Box 
      bg={bgColor}
      color={textColor}
      py={2}
      transition="all 0.3s ease"
      className="header-top"
      fontSize="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <HStack spacing={6}>
            <HStack spacing={2}>
              <Icon as={PhoneIcon} w={3} h={3} />
              <Text>+1 234 567 890</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={EmailIcon} w={3} h={3} />
              <Text>contact@mobrilz.com</Text>
            </HStack>
          </HStack>
          <HStack spacing={6}>
            <Link href="/careers" passHref legacyBehavior>
              <ChakraLink 
                _hover={{ color: linkHoverColor }}
                transition="all 0.2s"
              >
                Careers
              </ChakraLink>
            </Link>
            <Link href="/support" passHref legacyBehavior>
              <ChakraLink 
                _hover={{ color: linkHoverColor }}
                transition="all 0.2s"
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