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
  Icon,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import Breadcrumb from '../components/common/Breadcrumb';

// Add breadcrumb schema configuration
const breadcrumbSchema = {
  home: {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: 'https://mobrilz.com'
  },
  about: {
    '@type': 'ListItem',
    position: 2,
    name: 'About Us',
    item: 'https://mobrilz.com/about'
  }
};

const AboutPage = () => {
  // Color mode values
  const bgColor = useColorModeValue("white", "gray.900");
  const heroBgColor = useColorModeValue("blue.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const breadcrumbItems = [
    {
      name: 'Home',
      path: '/',
      title: 'Mobrilz Software Solutions Homepage',
      description: 'Leading software development company',
      isCurrentPage: false
    },
    {
      name: 'About Us',
      path: '/about',
      title: 'Learn About Mobrilz Software Solutions',
      description: 'Our story, mission, and team',
      isCurrentPage: true
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - Mobrilz Software Solutions" 
        description="Learn about our journey, mission, and the team behind Mobrilz's innovative software solutions."
      >
        {/* Add Schema.org BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                breadcrumbSchema.home,
                breadcrumbSchema.about
              ]
            })
          }}
        />
      </SEO>

      {/* Hero Section */}
      <Box bg={heroBgColor} py={20}>
        <Container maxW="container.xl">
          <Breadcrumb 
            items={breadcrumbItems}
            aria-label="About page navigation"
          />
          
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} alignItems="center">
            <Stack spacing={6}>
              <Heading 
                size="2xl" 
                color={headingColor}
                lineHeight="shorter"
              >
                Building the Future of Software, Together
              </Heading>
              <Text fontSize="xl" color={textColor}>
                We're a team of passionate developers, designers, and innovators dedicated to 
                transforming businesses through cutting-edge software solutions.
              </Text>
            </Stack>
            <Box>
              <Image 
                src="https://picsum.photos/seed/about-hero/800/600" 
                alt="Our Team"
                borderRadius="xl"
                shadow="2xl"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack textAlign="center" spacing={3} maxW="3xl" mx="auto">
              <Heading size="xl" color={headingColor}>Our Story</Heading>
              <Text color={textColor}>
                Founded in 2020, Mobrilz emerged from a vision to bridge the gap between innovative ideas 
                and exceptional software solutions. What started as a small team of passionate developers 
                has grown into a full-service digital transformation partner.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {milestones.map((milestone, index) => (
                <Box 
                  key={index}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  shadow="lg"
                >
                  <Text 
                    fontWeight="bold" 
                    fontSize="lg"
                    color={headingColor}
                    mb={2}
                  >
                    {milestone.year}
                  </Text>
                  <Text color={textColor}>{milestone.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Mission and Vision */}
      <Box py={20} bg={heroBgColor}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={6}>
              <Heading size="lg" color={headingColor}>Our Mission</Heading>
              <Text color={textColor}>
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and digital transformation, while maintaining the highest standards 
                of quality and client satisfaction.
              </Text>
            </Stack>
            <Stack spacing={6}>
              <Heading size="lg" color={headingColor}>Our Vision</Heading>
              <Text color={textColor}>
                To be the leading force in software development, recognized globally for our 
                innovative solutions, technical excellence, and commitment to delivering 
                exceptional value to our clients.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack textAlign="center" spacing={3}>
              <Heading size="xl" color={headingColor}>Meet Our Team</Heading>
              <Text color={textColor} maxW="2xl" mx="auto">
                Our diverse team of experts brings together years of experience in software 
                development, design, and digital innovation.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
              {teamMembers.map((member, index) => (
                <Stack 
                  key={index}
                  align="center"
                  spacing={4}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  shadow="lg"
                >
                  <Avatar 
                    size="xl" 
                    src={member.image}
                    border="4px solid"
                    borderColor={borderColor}
                  />
                  <Stack spacing={1} textAlign="center">
                    <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                      {member.name}
                    </Text>
                    <Text color={textColor}>{member.position}</Text>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20} bg={heroBgColor}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack textAlign="center" spacing={3}>
              <Heading size="xl" color={headingColor}>Our Values</Heading>
              <Text color={textColor} maxW="2xl" mx="auto">
                These core values guide everything we do and shape how we work with our clients.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {values.map((value, index) => (
                <Stack 
                  key={index}
                  direction="row"
                  spacing={6}
                  p={6}
                  bg={cardBgColor}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  shadow="lg"
                >
                  <Box color="brand.500">
                    <Icon as={value.icon} boxSize={8} />
                  </Box>
                  <Stack spacing={2}>
                    <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                      {value.title}
                    </Text>
                    <Text color={textColor}>{value.description}</Text>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg={useColorModeValue("blue.600", "blue.900")} color="white">
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="xl">Ready to Start Your Project?</Heading>
            <Text fontSize="xl" maxW="2xl" color="whiteAlpha.900">
              Let's discuss how we can help transform your business through innovative software solutions.
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
    </>
  );
};

// Data
const milestones = [
  { year: '2020', description: 'Founded with a vision to transform digital solutions' },
  { year: '2021', description: 'Expanded team and launched enterprise services' },
  { year: '2022', description: 'Achieved key industry certifications and partnerships' }
];

const teamMembers = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    image: 'https://picsum.photos/seed/ceo/200/200'
  },
  {
    name: 'Sarah Johnson',
    position: 'Technical Lead',
    image: 'https://picsum.photos/seed/tech-lead/200/200'
  },
  {
    name: 'Mike Brown',
    position: 'Design Director',
    image: 'https://picsum.photos/seed/designer/200/200'
  },
  {
    name: 'Emily Davis',
    position: 'Project Manager',
    image: 'https://picsum.photos/seed/pm/200/200'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries and embracing new technologies',
    icon: FaLightbulb
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional quality in everything we do',
    icon: FaRocket
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve outstanding results',
    icon: FaHandshake
  },
  {
    title: 'Client Focus',
    description: "Putting our clients' success at the heart of our work", // Changed to double quotes
    icon: FaUsers
  }
];

export default AboutPage;