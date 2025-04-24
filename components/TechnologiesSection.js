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

const TechnologiesSection = ({ technologies = [], isError = false }) => {
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
        <Box
            py={20}
            position="relative"
            overflow="hidden"
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Stack spacing={12}>
                    <Stack textAlign="center" spacing={3}>
                        <Heading
                            size="xl"
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
                                    <Box
                                        key={tech.id}
                                        p={4}
                                        bg={useColorModeValue("white", "gray.700")}
                                        borderRadius="xl"
                                        boxShadow="lg"
                                        transition="all 0.3s"
                                        _hover={{
                                            transform: 'translateY(-5px)',
                                            shadow: '2xl'
                                        }}
                                    >
                                        <Image
                                            src={tech.icon?.formats?.thumbnail?.url || tech.icon?.url}
                                            alt={tech.name}
                                            h="60px"
                                            w="60px"
                                            mx="auto"
                                            mb={3}
                                            objectFit="contain"
                                        />
                                        <Text
                                            textAlign="center"
                                            fontWeight="medium"
                                            color={useColorModeValue("gray.700", "gray.200")}
                                        >
                                            {tech.name}
                                        </Text>
                                    </Box>
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