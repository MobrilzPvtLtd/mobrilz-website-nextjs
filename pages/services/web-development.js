import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  Image,
  Grid,
  Avatar,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { CheckIcon, ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaShoppingCart,
  FaSearch,
  FaRocket,
  FaMobile,
  FaLaptopCode,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaChartLine,
} from 'react-icons/fa';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import Link from 'next/link';

const WebDevelopment = () => {
  // Color mode values
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
                <Link href="/contact">
                  <Button
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Start Your Project
                  </Button>
                </Link>
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
                src="https://picsum.photos/seed/webdev-hero/1200/800"
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

      {/* Services Grid */}
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
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack spacing={3} textAlign="center">
              <Heading size="xl" color={headingColor}>
                Technologies We Use
              </Heading>
              <Text color={textColor} maxW="3xl" mx="auto">
                We leverage the latest technologies to build modern web solutions
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8}>
              {technologies.map((tech, index) => (
                <Stack
                  key={index}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  align="center"
                  spacing={4}
                  _hover={{
                    transform: 'translateY(-5px)',
                    shadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  <Icon as={tech.icon} boxSize={10} color={accentColor} />
                  <Text fontWeight="bold" color={headingColor}>
                    {tech.name}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

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
};

// Data objects for the page components
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

const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Next.js', icon: FaRocket },
  { name: 'MongoDB', icon: FaDatabase },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'DevOps', icon: FaCogs }
];

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, TechCorp',
    quote: 'Exceptional web development service. Delivered beyond expectations.',
    rating: 5,
    image: 'https://picsum.photos/seed/john/200'
  },
  {
    name: 'Sarah Smith',
    position: 'CTO, InnovateX',
    quote: 'Their expertise in web development helped us transform our digital presence.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/200'
  },
  {
    name: 'Mike Johnson',
    position: 'Founder, StartupHub',
    quote: 'Professional team that delivers quality web solutions on time.',
    rating: 5,
    image: 'https://picsum.photos/seed/mike/200'
  }
];

export default WebDevelopment;