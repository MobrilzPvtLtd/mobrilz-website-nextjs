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
    Avatar
} from '@chakra-ui/react';
import { CheckIcon, ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import { FaCode, FaShoppingCart, FaLaptopCode, FaUser } from 'react-icons/fa';
import NextLink from 'next/link';
import SEO from '../../../components/SEO'; // Fixed path
import Breadcrumb from '../../../components/common/Breadcrumb'; // Fixed path
import TechnologiesSection from '../../../components/TechnologiesSection'; // Fixed path
import PortfolioSection from '../../../components/PortfolioSection'; // Fixed path
import { getStrapiAPI } from '../../../utils/api'; // Fixed path

export async function getStaticProps() {
    try {
        const [technologiesRes, portfoliosRes] = await Promise.all([
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
                },
                filters: {
                    Featured: true
                },
                sort: ['id:desc']
            })
        ]);

        return {
            props: {
                technologies: technologiesRes?.data || [],
                portfolios: portfoliosRes?.data || [],
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
                isError: true
            },
            revalidate: false
        };
    }
}

export default function WebDevelopment({ technologies: apiTechnologies = [], portfolios = [], isError = false }) {
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
                <Stack
                  key={index}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  spacing={4}
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
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
      <Box py={20} bg={heroBgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack spacing={3} textAlign="center">
              <Heading size="xl" color={headingColor}>
                Client Success Stories
              </Heading>
              <Text color={textColor} maxW="3xl" mx="auto">
                See what our clients say about our web development services
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {testimonials.map((testimonial, index) => (
                <Stack
                  key={index}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  spacing={4}
                >
                  <Box position="relative" width="80px" height="80px" mx="auto">
                    <Avatar 
                      src={testimonial.image} 
                      name={testimonial.name} 
                      size="xl"
                      loading="lazy"
                      fallback={<Icon as={FaUser} boxSize={16} color={accentColor} />}
                    />
                  </Box>
                  <Stack spacing={2} textAlign="center">
                    <Text fontWeight="bold" color={headingColor}>
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color={textColor}>
                      {testimonial.position}
                    </Text>
                    <Text color={textColor}>
                      "{testimonial.quote}"
                    </Text>
                    <Stack direction="row" justify="center">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Icon key={i} as={StarIcon} color="yellow.400" />
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

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

const services = [
  {
    title: 'Custom Web Development',
    icon: FaCode,
    description: 'Tailored web solutions built from the ground up.',
    features: [
      'Custom Frontend & Backend',
      'Responsive Design',
      'Performance Optimization',
      'Security Implementation'
    ]
  },
  {
    title: 'E-Commerce Solutions',
    icon: FaShoppingCart,
    description: 'Build and scale your online store.',
    features: [
      'Custom Shopping Cart',
      'Payment Integration',
      'Inventory Management',
      'Mobile Commerce'
    ]
  },
  {
    title: 'Web Applications',
    icon: FaLaptopCode,
    description: 'Powerful web apps for your business needs.',
    features: [
      'SPA Development',
      'Progressive Web Apps',
      'Real-time Features',
      'Cloud Integration'
    ]
  }
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your requirements and planning the solution.'
  },
  {
    title: 'Design',
    description: 'Creating wireframes and visual designs for your approval.'
  },
  {
    title: 'Development',
    description: 'Building your solution with quality code and best practices.'
  },
  {
    title: 'Deployment',
    description: 'Testing, launching, and maintaining your web solution.'
  }
];

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, TechCorp',
    quote: 'Exceptional web development service. Delivered beyond expectations.',
    rating: 5,
    image: 'https://picsum.photos/seed/john-doe/200/200'
  },
  {
    name: 'Sarah Smith',
    position: 'CTO, InnovateX',
    quote: 'Their expertise in web development helped us transform our digital presence.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah-smith/200/200'
  },
  {
    name: 'Mike Johnson',
    position: 'Founder, StartupHub',
    quote: 'Professional team that delivers quality web solutions on time.',
    rating: 5,
    image: 'https://picsum.photos/seed/mike-johnson/200/200'
  }
];