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
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const PortfolioSection = ({ portfolios = [], isError = false }) => {
    if (isError) {
        return (
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
        );
    }

    return (
        <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
            <Container maxW="container.xl">
                <Stack spacing={12}>
                    <Stack textAlign="center" spacing={3}>
                        <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                            Our Portfolio
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.600", "gray.300")}
                            maxW="2xl"
                            mx="auto"
                        >
                            Take a look at some of our successful projects
                        </Text>
                    </Stack>

                    {portfolios?.length > 0 ? (
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {portfolios.map((project) => (
                                <NextLink href={`/portfolio/${project.slug}`} passHref key={project.id}>
                                    <Box
                                        as="a"
                                        cursor="pointer"
                                        overflow="hidden"
                                        borderRadius="lg"
                                        boxShadow="lg"
                                        bg={useColorModeValue("white", "gray.700")}
                                        transition="all 0.3s"
                                        _hover={{
                                            transform: 'translateY(-5px)',
                                            shadow: '2xl'
                                        }}
                                    >
                                        <Image
                                            src={project.ThumbnailImage?.url || project.ThumbnailImage?.formats?.large?.url}
                                            alt={project.ProjectName || 'Project Image'}
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
                                                {project.ProjectName}
                                            </Heading>
                                            {project.ProjectDescription && (
                                                <Text
                                                    color={useColorModeValue("gray.600", "gray.300")}
                                                    mb={4}
                                                >
                                                    {typeof project.ProjectDescription === 'string' 
                                                        ? project.ProjectDescription 
                                                        : project.ProjectDescription?.[0]?.children?.[0]?.text}
                                                </Text>
                                            )}
                                            {project.portfolio_categories?.length > 0 && (
                                                <Stack direction="row" spacing={2} mb={4} flexWrap="wrap">
                                                    {project.portfolio_categories.map((category, index) => (
                                                        <Tag
                                                            key={index}
                                                            colorScheme="blue"
                                                            size="sm"
                                                        >
                                                            {category.CategoryName}
                                                        </Tag>
                                                    ))}
                                                </Stack>
                                            )}
                                            {project.ProjectURL && (
                                                <NextLink
                                                    href={project.ProjectURL}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <Button
                                                        as="a"
                                                        variant="ghost"
                                                        colorScheme="blue"
                                                        rightIcon={<ChevronRightIcon />}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        View Project
                                                    </Button>
                                                </NextLink>
                                            )}
                                        </Box>
                                    </Box>
                                </NextLink>
                            ))}
                        </SimpleGrid>
                    ) : (
                        <Text textAlign="center" color={useColorModeValue("gray.600", "gray.400")}>
                            No portfolio items available at the moment.
                        </Text>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default PortfolioSection;