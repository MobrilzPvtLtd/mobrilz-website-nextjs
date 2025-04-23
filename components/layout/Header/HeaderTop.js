import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Icon, useColorModeValue } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeaderTop = () => {
  // Updated color mode values for better contrast with #0552B5
  const bgColor = useColorModeValue('#0552B5', 'gray.900');
  const textColor = 'whiteAlpha.900'; // Always light text for better contrast
  const linkHoverColor = 'whiteAlpha.800';
  const borderColor = useColorModeValue('rgba(255,255,255,0.1)', 'gray.800');
  const iconColor = 'whiteAlpha.900';

  return (
    <Box 
      bg={bgColor}
      color={textColor}
      py={2}
      transition="all 0.3s ease"
      className="header-top"
      fontSize="sm"
      borderBottom="1px"
      borderColor={borderColor}
      _dark={{
        bg: 'gray.900',
        borderColor: 'gray.800'
      }}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <HStack spacing={6}>
            <HStack spacing={2}>
              <Icon 
                as={PhoneIcon} 
                w={3} 
                h={3} 
                color={iconColor}
              />
              <Text>+1 234 567 890</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon 
                as={EmailIcon} 
                w={3} 
                h={3} 
                color={iconColor}
              />
              <Text>contact@mobrilz.com</Text>
            </HStack>
          </HStack>
          <HStack spacing={6}>
            <Link href="/careers" passHref>
              <ChakraLink 
                as="span"
                _hover={{ 
                  color: linkHoverColor,
                  textDecoration: 'none'
                }}
                transition="all 0.2s"
              >
                Careers
              </ChakraLink>
            </Link>
            <Link href="/support" passHref>
              <ChakraLink 
                as="span"
                _hover={{ 
                  color: linkHoverColor,
                  textDecoration: 'none'
                }}
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