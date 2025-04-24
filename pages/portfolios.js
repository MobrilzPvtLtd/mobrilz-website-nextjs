import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Button,
    Stack,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import { getStrapiAPI } from '../utils/api';
import NextLink from 'next/link';

export async function getStaticProps() {
    try {
        const portfoliosRes = await getStrapiAPI("/portfolios", {
            sort: ['id:desc'],
            populate: {
                ThumbnailImage: { populate: '*' },
                technologies: { populate: '*' },
                portfolio_categories: { populate: '*' }
            }
        });

        return {
            props: {
                portfolios: portfoliosRes?.data || [],
                isError: false
            },
            revalidate: 60
        };
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        return {
            props: {
                portfolios: [],
                isError: true
            },
            revalidate: 60
        };
    }
}

export default function Portfolios({ portfolios = [], isError = false }) {
    if (isError) {
        return (
            <>
                <Head>
                    <title>Our Portfolio - Error</title>
                </Head>
                <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                    <Container maxW="container.xl">
                        <Stack spacing={12}>
                            <Stack textAlign="center" spacing={3}>
                                <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                                    Our Portfolio
                                </Heading>
                                <Text color="red.500">
                                    Unable to load portfolio items. Please try again later.
                                </Text>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Our Portfolio - Featured Projects</title>
                <meta 
                    name="description" 
                    content="Explore our portfolio of successful projects and digital solutions" 
                />
            </Head>

            <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
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
                                Our Portfolio
                            </Heading>
                            <Text
                                fontSize="xl"
                                color={useColorModeValue("gray.600", "gray.300")}
                                maxW="2xl"
                                mx="auto"
                            >
                                Discover our successful projects and see how we've helped businesses grow
                            </Text>
                        </Stack>
                    </Container>
                </Box>

                {/* Portfolio Grid */}
                <Box py={20}>
                    <Container maxW="container.xl">
                        {portfolios.length > 0 ? (
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                                {portfolios.map((project) => (
                                    <NextLink href={`/portfolio/${project.slug}`} passHref key={project.id}>
                                        <Box
                                            as="a"
                                            cursor="pointer"
                                            overflow="hidden"
                                            borderRadius="xl"
                                            boxShadow="xl"
                                            bg={useColorModeValue("white", "gray.800")}
                                            transition="all 0.3s"
                                            _hover={{
                                                transform: 'translateY(-5px)',
                                                shadow: '2xl'
                                            }}
                                            borderWidth="1px"
                                            borderColor={useColorModeValue("gray.100", "gray.700")}
                                        >
                                            <Box position="relative">
                                                <Image
                                                    src={project.ThumbnailImage?.formats?.large?.url || project.ThumbnailImage?.url}
                                                    alt={project.ProjectName || 'Portfolio Project'}
                                                    h="250px"
                                                    w="full"
                                                    objectFit="cover"
                                                />
                                                {project.Featured && (
                                                    <Tag
                                                        position="absolute"
                                                        top={4}
                                                        right={4}
                                                        colorScheme="blue"
                                                        size="sm"
                                                    >
                                                        Featured
                                                    </Tag>
                                                )}
                                            </Box>

                                            <Stack p={6} spacing={4}>
                                                <Stack spacing={2}>
                                                    <Heading
                                                        size="md"
                                                        color={useColorModeValue("gray.800", "white")}
                                                    >
                                                        {project.ProjectName || 'Untitled Project'}
                                                    </Heading>
                                                    {project.ClientName && (
                                                        <Text
                                                            fontSize="sm"
                                                            color={useColorModeValue("gray.600", "gray.300")}
                                                        >
                                                            {project.ClientName}
                                                        </Text>
                                                    )}
                                                </Stack>

                                                {project.ProjectDescription && (
                                                    <Text
                                                        color={useColorModeValue("gray.600", "gray.300")}
                                                        noOfLines={3}
                                                    >
                                                        {typeof project.ProjectDescription === 'string' 
                                                            ? project.ProjectDescription 
                                                            : 'No description available'}
                                                    </Text>
                                                )}

                                                {Array.isArray(project.portfolio_categories) && project.portfolio_categories.length > 0 && (
                                                    <Stack direction="row" spacing={2} flexWrap="wrap">
                                                        {project.portfolio_categories.map((category, index) => (
                                                            <Tag
                                                                key={index}
                                                                size="sm"
                                                                colorScheme="blue"
                                                                variant="subtle"
                                                            >
                                                                {typeof category === 'string' ? category : category.name || 'Category'}
                                                            </Tag>
                                                        ))}
                                                    </Stack>
                                                )}

                                                {project.ProjectURL && (
                                                    <Button
                                                        as="a"
                                                        href={project.ProjectURL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        variant="ghost"
                                                        colorScheme="blue"
                                                        rightIcon={<ExternalLinkIcon />}
                                                        size="sm"
                                                    >
                                                        View Project
                                                    </Button>
                                                )}
                                            </Stack>
                                        </Box>
                                    </NextLink>
                                ))}
                            </SimpleGrid>
                        ) : (
                            <Stack spacing={4} textAlign="center">
                                <Heading size="md" color={useColorModeValue("gray.600", "gray.400")}>
                                    No Projects Available
                                </Heading>
                                <Text color={useColorModeValue("gray.500", "gray.500")}>
                                    Check back later for updates to our portfolio.
                                </Text>
                            </Stack>
                        )}
                    </Container>
                </Box>
            </Box>
        </>
    );
}