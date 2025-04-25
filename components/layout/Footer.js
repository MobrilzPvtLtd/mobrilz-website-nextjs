import { Box, Container, Stack, Text, SimpleGrid, Link, Icon, HStack, VStack, Image, Divider, useColorModeValue, Button } from '@chakra-ui/react';
import { keyframes } from '@emotion/react'; // Import keyframes from @emotion/react
import { 
  FaTwitter, FaLinkedin, FaGithub, FaInstagram, 
  FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt 
} from 'react-icons/fa';
import NextLink from 'next/link';

// Define the heartbeat animation using @emotion/react
const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1.4); }
  75% { transform: scale(1.2); }
`;

// Update the SocialLink component
const SocialLink = ({ icon, label, href }) => (
  <NextLink href={href} target="_blank" rel="noopener noreferrer">
    <Icon 
      as={icon} 
      w={5} 
      h={5} 
      color="gray.400"
      _hover={{ 
        color: 'brand.500',
        transform: 'translateY(-2px)' 
      }}
      transition="all 0.2s ease"
    />
  </NextLink>
);

// Update the FooterLink component
const FooterLink = ({ href, children }) => (
  <NextLink href={href}>
    <Box
      as="span"
      color="gray.600"
      _dark={{ color: 'gray.400' }}
      _hover={{ color: 'brand.500' }}
      cursor="pointer"
    >
      {children}
    </Box>
  </NextLink>
);

const Footer = () => {
  const currentYear = typeof window === 'undefined' ? 2025 : new Date().getFullYear(); // Static year for SSR
  const bgColor = useColorModeValue("linear-gradient(135deg, #f5f7fa, #c3cfe2)", "linear-gradient(135deg, #1a202c, #2d3748)");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box 
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial(whiteAlpha.500, transparent)"
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="200%"
        h="200%"
        bgGradient="radial(transparent, rgba(0, 0, 0, 0.1))"
        opacity={0.2}
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
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
                    Monday - Friday: 9:00 AM - 6:00 PM (IST)
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
                <FooterLink href="/technologies">Technologies</FooterLink>
                <FooterLink href="/portfolios">Portfolios</FooterLink>
              </Stack>
            </Stack>
            
            {/* Services */}
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="md" textTransform="uppercase" letterSpacing="wide">
                Services
              </Text>
              <Stack spacing={2}>
                <FooterLink href="/services/web-development">Web Development</FooterLink>
                <FooterLink href="/services/mobile-apps">Mobile Apps</FooterLink>
                <FooterLink href="/services/cloud-solutions">Cloud Solutions</FooterLink>
                <FooterLink href="/services/custom-software">Custom Software</FooterLink>
                <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
                <FooterLink href="/services/branding">Branding</FooterLink>
                <FooterLink href="/services/graphics-design">Graphics Design</FooterLink>
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
                <FooterLink href="/contact-us">Contact</FooterLink>
                <FooterLink href="/services/make-payment">Make Payment</FooterLink>
                <NextLink href="/get-quote" passHref>
                  <Button
                    variant="link"
                    color={useColorModeValue("gray.600", "gray.400")}
                    _hover={{ color: "blue.500" }}
                  >
                    Get a Quote
                  </Button>
                </NextLink>
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
              <Text color="gray.400" fontSize="sm" display="flex" alignItems="center">
                Made with 
                <Box 
                  as="span" 
                  mx={1} 
                  color="red.500" 
                  animation={`${heartbeat} 1.5s infinite`} // Heartbeat animation
                >
                  ❤️
                </Box> 
                in India 
                <Box as="span" ml={2} display="inline-block">
                  {/* India Flag SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                  >
                    <rect width="20" height="5" fill="#FF9933" />
                    <rect y="5" width="20" height="5" fill="#FFFFFF" />
                    <rect y="10" width="20" height="5" fill="#138808" />
                    <circle cx="10" cy="7.5" r="1.5" fill="#000080" />
                  </svg>
                </Box>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;