import { Box, Container, Stack, Text, SimpleGrid, Link, Icon, HStack, VStack, Image, Divider, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaDribbble, FaBehance, FaMedium } from 'react-icons/fa';
import NextLink from 'next/link';

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

const FooterLink = ({ href, children }) => (
  <NextLink href={href} passHref>
    <Link 
      color="gray.600" 
      _dark={{ color: 'gray.400' }}
      _hover={{ color: 'brand.500' }}
    >
      {children}
    </Link>
  </NextLink>
);

const Footer = () => {
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box 
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
    >
      <Container maxW="container.xl">
        <Stack spacing={12}>
          {/* Top Section */}
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
                filter={useColorModeValue("none", "brightness(0) invert(1)")}
              />
              <Text color={textColor} fontSize="sm" lineHeight="tall">
                We create digital experiences that matter.
              </Text>
              <HStack spacing={6} wrap="wrap">
                <SocialLink icon={FaTwitter} label="Twitter" href="https://twitter.com/mobrilz" />
                <SocialLink icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com/company/mobrilz" />
                <SocialLink icon={FaGithub} label="GitHub" href="https://github.com/mobrilz" />
                <SocialLink icon={FaInstagram} label="Instagram" href="https://instagram.com/mobrilz" />
              </HStack>
            </VStack>
          </Stack>

          <Divider borderColor={borderColor} />

          {/* Footer Links - 4 Columns */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {/* Company & Legal */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Company
              </Text>
              <Stack spacing={2}>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              </Stack>
            </Stack>
            
            {/* Services */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Services
              </Text>
              <Stack spacing={2}>
                {/* Development Services */}
                <FooterLink href="/services/web-development">Web Development</FooterLink>
                <FooterLink href="/services/mobile-apps">Mobile Apps</FooterLink>
                <FooterLink href="/services/cloud-solutions">Cloud Solutions</FooterLink>
                <FooterLink href="/services/custom-software">Custom Software</FooterLink>
                
                {/* Design Services */}
                <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
                <FooterLink href="/services/branding">Branding</FooterLink>
                <FooterLink href="/services/graphics-design">Graphics Design</FooterLink>
                
                {/* Solutions */}
                <FooterLink href="/services/devops">DevOps</FooterLink>
                <FooterLink href="/services/api-integration">API Integration</FooterLink>
                <FooterLink href="/services/maintenance">Maintenance</FooterLink>
              </Stack>
            </Stack>
            
            {/* Solutions */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Solutions
              </Text>
              <Stack spacing={2}>
                <FooterLink href="/services/api-integration">API Integration</FooterLink>
                <FooterLink href="/services/maintenance">Maintenance</FooterLink>
                <FooterLink href="/services/branding">Branding</FooterLink>
                <FooterLink href="/services/graphics-design">Graphics Design</FooterLink>
              </Stack>
            </Stack>
            
            {/* Industries */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Industries
              </Text>
              <Stack spacing={2}>
                {/* Sectors */}
                <FooterLink href="/industries/manufacturing">Manufacturing</FooterLink>
                <FooterLink href="/industries/finance">Finance</FooterLink>
                <FooterLink href="/industries/healthcare">Healthcare</FooterLink>
                <FooterLink href="/industries/e-commerce">E-Commerce</FooterLink>
                <FooterLink href="/industries/consulting">Consulting</FooterLink>
                <FooterLink href="/industries/retail">Retail</FooterLink>
              </Stack>
            </Stack>
          </SimpleGrid>

          {/* Bottom Section */}
          <Box pt={8} borderTopWidth={1} borderColor={borderColor}>
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