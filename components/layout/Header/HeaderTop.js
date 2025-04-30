import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Icon, useColorModeValue } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const HeaderTop = () => {
  const bgColor = useColorModeValue('#0552B5', 'gray.700');
  // Updated colors using gray.100
  const textColor = useColorModeValue('gray.200', 'gray.100');
  const linkHoverColor = useColorModeValue('gray.200', 'gray.200');
  const borderColor = useColorModeValue('rgba(255,255,255,0.1)', 'gray.800');
  const iconColor = useColorModeValue('gray.100', 'gray.100');

  return (
    <Box 
      bg={bgColor} 
      py={2}
      transition="all 0.3s ease"
      className="header-top"
      fontSize="sm"
      borderBottom="1px"
      borderColor={borderColor}
 
    >
      <Container maxW="container.xl">
        <Flex justify="space-between"  align="center">
          <HStack spacing={6}>
            <HStack spacing={2}>
              <Icon 
                as={PhoneIcon} 
                w={3} 
                h={3} 
                color={iconColor}
              />
              <Text textColor={textColor} >+1 234 567 890</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon 
                as={EmailIcon} 
                w={3} 
                h={3} 
                color={iconColor}
              />
              <Text textColor={textColor}>contact@mobrilz.com</Text>
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
                textColor={textColor}
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
                textColor={textColor}
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