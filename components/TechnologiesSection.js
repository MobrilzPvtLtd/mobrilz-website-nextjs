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
import NextLink from 'next/link';

const TechnologiesSection = ({ technologies = [], isError = false, filterType = null, hideHeading }) => {
    if (isError) {
        return (
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
        );
    }

    // Group technologies by type with filtering
    const groupedTechnologies = technologies.reduce((acc, tech) => {
        const type = tech.type || 'Other';

        // If filterType is provided, only include matching technologies
        if (filterType && type.toLowerCase() !== filterType.toLowerCase()) {
            return acc;
        }

        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(tech);
        return acc;
    }, {});

    // If no technologies match the filter
    if (filterType && Object.keys(groupedTechnologies).length === 0) {
        return (
            <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                <Container maxW="container.xl">
                    <Stack spacing={4} align="center">
                        <Heading size="md" color={useColorModeValue("gray.700", "gray.300")}>
                            No technologies found for {filterType}
                        </Heading>
                    </Stack>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            pt={20}
            position="relative"
            overflow="hidden"
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Stack spacing={12}>
                    {!hideHeading && <Stack textAlign="center" spacing={3}>
                        <Heading
                            size="xl"
                            bgGradient={useColorModeValue(
                                "linear(to-r, blue.600, purple.600)",
                                "linear(to-r, blue.200, purple.200)"
                            )}
                            bgClip="text"
                        >
                            Technologies
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
                    }

                    {Object.entries(groupedTechnologies).map(([type, techs]) => (
                        <Box key={type}>
                            <Heading
                                size="md"
                                mb={6}
                                color={useColorModeValue("gray.700", "gray.300")}
                            >
                                {type}
                            </Heading>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={6}>
                                {techs.map((tech) => (
                                    <NextLink
                                        href={`/technology/${tech.slug}`}
                                        passHref
                                        key={tech.id}
                                    >
                                        <Box
                                            as="a"
                                            cursor="pointer"
                                            p={4}



                                            transition="all 0.3s"


                                        >
                                            <Stack align="center" spacing={3}>
                                                <Image
                                                    src={tech.icon?.formats?.thumbnail?.url || tech.icon?.url}
                                                    alt={tech.name}
                                                    h="60px"
                                                    w="60px"
                                                    objectFit="contain"
                                                />
                                                <Text
                                                    textAlign="center"
                                                    fontWeight="medium"
                                                    color={useColorModeValue("gray.700", "gray.200")}
                                                >
                                                    {tech.name}
                                                </Text>
                                            </Stack>
                                        </Box>
                                    </NextLink>
                                ))}
                            </SimpleGrid>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default TechnologiesSection;