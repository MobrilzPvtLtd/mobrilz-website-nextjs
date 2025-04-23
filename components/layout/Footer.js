import { Box, Container, Stack, Text, SimpleGrid, Link, Icon, HStack, VStack, Image, Divider } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaDribbble, FaBehance, FaMedium } from 'react-icons/fa';

const SocialLink = ({ icon, label, href }) => (
  <Link 
    href={href} 
    isExternal 
    role="group" 
    display="flex" 
    alignItems="center"
  >
    <Icon 
      as={icon} 
      w={5} 
      h={5} 
      color="gray.400"
      _groupHover={{ 
        color: 'brand.500',
        transform: 'translateY(-2px)' 
      }}
      transition="all 0.2s ease"
    />
  </Link>
);

const Footer = () => {
  return (
    <Box 
      bg="white" 
      _dark={{ bg: 'gray.900' }}
      borderTop="1px"
      borderColor="gray.100"
      _dark={{ borderColor: 'gray.700' }}
      py={12}
    >
      <Container maxW="container.xl">
        <Stack spacing={12}>
          {/* Top Section with Logo and Description */}
          <Stack 
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'start', md: 'center' }}
            spacing={8}
          >
            <VStack align="start" spacing={4} maxW="400px">
              <Image 
                src="/images/logo.png" 
                alt="Mobrilz Logo" 
                height="40px"
                _dark={{ filter: 'brightness(0) invert(1)' }}
              />
              <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm" lineHeight="tall">
                We create digital experiences that matter. Transform your business with our innovative solutions in web, mobile, and cloud development.
              </Text>
            </VStack>
            
            {/* Social Links */}
            <HStack spacing={6} wrap="wrap">
              <SocialLink icon={FaTwitter} label="Twitter" href="https://twitter.com/mobrilz" />
              <SocialLink icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com/company/mobrilz" />
              <SocialLink icon={FaGithub} label="GitHub" href="https://github.com/mobrilz" />
              <SocialLink icon={FaInstagram} label="Instagram" href="https://instagram.com/mobrilz" />
              <SocialLink icon={FaDribbble} label="Dribbble" href="https://dribbble.com/mobrilz" />
              <SocialLink icon={FaBehance} label="Behance" href="https://behance.net/mobrilz" />
              <SocialLink icon={FaMedium} label="Medium" href="https://medium.com/@mobrilz" />
            </HStack>
          </Stack>

          <Divider borderColor="gray.200" _dark={{ borderColor: 'gray.700' }} />

          {/* Main Links Section */}
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 4 }} 
            spacing={{ base: 8, md: 12 }}
          >
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Company
              </Text>
              <Stack spacing={2}>
                <Link _hover={{ color: 'brand.500' }}>About Us</Link>
                <Link _hover={{ color: 'brand.500' }}>Careers</Link>
                <Link _hover={{ color: 'brand.500' }}>Contact</Link>
              </Stack>
            </Stack>
            
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Services
              </Text>
              <Stack spacing={2}>
                <Link _hover={{ color: 'brand.500' }}>Web Development</Link>
                <Link _hover={{ color: 'brand.500' }}>Mobile Apps</Link>
                <Link _hover={{ color: 'brand.500' }}>Cloud Solutions</Link>
              </Stack>
            </Stack>
            
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Resources
              </Text>
              <Stack spacing={2}>
                <Link _hover={{ color: 'brand.500' }}>Blog</Link>
                <Link _hover={{ color: 'brand.500' }}>Documentation</Link>
                <Link _hover={{ color: 'brand.500' }}>Support</Link>
              </Stack>
            </Stack>
            
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Legal
              </Text>
              <Stack spacing={2}>
                <Link _hover={{ color: 'brand.500' }}>Privacy Policy</Link>
                <Link _hover={{ color: 'brand.500' }}>Terms of Service</Link>
                <Link _hover={{ color: 'brand.500' }}>Cookie Policy</Link>
              </Stack>
            </Stack>
          </SimpleGrid>

          {/* Bottom Section */}
          <Box pt={8} borderTopWidth={1} borderColor="gray.200" _dark={{ borderColor: 'gray.700' }}>
            <Stack 
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="center"
              spacing={4}
            >
              <Text color="gray.500" fontSize="sm">
                © {new Date().getFullYear()} Mobrilz. All rights reserved.
              </Text>
              <Text color="gray.400" fontSize="sm">
                Made with ❤️ in Digital World
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;