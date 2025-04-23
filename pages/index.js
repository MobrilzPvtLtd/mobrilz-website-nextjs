import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  Button, 
  Stack, 
  Flex,
  Grid,
  Avatar,
  Tag
} from '@chakra-ui/react';
import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { benefitsData, servicesData, projectsData, testimonials, trustSignals } from '../data/content'; // Add this import
import * as Icons from 'react-icons/fa';

// Static Generation
export async function getStaticProps() {
  return {
    props: {
      services: servicesData,
      projects: projectsData,
      benefits: benefitsData,
      testimonials,
      trustSignals // Add this
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}

const Home = ({ services, projects, benefits, testimonials, trustSignals }) => { // Updated to include trustSignals
  // Get icon component from react-icons/fa
  const getIcon = (iconName) => {
    return Icons[iconName];
  };

  return (
    <>
      <SEO />
      <Box 
        bg="white" 
        _dark={{
          bg: 'gray.900'
        }}
      >
        {/* Hero Section */}
        <Box bg="blue.50" py={20}>
          <Container maxW="container.xl">
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
              <Stack spacing={6}>
                <Heading size="2xl" color="blue.800">
                  Transform Your Business With Custom Software Solutions
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  We help businesses innovate and grow through cutting-edge software development 
                  and digital transformation solutions.
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                  <Button size="lg" colorScheme="blue" rightIcon={<ArrowForwardIcon />}>
                    Get Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" colorScheme="blue">
                    View Our Work
                  </Button>
                </Stack>
                <Flex wrap="wrap" gap={4} mt={4}>
                  {trustSignals.map((signal, index) => (
                    <Image 
                      key={index}
                      src={signal.image} 
                      alt={signal.name}
                      h="40px"
                      filter="grayscale(100%)"
                      opacity={0.7}
                      _hover={{ opacity: 1, filter: 'grayscale(0%)' }}
                      transition="all 0.3s ease"
                    />
                  ))}
                </Flex>
              </Stack>
              <Box>
                <Image 
                  src="https://picsum.photos/seed/hero/800/600" 
                  alt="Hero Image"
                  borderRadius="xl"
                  shadow="2xl"
                />
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Box py={20}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl">Our Services</Heading>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  We offer comprehensive software development services to help your business thrive in the digital age
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {services.map((service, index) => (
                  <Box 
                    key={index} 
                    p={6} 
                    boxShadow="lg" 
                    borderRadius="lg"
                    bg="white"
                    transition="all 0.3s ease"
                    _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      borderRadius="md"
                      mb={4}
                      h="200px"
                      w="full"
                      objectFit="cover"
                    />
                    <Heading size="md" mb={3}>{service.title}</Heading>
                    <Text color="gray.600" mb={4}>{service.description}</Text>
                    <Button variant="link" colorScheme="blue" rightIcon={<ChevronRightIcon />}>
                      Learn More
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Featured Projects */}
        <Box bg="gray.50" py={20}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl">Featured Projects</Heading>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  Take a look at some of our successful projects that showcase our expertise
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {projects.map((project, index) => (
                  <Box 
                    key={index} 
                    overflow="hidden" 
                    borderRadius="lg"
                    boxShadow="lg"
                    bg="white"
                    transition="all 0.3s ease"
                    _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      h="300px"
                      w="full"
                      objectFit="cover"
                    />
                    <Box p={6}>
                      <Heading size="md" mb={2}>{project.title}</Heading>
                      <Text color="gray.600" mb={4}>{project.description}</Text>
                      <Stack direction="row" spacing={2} mb={4}>
                        {project.technologies.map((tech, i) => (
                          <Tag key={i} colorScheme="blue" size="sm">{tech}</Tag>
                        ))}
                      </Stack>
                      <Button variant="link" colorScheme="blue" rightIcon={<ChevronRightIcon />}>
                        View Case Study
                      </Button>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Benefits Section */}
        <Box py={20}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl">Why Choose Us</Heading>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  We bring together expertise, innovation, and commitment to deliver exceptional results
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {benefits.map((benefit, index) => {
                  const IconComponent = getIcon(benefit.icon);
                  return (
                    <Stack key={index} spacing={4} p={6} boxShadow="lg" borderRadius="lg" bg="white">
                      {IconComponent && <IconComponent size={24} color="var(--chakra-colors-blue-500)" />}
                      <Heading size="md">{benefit.title}</Heading>
                      <Text color="gray.600">{benefit.description}</Text>
                    </Stack>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Testimonials */}
        <Box bg="gray.50" py={20}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl">What Our Clients Say</Heading>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  Don't just take our word for it - hear what our clients have to say
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {testimonials.map((testimonial, index) => (
                  <Box key={index} p={6} boxShadow="lg" borderRadius="lg" bg="white">
                    <Text fontSize="lg" fontStyle="italic" mb={4}>
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center">
                      <Avatar src={testimonial.image} mr={4} />
                      <Box>
                        <Text fontWeight="bold">{testimonial.name}</Text>
                        <Text color="gray.600">{testimonial.position}</Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box py={20} bg="blue.600" color="white">
          <Container maxW="container.xl">
            <Stack spacing={8} align="center" textAlign="center">
              <Heading size="xl">Ready to Start Your Project?</Heading>
              <Text fontSize="xl" maxW="2xl">
                Let's discuss how we can help transform your business through innovative software solutions
              </Text>
              <Button 
                size="lg" 
                colorScheme="white" 
                color="blue.600"
                rightIcon={<ArrowForwardIcon />}
              >
                Schedule a Free Consultation
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;