import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Stack,
    Tag,
    Button,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CalendarIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import { getStrapiAPI } from '../../utils/api';

export async function getStaticPaths() {
    try {
        const portfolios = await getStrapiAPI("/portfolios", {
            fields: ['slug']
        });

        const paths = portfolios.data.map((portfolio) => ({
            params: { portfolio: portfolio.slug }
        }));

        return {
            paths,
            fallback: false // Make it fully static
        };
    } catch (error) {
        console.error('Error fetching paths:', error);
        return {
            paths: [],
            fallback: false
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const portfolios = await getStrapiAPI("/portfolios", {
            filters: {
                slug: params.portfolio
            },
            populate: {
                ThumbnailImage: { populate: '*' },
                GalleryImages: { populate: '*' },
                technologies: { populate: '*' },
                portfolio_categories: { populate: '*' }
            }
        });

        if (!portfolios.data?.[0]) {
            return {
                notFound: true,
                revalidate: false // Remove revalidation
            };
        }

        return {
            props: {
                portfolio: portfolios.data[0],
                isError: false
            },
            revalidate: false // Remove revalidation
        };
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        return {
            props: {
                portfolio: null,
                isError: true
            },
            revalidate: false // Remove revalidation
        };
    }
}

export default function PortfolioDetail({ portfolio, isError }) {
    if (isError || !portfolio) {
        return (
            <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                <Container maxW="container.xl">
                    <Stack spacing={6} textAlign="center">
                        <Heading color={useColorModeValue("gray.800", "white")}>
                            Project Not Found
                        </Heading>
                        <Text color="red.500">
                            Unable to load project details. Please try again later.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        );
    }

    const {
        ProjectName,
        ClientName,
        ProjectDescription,
        ProjectURL,
        ThumbnailImage,
        GalleryImages,
        portfolio_categories
    } = portfolio;

    // Get the correct image URL
    const thumbnailUrl = ThumbnailImage?.formats?.large?.url || ThumbnailImage?.url;
    const projectDescription = typeof ProjectDescription === 'string' 
        ? ProjectDescription 
        : ProjectDescription?.[0]?.children?.[0]?.text || 'No description available';

    return (
        <>
            <Head>
                <title>{ProjectName} - Portfolio</title>
                <meta 
                    name="description" 
                    content={projectDescription} 
                />
            </Head>

            <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
                {/* Hero Section */}
                <Box 
                    position="relative"
                    h={{ base: "300px", md: "500px" }}
                >
                    {thumbnailUrl && (
                        <Image
                            src={thumbnailUrl}
                            alt={ProjectName}
                            w="full"
                            h="full"
                            objectFit="cover"
                        />
                    )}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bg="blackAlpha.600"
                    />
                    <Container
                        maxW="container.xl"
                        position="absolute"
                        bottom={10}
                        left="50%"
                        transform="translateX(-50%)"
                    >
                        <Stack spacing={4} color="white">
                            <Heading size="2xl">{ProjectName}</Heading>
                            {ClientName && (
                                <Text fontSize="xl">Client: {ClientName}</Text>
                            )}
                        </Stack>
                    </Container>
                </Box>

                {/* Project Details */}
                <Container maxW="container.xl" py={20}>
                    <Stack spacing={10}>
                        {/* Project Info */}
                        <Stack spacing={6}>
                            {projectDescription && (
                                <Text
                                    fontSize="lg"
                                    color={useColorModeValue("gray.700", "gray.300")}
                                >
                                    {projectDescription}
                                </Text>
                            )}

                            {/* Categories */}
                            {Array.isArray(portfolio_categories) && portfolio_categories.length > 0 && (
                                <Stack direction="row" spacing={2} flexWrap="wrap">
                                    {portfolio_categories.map((category, index) => (
                                        <Tag
                                            key={index}
                                            size="md"
                                            colorScheme="blue"
                                            variant="solid"
                                        >
                                            {category?.name || 'Unknown Category'}
                                        </Tag>
                                    ))}
                                </Stack>
                            )}

                            {/* Project Link */}
                            {ProjectURL && (
                                <Button
                                    as="a"
                                    href={ProjectURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    colorScheme="blue"
                                    leftIcon={<ExternalLinkIcon />}
                                    size="lg"
                                >
                                    Visit Project
                                </Button>
                            )}
                        </Stack>

                        {/* Gallery */}
                        {Array.isArray(GalleryImages) && GalleryImages.length > 0 && (
                            <Box>
                                <Heading size="lg" mb={6}>Project Gallery</Heading>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    {GalleryImages.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image?.formats?.large?.url || image?.url}
                                            alt={`${ProjectName} gallery image ${index + 1}`}
                                            borderRadius="lg"
                                            w="full"
                                            h="400px"
                                            objectFit="cover"
                                        />
                                    ))}
                                </SimpleGrid>
                            </Box>
                        )}
                    </Stack>
                </Container>
            </Box>
        </>
    );
}