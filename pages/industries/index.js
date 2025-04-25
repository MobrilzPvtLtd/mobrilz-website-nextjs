import { 
    Box, 
    Container, 
    Heading, 
    SimpleGrid, 
    Text, 
    Stack,
    Icon,
    useColorModeValue 
} from '@chakra-ui/react';
import { useServices } from '../../hooks/useServices';
import SEO from '../../components/SEO';
import NextLink from 'next/link';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function IndustriesPage() {
    const { industries } = useServices();
    
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const cardBgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.100", "gray.700");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("gray.800", "white");

    const breadcrumbItems = [
        {
            name: 'Home',
            path: '/',
            title: 'Go to Home page',
            description: 'Navigate to home page'
        },
        {
            name: 'Industries',
            path: '/industries',
            title: 'Industries We Serve',
            description: 'View all industries we serve',
            isCurrentPage: true
        }
    ];
    
    return (
        <>
            <SEO 
                title="Industries We Serve - Mobrilz"
                description="Specialized software solutions across various industries and business sectors."
            />
            
            {/* Breadcrumb Section */}
            <Box bg={bgColor} pt={4} pb={0}>
                <Container maxW="container.xl">
                    <Breadcrumb items={breadcrumbItems} aria-label="Industries navigation" />
                </Container>
            </Box>

            {/* Hero Section */}
            <Box bg={useColorModeValue('blue.50', 'blue.900')} py={20}>
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
                            Industries We Serve
                        </Heading>
                        <Text
                            fontSize="xl"
                            color={textColor}
                            maxW="3xl"
                            mx="auto"
                        >
                            Digital transformation solutions tailored for your industry
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Industries Sections */}
            {Object.entries(industries).map(([key, category]) => (
                <Box 
                    key={key}
                    py={20}
                    bg={key === 'solutions' ? cardBgColor : bgColor}
                >
                    <Container maxW="container.xl">
                        <Stack spacing={12}>
                            <Stack textAlign="center" spacing={3}>
                                <Heading size="xl" color={headingColor}>
                                    {category.title}
                                </Heading>
                                <Text color={textColor} maxW="2xl" mx="auto">
                                    {category.description}
                                </Text>
                            </Stack>

                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                                {category.items.map((industry, index) => (
                                    <NextLink 
                                        key={index} 
                                        href={industry.href}
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
                                                borderColor: 'blue.400'
                                            }}
                                            transition="all 0.3s"
                                        >
                                            <Icon 
                                                as={industry.icon} 
                                                boxSize={10} 
                                                color="blue.500" 
                                            />
                                            <Stack spacing={2}>
                                                <Heading 
                                                    size="md" 
                                                    color={headingColor}
                                                >
                                                    {industry.title}
                                                </Heading>
                                                <Text color={textColor}>
                                                    {industry.description}
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </NextLink>
                                ))}
                            </SimpleGrid>
                        </Stack>
                    </Container>
                </Box>
            ))}
        </>
    );
}