import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Stack,
    Button,
    SimpleGrid,
    Grid,
    Icon,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Avatar,
    Flex // Add Flex component
} from '@chakra-ui/react';
import { CheckIcon, ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import { 
    FaCode, 
    FaServer, 
    FaLayerGroup, 
    FaPencilRuler, 
    FaDatabase, 
    FaShoppingCart, 
    FaWordpress, 
    FaMobile, 
    FaTools, 
    FaSearch, 
    FaShieldAlt, 
    FaChartLine,
    FaUser // Add FaUser icon
} from 'react-icons/fa';
import NextLink from 'next/link';
import SEO from '../../../components/SEO'; // Fixed path
import Breadcrumb from '../../../components/common/Breadcrumb'; // Fixed path
import TechnologiesSection from '../../../components/TechnologiesSection'; // Fixed path
import PortfolioSection from '../../../components/PortfolioSection'; // Fixed path
import TestimonialsSection from '../../../components/TestimonialsSection';
import { getStrapiAPI } from '../../../utils/api'; // Fixed path
import { 
    webDevelopmentServices as services,
    developmentProcess as process,
    clientTestimonials as testimonials 
} from '../../../contexts/services/web-development';

export async function getStaticProps() {
    try {
        const [technologiesRes, portfoliosRes, testimonialsRes] = await Promise.all([
            getStrapiAPI("/technologies", {
                populate: '*',
                filters: {
                    Featured: true
                },
                sort: ['type:asc', 'name:asc']
            }),
            getStrapiAPI("/portfolios", {
                populate: {
                    ThumbnailImage: { populate: '*' },
                    technologies: { populate: '*' },
                    portfolio_categories: { populate: '*' }
                }
            }),
            getStrapiAPI("/testimonials", {
                populate: '*'
            })
        ]);

        return {
            props: {
                technologies: technologiesRes?.data || [],
                portfolios: portfoliosRes?.data || [],
                testimonials: testimonialsRes?.data || [],
                isError: false
            },
            revalidate: false
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                technologies: [],
                portfolios: [],
                testimonials: [],
                isError: true
            }
        };
    }
}

export default function WebDevelopment({ 
    technologies: apiTechnologies = [], 
    portfolios = [], 
    testimonials = [],
    isError = false 
}) {
  const bgColor = useColorModeValue('white', 'gray.900');
  const heroBgColor = useColorModeValue('blue.50', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('brand.500', 'brand.300');

  const breadcrumbItems = [
    {
      name: 'Home',
      path: '/',
      title: 'Return to Homepage',
    },
    {
      name: 'Services',
      path: '/services',
      title: 'Our Services',
    },
    {
      name: 'Web Development',
      path: '/services/web-development',
      title: 'Web Development Services',
      isCurrentPage: true,
    }
  ];

  const getDescription = (description) => {
    if (!description) return '';
    if (typeof description === 'string') return description;
    if (Array.isArray(description) && description[0]?.children?.[0]?.text) {
      return description[0].children[0].text;
    }
    return '';
  };

  return (
    <>
      <SEO 
        title="Web Development Services - Mobrilz"
        description="Professional web development services including custom websites, web applications, e-commerce solutions, and more."
      />

      {/* Hero Section */}
      <Box bg={heroBgColor} py={20}>
        <Container maxW="container.xl">
          <Breadcrumb items={breadcrumbItems} />
          
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Heading 
                  as="h1" 
                  size="3xl" 
                  color={headingColor}
                  lineHeight="shorter"
                >
                  Crafting High-Performance Web Solutions
                </Heading>
                <Text fontSize="xl" color={textColor}>
                  Transform your digital presence with our expert web development services. 
                  We build scalable, secure, and innovative web solutions tailored to your business needs.
                </Text>
              </Stack>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <NextLink href="/contact" passHref>
                  <Button
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Start Your Project
                  </Button>
                </NextLink>
                <Button
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                >
                  View Portfolio
                </Button>
              </Stack>
            </Stack>
            <Box position="relative" width="100%" height="400px" overflow="hidden" borderRadius="xl">
              <Image
                src="https://picsum.photos/seed/web-dev-hero/1200/800"
                alt="Web Development Services"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
                loading="eager"
                priority
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack spacing={3} textAlign="center">
              <Heading size="xl" color={headingColor}>
                Our Web Development Services
              </Heading>
              <Text color={textColor} maxW="3xl" mx="auto">
                From custom web applications to e-commerce solutions, we offer comprehensive 
                web development services to meet your business objectives.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {services.map((service, index) => (
                <NextLink 
                  key={index} 
                  href={service.url}
                  passHref
                >
                  <Stack
                    as="a"
                    p={6}
                    bg={cardBgColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                    spacing={4}
                    cursor="pointer"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: 'xl',
                      borderColor: 'brand.500'
                    }}
                    transition="all 0.3s"
                  >
                    <Icon as={service.icon} boxSize={10} color={accentColor} />
                    <Stack spacing={2}>
                      <Heading size="md" color={headingColor}>
                        {service.title}
                      </Heading>
                      <Text color={textColor}>
                        {service.description}
                      </Text>
                    </Stack>
                    <List spacing={3}>
                      {service.features.map((feature, idx) => (
                        <ListItem 
                          key={idx}
                          display="flex"
                          alignItems="center"
                          color={textColor}
                        >
                          <ListIcon as={CheckIcon} color="green.500" />
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </NextLink>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={20} bg={heroBgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack spacing={3} textAlign="center">
              <Heading size="xl" color={headingColor}>
                Our Development Process
              </Heading>
              <Text color={textColor} maxW="3xl" mx="auto">
                We follow a systematic approach to deliver high-quality web solutions
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {process.map((step, index) => (
                <Stack
                  key={index}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  align="center"
                  textAlign="center"
                  spacing={4}
                >
                  <Flex
                    w={12}
                    h={12}
                    bg={accentColor}
                    color="white"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    {index + 1}
                  </Flex>
                  <Heading size="md" color={headingColor}>
                    {step.title}
                  </Heading>
                  <Text color={textColor}>
                    {step.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Technologies Section */}
      <TechnologiesSection 
        technologies={apiTechnologies} 
        isError={isError}
      />

      {/* Portfolio Section */}
      <PortfolioSection 
        portfolios={portfolios} 
        isError={isError}
      />

      {/* Testimonials Section */}
      <TestimonialsSection 
        testimonials={testimonials} 
        isError={isError}
      />

      {/* CTA Section */}
      <Box py={20} bg={useColorModeValue("brand.600", "brand.900")}>
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center" color="white">
            <Heading size="xl">Ready to Start Your Web Project?</Heading>
            <Text fontSize="xl" maxW="2xl">
              Let's discuss how we can help transform your business through innovative web solutions.
            </Text>
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              spacing={4}
            >
              <Button
                size="lg"
                bg="white"
                color="brand.600"
                _hover={{
                  bg: 'gray.100',
                }}
                rightIcon={<ArrowForwardIcon />}
              >
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                _hover={{
                  bg: 'whiteAlpha.200',
                }}
              >
                View Our Portfolio
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}