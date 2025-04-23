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
  Tag,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { benefitsData, servicesData, projectsData, testimonials, trustSignals } from '../data/content'; // Add this import
import * as Icons from 'react-icons/fa';
import { useMemo } from 'react';

// Static Generation
export async function getStaticProps() {
  return {
    props: {
      services: servicesData,
      projects: projectsData,
      benefits: benefitsData,
      testimonials,
      trustSignals
    },
    revalidate: false // Disable ISR for now
  };
}

const Home = ({ services, projects, benefits, testimonials, trustSignals }) => { // Updated to include trustSignals
  const getIcon = useMemo(() => (iconName) => {
    return Icons[iconName];
  }, []);

  const bgColor = useColorModeValue("white", "gray.900");
  const heroTextColor = useColorModeValue("blue.800", "white");
  const heroBgColor = useColorModeValue("blue.50", "gray.800");

  return (
    <>
      <SEO />
      <Box 
        bg={bgColor}
      >
        {/* Hero Section */}
        <Box 
          bg={heroBgColor} 
          py={20}
        >
          <Container maxW="container.xl">
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
              <Stack spacing={6}>
                <Heading 
                  size="2xl" 
                  color={heroTextColor}
                >
                  Transform Your Business With Custom Software Solutions
                </Heading>
                <Text 
                  fontSize="xl" 
                  color={useColorModeValue("gray.600", "gray.300")}
                >
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
        <Box py={20} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                  Our Services
                </Heading>
                <Text 
                  color={useColorModeValue("gray.600", "gray.300")} 
                  maxW="2xl" 
                  mx="auto"
                >
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
                    bg={useColorModeValue("white", "gray.800")}
                    borderWidth="1px"
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                    transition="all 0.3s ease"
                    _hover={{ 
                      transform: 'translateY(-5px)', 
                      shadow: '2xl',
                      borderColor: useColorModeValue("gray.200", "gray.600")
                    }}
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
                    <Heading 
                      size="md" 
                      mb={3}
                      color={useColorModeValue("gray.800", "white")}
                    >
                      {service.title}
                    </Heading>
                    <Text 
                      color={useColorModeValue("gray.600", "gray.300")} 
                      mb={4}
                    >
                      {service.description}
                    </Text>
                    <Button 
                      variant="link" 
                      colorScheme="blue"
                      color={useColorModeValue("blue.600", "blue.200")}
                      rightIcon={<ChevronRightIcon />}
                      _hover={{
                        color: useColorModeValue("blue.700", "blue.100")
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Featured Projects */}
        <Box 
          bg={useColorModeValue("gray.50", "gray.800")} 
          py={20}
        >
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading 
                  size="xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Featured Projects
                </Heading>
                <Text 
                  color={useColorModeValue("gray.600", "gray.300")} 
                  maxW="2xl" 
                  mx="auto"
                >
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
                    bg={useColorModeValue("white", "gray.700")}
                    borderWidth="1px"
                    borderColor={useColorModeValue("gray.100", "gray.600")}
                    transition="all 0.3s ease"
                    _hover={{ 
                      transform: 'translateY(-5px)', 
                      shadow: '2xl',
                      borderColor: useColorModeValue("gray.200", "gray.500")
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      h="300px"
                      w="full"
                      objectFit="cover"
                    />
                    <Box p={6}>
                      <Heading 
                        size="md" 
                        mb={2}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        {project.title}
                      </Heading>
                      <Text 
                        color={useColorModeValue("gray.600", "gray.300")} 
                        mb={4}
                      >
                        {project.description}
                      </Text>
                      <Stack direction="row" spacing={2} mb={4}>
                        {project.technologies.map((tech, i) => (
                          <Tag 
                            key={i} 
                            colorScheme="blue" 
                            size="sm"
                            bg={useColorModeValue("blue.50", "blue.900")}
                            color={useColorModeValue("blue.600", "blue.200")}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Stack>
                      <Button 
                        variant="link" 
                        colorScheme="blue"
                        color={useColorModeValue("blue.600", "blue.200")}
                        rightIcon={<ChevronRightIcon />}
                        _hover={{
                          color: useColorModeValue("blue.700", "blue.100")
                        }}
                      >
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
        <Box py={20} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                  Why Choose Us
                </Heading>
                <Text 
                  color={useColorModeValue("gray.600", "gray.300")} 
                  maxW="2xl" 
                  mx="auto"
                >
                  We bring together expertise, innovation, and commitment to deliver exceptional results
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {benefits.map((benefit, index) => {
                  const IconComponent = getIcon(benefit.icon);
                  return (
                    <Stack 
                      key={index} 
                      spacing={4} 
                      p={6} 
                      boxShadow="lg" 
                      borderRadius="lg" 
                      bg={useColorModeValue("white", "gray.800")}
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: 'translateY(-5px)',
                        shadow: '2xl',
                        borderColor: useColorModeValue("gray.200", "gray.600")
                      }}
                    >
                      {IconComponent && (
                        <Box color={useColorModeValue("brand.500", "brand.200")}>
                          <IconComponent size={24} />
                        </Box>
                      )}
                      <Heading 
                        size="md"
                        color={useColorModeValue("gray.800", "white")}
                      >
                        {benefit.title}
                      </Heading>
                      <Text 
                        color={useColorModeValue("gray.600", "gray.300")}
                      >
                        {benefit.description}
                      </Text>
                    </Stack>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Testimonials */}
        <Box 
          bg={useColorModeValue("gray.50", "gray.800")} 
          py={20}
        >
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading size="xl">What Our Clients Say</Heading>
                <Text 
                  color={useColorModeValue("gray.600", "gray.300")} 
                  maxW="2xl" 
                  mx="auto"
                >
                  Don't just take our word for it - hear what our clients have to say
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {testimonials.map((testimonial, index) => (
                  <Box 
                    key={index} 
                    p={6} 
                    boxShadow="lg" 
                    borderRadius="lg" 
                    bg={useColorModeValue("white", "gray.700")}
                    borderWidth="1px"
                    borderColor={useColorModeValue("gray.100", "gray.600")}
                  >
                    <Text 
                      fontSize="lg" 
                      fontStyle="italic" 
                      mb={4}
                      color={useColorModeValue("gray.800", "white")}
                    >
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center">
                      <Avatar 
                        src={testimonial.image} 
                        mr={4}
                        border="2px solid"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                      <Box>
                        <Text 
                          fontWeight="bold"
                          color={useColorModeValue("gray.800", "white")}
                        >
                          {testimonial.name}
                        </Text>
                        <Text 
                          color={useColorModeValue("gray.600", "gray.300")}
                        >
                          {testimonial.position}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box 
          py={20} 
          bg={useColorModeValue("blue.600", "blue.900")} 
          color="white"
        >
          <Container maxW="container.xl">
            <Stack spacing={8} align="center" textAlign="center">
              <Heading size="xl">Ready to Start Your Project?</Heading>
              <Text 
                fontSize="xl" 
                maxW="2xl"
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
              >
                Let's discuss how we can help transform your business through innovative software solutions
              </Text>
              <Button 
                size="lg" 
                bg={useColorModeValue("white", "whiteAlpha.200")}
                color={useColorModeValue("blue.600", "white")}
                _hover={{
                  bg: useColorModeValue("gray.100", "whiteAlpha.300")
                }}
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