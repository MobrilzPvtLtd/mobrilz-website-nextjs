import { Box, Container, Stack, Text, SimpleGrid, Link, Icon, HStack, VStack, Image, Divider, useColorModeValue } from '@chakra-ui/react';
import { 
  FaTwitter, FaLinkedin, FaGithub, FaInstagram, 
  FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt 
} from 'react-icons/fa';
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
  const currentYear = new Date().getFullYear(); // Move this outside the JSX
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
          {/* Top Section - Redesigned */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {/* Company Info & Logo */}
            <VStack align="start" spacing={4}>
              <Image 
                src="/images/logo.png" 
                alt="Mobrilz Logo" 
                height="40px"
                filter={useColorModeValue("none", "brightness(0) invert(1)")}
              />
              <Text color={textColor} fontSize="sm" lineHeight="tall">
                We create digital experiences that matter.
              </Text>
              <HStack spacing={4} wrap="wrap">
                <SocialLink icon={FaTwitter} label="Twitter" href="https://twitter.com/mobrilz" />
                <SocialLink icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com/company/mobrilz" />
                <SocialLink icon={FaGithub} label="GitHub" href="https://github.com/mobrilz" />
                <SocialLink icon={FaInstagram} label="Instagram" href="https://instagram.com/mobrilz" />
              </HStack>
            </VStack>

            {/* Address */}
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold" fontSize="md" mb={2}>
                Visit Us
              </Text>
              <VStack align="start" spacing={2}>
                <HStack align="start" spacing={2}>
                  <Icon as={FaMapMarkerAlt} color={textColor} mt={1} />
                  <Text color={textColor} fontSize="sm">
                    E-160, 3rd Floor, Sector 63
                    Noida, U.P. 201301, India
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaClock} color={textColor} mt={1} />
                  <Text color={textColor} fontSize="sm">
                    Opening Hours: 
                    <Text as="span" fontWeight="medium"> 10:00 - 18:00 IST</Text>
                  </Text>
                </HStack>
                <Text color="brand.500" fontSize="sm" fontStyle="italic">
                  Please schedule an appointment before visiting
                </Text>
              </VStack>
            </VStack>

            {/* Contact Info */}
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold" fontSize="md" mb={2}>
                Get in Touch
              </Text>
              <VStack align="start" spacing={2}>
                <HStack spacing={2}>
                  <Icon as={FaPhone} color={textColor} />
                  <Link 
                    href="tel:+918010355718" 
                    color={textColor} 
                    fontSize="sm"
                    _hover={{ color: 'brand.500' }}
                  >
                    +91-8010355718
                  </Link>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaEnvelope} color={textColor} />
                  <Link 
                    href="mailto:sales@mobrilz.com" 
                    color={textColor} 
                    fontSize="sm"
                    _hover={{ color: 'brand.500' }}
                  >
                    sales@mobrilz.com
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </SimpleGrid>

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

            {/* Support */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Support
              </Text>
              <Stack spacing={2}>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/services/make-payment">Make Payment</FooterLink>
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
                © {currentYear} Mobrilz. All rights reserved.
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