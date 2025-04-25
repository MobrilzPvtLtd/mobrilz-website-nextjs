import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Stack,
    Icon,
    Button,
    useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import SEO from '../../components/SEO';
import { 
    FaCode, 
    FaMobile, 
    FaCloud, 
    FaPencilRuler, 
    FaPalette, 
    FaTools,
    FaServer,
    FaNetworkWired
} from 'react-icons/fa';

const services = [
    {
        title: 'Web Development',
        description: 'Custom web applications and responsive websites built with modern technologies.',
        icon: FaCode,
        slug: 'web-development'
    },
    {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        icon: FaMobile,
        slug: 'mobile-apps'
    },
    {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions.',
        icon: FaCloud,
        slug: 'cloud-solutions'
    },
    {
        title: 'Custom Software',
        description: 'Bespoke software solutions tailored to your business needs.',
        icon: FaPencilRuler,
        slug: 'custom-software'
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design solutions for digital products.',
        icon: FaPalette,
        slug: 'ui-ux-design'
    },
    {
        title: 'DevOps',
        description: 'Streamline your development and deployment processes.',
        icon: FaTools,
        slug: 'devops'
    },
    {
        title: 'API Integration',
        description: 'Seamless integration of third-party services and APIs.',
        icon: FaServer,
        slug: 'api-integration'
    },
    {
        title: 'Maintenance',
        description: 'Ongoing support and maintenance for your digital solutions.',
        icon: FaNetworkWired,
        slug: 'maintenance'
    }
];

export default function Services() {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const cardBgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const headingColor = useColorModeValue('gray.800', 'white');

    return (
        <>
            <SEO 
                title="Our Services - Mobrilz"
                description="Comprehensive software development and digital transformation services to help your business grow."
            />

            <Box bg={bgColor} minH="100vh">
                {/* Hero Section */}
                <Box py={20} bg={useColorModeValue('blue.50', 'blue.900')}>
                    <Container maxW="container.xl">
                        <Stack spacing={6} textAlign="center">
                            <Heading
                                size="2xl"
                                bgGradient={useColorModeValue(
                                    "linear(to-r, blue.600, purple.600)",
                                    "linear(to-r, blue.200, purple.200)"
                                )}
                                bgClip="text"
                            >
                                Our Services
                            </Heading>
                            <Text
                                fontSize="xl"
                                color={textColor}
                                maxW="3xl"
                                mx="auto"
                            >
                                From web development to cloud solutions, we offer comprehensive 
                                digital services to transform your business.
                            </Text>
                        </Stack>
                    </Container>
                </Box>

                {/* Services Grid */}
                <Box py={20}>
                    <Container maxW="container.xl">
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                            {services.map((service, index) => (
                                <NextLink 
                                    key={index}
                                    href={`/services/${service.slug}`}
                                    passHref
                                >
                                    <Stack
                                        as="a"
                                        p={8}
                                        bg={cardBgColor}
                                        borderRadius="lg"
                                        borderWidth="1px"
                                        borderColor={borderColor}
                                        spacing={4}
                                        cursor="pointer"
                                        _hover={{
                                            transform: 'translateY(-5px)',
                                            shadow: 'xl',
                                            borderColor: 'blue.400'
                                        }}
                                        transition="all 0.3s"
                                    >
                                        <Icon 
                                            as={service.icon} 
                                            boxSize={10} 
                                            color="blue.500"
                                        />
                                        <Stack spacing={2}>
                                            <Heading 
                                                size="md"
                                                color={headingColor}
                                            >
                                                {service.title}
                                            </Heading>
                                            <Text color={textColor}>
                                                {service.description}
                                            </Text>
                                        </Stack>
                                        <Button
                                            variant="link"
                                            colorScheme="blue"
                                            rightIcon={<ChevronRightIcon />}
                                            alignSelf="flex-start"
                                            mt={2}
                                        >
                                            Learn More
                                        </Button>
                                    </Stack>
                                </NextLink>
                            ))}
                        </SimpleGrid>
                    </Container>
                </Box>
            </Box>
        </>
    );
}