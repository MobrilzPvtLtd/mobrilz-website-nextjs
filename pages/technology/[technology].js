import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Stack,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { getStrapiAPI } from '../../utils/api';

export async function getStaticPaths() {
    try {
        const technologies = await getStrapiAPI("/technologies", {
            fields: ['slug']
        });

        const paths = technologies.data.map((tech) => ({
            params: { technology: tech.slug }
        }));

        return {
            paths,
            fallback: 'blocking'
        };
    } catch (error) {
        console.error('Error fetching paths:', error);
        return {
            paths: [],
            fallback: 'blocking'
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const technologies = await getStrapiAPI("/technologies", {
            filters: {
                slug: params.technology
            },
            populate: {
                icon: {
                    fields: ['url', 'formats']
                },
                portfolios: {
                    populate: {
                        ThumbnailImage: {
                            fields: ['url', 'formats']
                        }
                    },
                    fields: ['ProjectName', 'ProjectDescription', 'slug']
                }
            }
        });

        if (!technologies.data?.[0]) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                technology: technologies.data[0],
                isError: false
            },
            revalidate: 60
        };
    } catch (error) {
        console.error('Error fetching technology:', error);
        return {
            props: {
                technology: null,
                isError: true
            },
            revalidate: 60
        };
    }
}

export default function TechnologyDetail({ technology, isError }) {
    if (isError || !technology) {
        return (
            <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                <Container maxW="container.xl">
                    <Stack spacing={6} textAlign="center">
                        <Heading color={useColorModeValue("gray.800", "white")}>
                            Technology Not Found
                        </Heading>
                        <Text color="red.500">
                            Unable to load technology details. Please try again later.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        );
    }

    const {
        name,
        type,
        icon,
        portfolios
    } = technology;

    const iconUrl = icon?.formats?.medium?.url || icon?.url;

    return (
        <>
            <Head>
                <title>{name} - Technology Stack</title>
                <meta 
                    name="description" 
                    content={`Learn about how we use ${name} in our projects`} 
                />
            </Head>

            <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
                {/* Hero Section */}
                <Box 
                    bg={useColorModeValue("blue.50", "blue.900")} 
                    py={20}
                >
                    <Container maxW="container.xl">
                        <Stack spacing={8} align="center">
                            {iconUrl && (
                                <Box 
                                    w={{ base: "120px", md: "200px" }}
                                    h={{ base: "120px", md: "200px" }}
                                >
                                    <Image
                                        src={iconUrl}
                                        alt={name}
                                        w="full"
                                        h="full"
                                        objectFit="contain"
                                    />
                                </Box>
                            )}
                            <Stack spacing={4} textAlign="center">
                                <Heading
                                    size="2xl"
                                    bgGradient={useColorModeValue(
                                        "linear(to-r, blue.600, purple.600)",
                                        "linear(to-r, blue.200, purple.200)"
                                    )}
                                    bgClip="text"
                                >
                                    {name}
                                </Heading>
                                <Text
                                    fontSize="xl"
                                    color={useColorModeValue("gray.600", "gray.300")}
                                >
                                    {type}
                                </Text>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>

                {/* Related Projects Section */}
                {Array.isArray(portfolios) && portfolios.length > 0 && (
                    <Box py={20}>
                        <Container maxW="container.xl">
                            <Stack spacing={10}>
                                <Heading 
                                    size="xl"
                                    color={useColorModeValue("gray.800", "white")}
                                    textAlign="center"
                                >
                                    Projects Built with {name}
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                                    {portfolios.map((project) => (
                                        <NextLink 
                                            href={`/portfolio/${project.slug}`} 
                                            passHref 
                                            key={project.id}
                                        >
                                            <Box
                                                as="a"
                                                cursor="pointer"
                                                bg={useColorModeValue("white", "gray.800")}
                                                boxShadow="lg"
                                                borderRadius="lg"
                                                overflow="hidden"
                                                transition="all 0.3s"
                                                _hover={{
                                                    transform: 'translateY(-5px)',
                                                    shadow: '2xl'
                                                }}
                                            >
                                                {project.ThumbnailImage && (
                                                    <Image
                                                        src={project.ThumbnailImage?.formats?.medium?.url || project.ThumbnailImage?.url}
                                                        alt={project.ProjectName}
                                                        h="200px"
                                                        w="full"
                                                        objectFit="cover"
                                                    />
                                                )}
                                                <Box p={6}>
                                                    <Stack spacing={3}>
                                                        <Heading size="md">
                                                            {project.ProjectName}
                                                        </Heading>
                                                        {project.ProjectDescription && (
                                                            <Text 
                                                                color={useColorModeValue("gray.600", "gray.300")}
                                                                noOfLines={2}
                                                            >
                                                                {project.ProjectDescription}
                                                            </Text>
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </NextLink>
                                    ))}
                                </SimpleGrid>
                            </Stack>
                        </Container>
                    </Box>
                )}
            </Box>
        </>
    );
}