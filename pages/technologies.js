import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { getStrapiAPI } from '../utils/api';
import Head from 'next/head';
import NextLink from 'next/link';

export async function getStaticProps() {
    try {
        const technologiesRes = await getStrapiAPI("/technologies", {
            populate: '*',
            sort: ['type:asc', 'name:asc']
        });

        return {
            props: {
                technologies: technologiesRes?.data || [],
                isError: false
            },
            revalidate: false // Remove revalidation to make it fully static
        };
    } catch (error) {
        console.error('Error fetching technologies:', error);
        return {
            props: {
                technologies: [],
                isError: true
            },
            revalidate: false // Remove revalidation to make it fully static
        };
    }
}

export default function Technologies({ technologies = [], isError = false }) {
    if (isError) {
        return (
            <>
                <Head>
                    <title>Technologies - Error</title>
                </Head>
                <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                    <Container maxW="container.xl">
                        <Stack spacing={12}>
                            <Stack textAlign="center" spacing={3}>
                                <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                                    Our Technologies
                                </Heading>
                                <Text color="red.500">
                                    Unable to load technologies. Please try again later.
                                </Text>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </>
        );
    }

    // Group technologies by type
    const groupedTechnologies = technologies.reduce((acc, tech) => {
        const type = tech.type || 'Other';
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(tech);
        return acc;
    }, {});

    return (
        <>
            <Head>
                <title>Our Technology Stack</title>
                <meta 
                    name="description" 
                    content="Explore our comprehensive technology stack that we use to build modern web applications" 
                />
            </Head>

            <Box
                minH="100vh"
                bg={useColorModeValue("gray.50", "gray.900")}
            >
                {/* Hero Section */}
                <Box 
                    bg={useColorModeValue("blue.50", "blue.900")} 
                    py={20}
                >
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
                                Our Technology Stack
                            </Heading>
                            <Text
                                fontSize="xl"
                                color={useColorModeValue("gray.600", "gray.300")}
                                maxW="2xl"
                                mx="auto"
                            >
                                We leverage cutting-edge technologies to build robust, scalable, and modern applications
                            </Text>
                        </Stack>
                    </Container>
                </Box>

                {/* Technologies Grid */}
                <Box py={20}>
                    <Container maxW="container.xl">
                        <Stack spacing={16}>
                            {Object.entries(groupedTechnologies).map(([type, techs]) => (
                                <Stack key={type} spacing={8}>
                                    <Heading
                                        size="lg"
                                        color={useColorModeValue("gray.700", "gray.200")}
                                        borderBottom="2px"
                                        borderColor={useColorModeValue("blue.500", "blue.400")}
                                        pb={2}
                                    >
                                        {type}
                                    </Heading>
                                    <SimpleGrid 
                                        columns={{ base: 2, sm: 3, md: 4, lg: 5 }} 
                                        spacing={8}
                                    >
                                        {techs.map((tech) => (
                                            <NextLink href={`/technology/${tech.slug}`} passHref key={tech.id}>
                                                <Box
                                                    as="a"
                                                    cursor="pointer"
                                                    p={6}
                                                    bg={useColorModeValue("white", "gray.800")}
                                                    borderRadius="xl"
                                                    boxShadow="lg"
                                                    transition="all 0.3s"
                                                    _hover={{
                                                        transform: 'translateY(-5px)',
                                                        shadow: '2xl',
                                                        borderColor: 'blue.400',
                                                    }}
                                                    borderWidth="1px"
                                                    borderColor={useColorModeValue("gray.200", "gray.700")}
                                                >
                                                    <Stack spacing={4} align="center">
                                                        <Box 
                                                            h="80px" 
                                                            w="80px" 
                                                            position="relative"
                                                        >
                                                            <Image
                                                                src={tech.icon?.formats?.thumbnail?.url || tech.icon?.url}
                                                                alt={tech.name}
                                                                w="full"
                                                                h="full"
                                                                objectFit="contain"
                                                            />
                                                        </Box>
                                                        <Stack spacing={1} textAlign="center">
                                                            <Text
                                                                fontWeight="bold"
                                                                fontSize="lg"
                                                                color={useColorModeValue("gray.700", "white")}
                                                            >
                                                                {tech.name}
                                                            </Text>
                                                            <Text
                                                                fontSize="sm"
                                                                color={useColorModeValue("gray.600", "gray.400")}
                                                            >
                                                                {tech.type}
                                                            </Text>
                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </NextLink>
                                        ))}
                                    </SimpleGrid>
                                </Stack>
                            ))}
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </>
    );
}