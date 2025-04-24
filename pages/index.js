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
import { technologiesData } from '../data/content';
import * as Icons from 'react-icons/fa';
import { useMemo } from 'react';
import NextLink from 'next/link';

// Static Generation
export async function getStaticProps() {
  return {
    props: {
      services: servicesData,
      projects: projectsData,
      benefits: benefitsData,
      testimonials,
      trustSignals,
      technologies: technologiesData // Add this line
    },
    revalidate: false // Disable ISR for now
  };
}

const Home = ({ services, projects, benefits, testimonials, trustSignals, technologies }) => { // Updated to include technologies
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
                  <NextLink href="/contact" passHref legacyBehavior>
                    <Button as="a" size="lg" colorScheme="blue" rightIcon={<ArrowForwardIcon />}>
                      Get Free Consultation
                    </Button>
                  </NextLink>
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

        {/* Technologies Section */}
        <Box 
          py={20} 
          position="relative"
          overflow="hidden"
        >
          {/* Background Design Elements */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={useColorModeValue("gray.50", "gray.800")}
            bgGradient={useColorModeValue(
              "linear(to-br, blue.50, gray.50, purple.50)",
              "linear(to-br, blue.900, gray.800, purple.900)"
            )}
            opacity={0.97}
            zIndex={0}
          />
          <Box
            position="absolute"
            top="-10%"
            right="-10%"
            width="400px"
            height="400px"
            borderRadius="full"
            bg={useColorModeValue("blue.50", "blue.900")}
            filter="blur(70px)"
            opacity={0.4}
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="-5%"
            left="-5%"
            width="300px"
            height="300px"
            borderRadius="full"
            bg={useColorModeValue("purple.50", "purple.900")}
            filter="blur(70px)"
            opacity={0.4}
            zIndex={0}
          />

          <Container maxW="container.xl" position="relative" zIndex={1}>
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading 
                  size="xl" 
                  color={useColorModeValue("gray.800", "white")}
                  bgGradient={useColorModeValue(
                    "linear(to-r, blue.600, purple.600)",
                    "linear(to-r, blue.200, purple.200)"
                  )}
                  bgClip="text"
                >
                  Technologies We Master
                </Heading>
                <Text 
                  fontSize="lg"
                  color={useColorModeValue("gray.600", "gray.300")} 
                  maxW="2xl" 
                  mx="auto"
                >
                  We use cutting-edge technologies to build robust and scalable solutions
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                {Object.values(technologies).map((category, index) => (
                  <Box 
                    key={index}
                    p={6}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius="xl"
                    boxShadow="xl"
                    borderWidth="1px"
                    borderColor={useColorModeValue("gray.100", "gray.600")}
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: useColorModeValue(
                        "radial-gradient(circle, rgba(237,242,247,0.8) 0%, rgba(255,255,255,0) 60%)",
                        "radial-gradient(circle, rgba(45,55,72,0.8) 0%, rgba(26,32,44,0) 60%)"
                      ),
                      transform: "rotate(-45deg)",
                      zIndex: 0,
                    }}
                  >
                    <Box position="relative" zIndex={1}>
                      <Text
                        fontWeight="bold"
                        fontSize="lg"
                        mb={4}
                        color={useColorModeValue("gray.800", "white")}
                        bgGradient={useColorModeValue(
                          "linear(to-r, blue.600, purple.600)",
                          "linear(to-r, blue.200, purple.200)"
                        )}
                        bgClip="text"
                      >
                        {category.title}
                      </Text>
                      <SimpleGrid columns={2} spacing={4}>
                        {category.tools.map((tool, idx) => (
                          <Box 
                            key={idx}
                            p={3}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor={useColorModeValue("gray.200", "gray.600")}
                            bg={useColorModeValue("white", "gray.800")}
                            transition="all 0.3s"
                            _hover={{
                              transform: 'translateY(-2px)',
                              shadow: 'lg',
                              borderColor: 'blue.400',
                              bg: useColorModeValue("blue.50", "blue.900"),
                            }}
                          >
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              h="40px"
                              w="40px"
                              mx="auto"
                              mb={2}
                              borderRadius="full"
                              p={1}
                            />
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              textAlign="center"
                              color={useColorModeValue("gray.700", "gray.300")}
                            >
                              {tool.name}
                            </Text>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Box>
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