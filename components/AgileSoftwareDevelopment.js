import { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Icon,
    useColorModeValue,
    Badge,
    Card,
    CardBody,
    Stack,
    Image,
    VStack,
    HStack,
    Divider,
    Button,
    Center,
    Tooltip,
} from '@chakra-ui/react';
import {
    FaCode,
    FaMobile,
    FaServer,
    FaCloud,
    FaRocket,
    FaGithub,
    FaJenkins,
    FaDocker,
    FaReact,
    FaAngular,
    FaVuejs,
    FaNodeJs,
    FaPython,
    FaJava,
    FaPhp,
    FaSwift,
    FaAndroid,
    FaArrowDown,
    FaArrowRight
} from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

// Animation for the path indicator
const pulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;


export default function AgileSoftwareDevelopment() {
    const bgColor = useColorModeValue('#dce6fa', 'blue.900');
    const cardBg = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('blue.100', 'blue.600');
    const pathColor = useColorModeValue('blue.300', 'blue.500');

    const [activeSection, setActiveSection] = useState(null);

    const techStacks = {
        backend: [
            { name: "Laravel", color: "#FF2D20", icon: () => <Text fontSize="lg">♥</Text> },
            { name: "Adonis JS", color: "#5A45FF", icon: () => <Text fontSize="lg">▲</Text> },
            { name: "Express JS", color: "#000000", icon: () => <Text fontSize="lg">⬡</Text> }
        ],
        frontend: [
            { name: "Vue JS", color: "#4FC08D", icon: () => <Text fontSize="lg">▼</Text> },
            { name: "Nuxt JS", color: "#00DC82", icon: () => <Text fontSize="lg">△</Text> },
            { name: "React JS", color: "#61DAFB", icon: () => <Text fontSize="lg">⚛</Text> }
        ],
        database: [
            { name: "MySQL", color: "#4479A1", icon: () => <Text fontSize="lg">⟩</Text> },
            { name: "Rethink DB", color: "#273238", icon: () => <Text fontSize="lg">⟋</Text> },
            { name: "Mongo DB", color: "#47A248", icon: () => <Text fontSize="lg">◉</Text> },
            { name: "Fauna DB", color: "#3A1B6", icon: () => <Text fontSize="lg">▼</Text> }
        ],
        api: [
            { name: "Fastify", color: "#000000", icon: () => <Text fontSize="lg">⚡</Text> },
            { name: "Restify", color: "#00A1B0", icon: () => <Text fontSize="lg">⫽</Text> },
            { name: "Express JS", color: "#000000", icon: () => <Text fontSize="lg">⬡</Text> },
            { name: "Lumen", color: "#E74430", icon: () => <Text fontSize="lg">🔥</Text> },
            { name: "Koa.js", color: "#33333D", icon: () => <Text fontSize="lg">🐼</Text> },
            { name: "Hapi.js", color: "#F6941E", icon: () => <Text fontSize="lg">⚙️</Text> }
        ]
    };

    const devOpsSteps = [
        { name: 'GitHub', icon: FaGithub, description: 'Source Control' },
        { name: 'Jenkins', icon: FaJenkins, description: 'CI/CD Pipeline' },
        { name: 'Docker', icon: FaDocker, description: 'Containerization' }
    ];

    const deploymentOptions = [
        { name: 'AWS', icon: FaCloud, description: 'Cloud Hosting' },
        { name: 'Azure', icon: FaCloud, description: 'Microsoft Cloud' },
        { name: 'GCP', icon: FaCloud, description: 'Google Cloud Platform' }
    ];

    const solutions = {
        web: [
            'Single Page Applications',
            'PWA (Progressive Web Apps)',
            'CMS Development',
            'API Development',
            'Custom CMS',
            'Web Apps',
            'eCommerce Cloud'
        ],
        mobile: [
            'eCommerce Apps',
            'Real-Time Apps',
            'Android Apps',
            'iOS/iPadOS Apps',
            'Chat & Video Apps',
            'Unity Apps',
            'WebView Apps'
        ]
    };


    return (
        <Box bg={bgColor} py={10} minH="100vh">
            <Container maxW="container.xl">
                <VStack spacing={6} align="stretch">
                    {/* Header */}
                    <Box textAlign="center" mb={4}>
                        <Heading as="h1" size="xl" mb={2}>Agile Software Development</Heading>
                        <Text color="gray.600">Our processes are proven, the expertise is there and our tools are top-notch</Text>
                    </Box>

                    {/* Web & Mobile Section */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
                        {/* Web Section */}
                        <Box

                            borderStyle="dashed"
                            borderColor={borderColor}
                            borderRadius="lg"
                            p={6}
                            position="relative"
                            onMouseEnter={() => setActiveSection('web')}
                            onMouseLeave={() => setActiveSection(null)}
                        >
                            <Heading as="h3" size="md" textAlign="center" mb={0}>Web</Heading>

                            {/* Background Box */}
                            <Box
                                borderTop="2px"
                                borderLeft="2px"
                                borderBottom="2px"
                                borderStyle="dashed"
                                borderTopLeftRadius="3xl"     // Changed from borderRadius
                                borderBottomLeftRadius="3xl"  // Added for left side only
                                borderTopRightRadius="none"   // Explicitly remove right side rounding
                                borderBottomRightRadius="none"// Explicitly remove right side rounding
                                p={4}
                                position="absolute"
                                top="11%"
                                left="31%"
                                transform="translate(-50%, -50%)"
                                height="15%"
                                width="29%"
                                zIndex={1}
                                opacity={0.5}
                                _hover={{
                                    opacity: 0.8,
                                    transition: "opacity 0.3s"
                                }}
                            >
                                <ChevronDownIcon
                                    position="absolute"
                                    left="-4"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    w={7}
                                    h={7}
                                    p={0.5}
                                    borderRadius="full"
                                    bg="white"
                                    border="2px"
                                    _hover={{
                                        color: "blue.500",
                                        transition: "color 0.3s",
                                        boxShadow: "sm"
                                    }}
                                />
                            </Box>

                            {/* Main Content Box */}
                            <Box
                                p={1}
                                borderRadius="md"
                                textAlign="center"
                                position="relative"
                                zIndex={2}
                            >
                                <Image
                                    src="https://webreinvent.com/images/we-build-web.png"
                                    alt="Web Development"
                                    borderRadius="md"
                                    mb={2}
                                    p={10}
                                />
                            </Box>
                            <Box
                                borderTop="2px"
                                borderRight="2px"
                                borderBottom="2px"
                                borderStyle="dashed"
                                borderTopRightRadius="3xl"     // Changed from borderRadius
                                borderBottomRightRadius="3xl"  // Added for left side only
                                borderTopLeftRadius="none"   // Explicitly remove right side rounding
                                borderBottomLeftRadius="none"// Explicitly remove right side rounding
                                p={4}
                                position="absolute"
                                top="28%"
                                left="74%"
                                transform="translate(-50%, -50%)"
                                height="21%"
                                width="27%"
                                zIndex={1}
                                opacity={0.5}
                                _hover={{
                                    opacity: 0.8,
                                    transition: "opacity 0.3s"
                                }}
                            >
                                <ChevronDownIcon
                                    position="absolute"
                                    right="-4"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    w={7}
                                    h={7}
                                    p={0.5}
                                    borderRadius="full"
                                    bg="white"
                                    border="2px"
                                    _hover={{
                                        color: "blue.500",
                                        transition: "color 0.3s",
                                        boxShadow: "sm"
                                    }}
                                />
                            </Box>

                            <Box p={3} borderRadius="lg">

                                <Heading as="h3" size="md" textAlign="center" mb={6}>Tech Stack</Heading>

                                <SimpleGrid columns={2} spacing={10}>
                                    {/* Left column - APPS */}
                                    <VStack spacing={4} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600" mb={2}>
                                            APPS
                                        </Text>

                                        {/* Backend section */}
                                        <Flex>

                                            <Center mr={2}>
                                                <Box
                                                    transform="rotate(-90deg)"
                                                    width="24px"
                                                    height="100px"
                                                    whiteSpace="nowrap"  // Prevents text wrapping
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="semibold"
                                                        color="blue.300"
                                                        textAlign="center"
                                                        transform="translateX(-8%)"   // Adjusts text position
                                                    >
                                                        BACKEND
                                                    </Text>
                                                </Box>
                                            </Center>

                                            <Box
                                                bg="white"
                                                p={0}
                                                boxShadow='0 0 0 2px rgba(149, 180, 206, 0.6)'
                                                borderRadius="lg"
                                                overflow="hidden"
                                                width={"80%"}
                                            >
                                                <VStack spacing={0} align="stretch">
                                                    {techStacks.backend.map((tech, index) => (
                                                        <HStack
                                                            key={index}
                                                            p={2}
                                                            bg="#dfeffc"
                                                            borderTopRadius={index === 0 ? "lg" : "none"}
                                                            borderBottomRadius={index === techStacks.backend.length - 1 ? "lg" : "none"}
                                                            borderBottom={index === techStacks.backend.length - 1 ? "none" : "1px solid"}
                                                            borderColor="gray.300"
                                                            pl={8}
                                                            align="center"
                                                            spacing={3}
                                                        >
                                                            <Box
                                                                color={tech.color}
                                                                width="24px"
                                                                textAlign="center"
                                                                display="flex"
                                                                alignItems="center"
                                                                justifyContent="center"
                                                            >
                                                                {tech.icon()}
                                                            </Box>
                                                            <Text fontSize="sm" textColor="blue.500" textAlign="center">{tech.name}</Text>
                                                        </HStack>
                                                    ))}
                                                </VStack>
                                            </Box>
                                        </Flex>

                                        {/* Frontend section */}
                                        <Flex py={3}>
                                            <Center mr={2}>
                                                <Box
                                                    transform="rotate(-90deg)"
                                                    width="24px"
                                                    height="100px"
                                                    whiteSpace="nowrap"  // Prevents text wrapping
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="semibold"
                                                        color="blue.300"
                                                        textAlign="center"
                                                        transform="translateX(-8%)"   // Adjusts text position
                                                    >
                                                        FRONTEND
                                                    </Text>
                                                </Box>
                                            </Center>
                                            <Box
                                                bg="white"
                                                p={0}
                                                boxShadow='0 0 0 2px rgba(149, 180, 206, 0.6)'
                                                borderRadius="lg"
                                                overflow="hidden"
                                                width={"80%"}
                                            >
                                                <VStack spacing={0} align="stretch">
                                                    {techStacks.frontend.map((tech, index) => (
                                                        <HStack
                                                            key={index}
                                                            p={2}
                                                            bg="#dfeffc"
                                                            borderTopRadius={index === 0 ? "lg" : "none"}
                                                            borderBottomRadius={index === techStacks.frontend.length - 1 ? "lg" : "none"}
                                                            borderBottom={index === techStacks.frontend.length - 1 ? "none" : "1px solid"}
                                                            borderColor="gray.300"
                                                            pl={12}
                                                            align="center"
                                                            spacing={3}
                                                        >
                                                            <Box
                                                                color={tech.color}
                                                                width="24px"
                                                                textAlign="center"
                                                                display="flex"
                                                                alignItems="center"
                                                                justifyContent="center"
                                                            >
                                                                {tech.icon()}
                                                            </Box>
                                                            <Text fontSize="sm" textColor="blue.500" textAlign="center">{tech.name}</Text>
                                                        </HStack>
                                                    ))}
                                                </VStack>
                                            </Box>
                                        </Flex>

                                        {/* Database section */}
                                        <Flex>
                                            <Center mr={2}>
                                                <Box
                                                    transform="rotate(-90deg)"
                                                    width="24px"
                                                    height="100px"
                                                    whiteSpace="nowrap"  // Prevents text wrapping
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="semibold"
                                                        color="blue.300"
                                                        textAlign="center"
                                                        transform="translateX(-8%)"  // Adjusts text position
                                                    >
                                                        DATABASE
                                                    </Text>
                                                </Box>
                                            </Center>
                                            <Box
                                                bg="white"
                                                p={0}
                                                boxShadow='0 0 0 2px rgba(149, 180, 206, 0.6)'
                                                borderRadius="lg"
                                                overflow="hidden"
                                                width={"80%"}
                                                
                                            >
                                                <VStack spacing={0} align="stretch">
                                                    {techStacks.database.map((tech, index) => (
                                                        <HStack
                                                            key={index}
                                                            p={2}
                                                            bg="#dfeffc"
                                                            borderTopRadius={index === 0 ? "lg" : "none"}
                                                            borderBottomRadius={index === techStacks.database.length - 1 ? "lg" : "none"}
                                                            borderBottom={index === techStacks.database.length - 1 ? "none" : "1px solid"}
                                                            borderColor="gray.300"
                                                            pl={12}
                                                            align="center"
                                                            spacing={3}
                                                        >
                                                            <Box
                                                                color={tech.color}
                                                                width="24px"
                                                                textAlign="center"
                                                                display="flex"
                                                                alignItems="center"
                                                                justifyContent="center"
                                                            >
                                                                {tech.icon()}
                                                            </Box>
                                                            <Text fontSize="sm" textColor="blue.500" textAlign="center">{tech.name}</Text>
                                                        </HStack>
                                                    ))}
                                                </VStack>
                                            </Box>
                                        </Flex>
                                    </VStack>

                                    {/* Right column - API */}
                                    <VStack spacing={4} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600" >
                                            API
                                        </Text>
                                        <Box
                                            bg="white"
                                            p={0}
                                            boxShadow='0 0 0 2px rgba(149, 180, 206, 0.6)'
                                            borderRadius="lg"
                                            overflow="hidden"
                                            width={"90%"}
                                        >
                                            <VStack spacing={0} align="stretch">
                                                {techStacks.api.map((tech, index) => (
                                                    <HStack
                                                        key={index}
                                                        p={2}
                                                        bg="#dfeffc"
                                                        borderTopRadius={index === 0 ? "lg" : "none"}
                                                        borderBottomRadius={index === techStacks.api.length - 1 ? "lg" : "none"}
                                                        borderBottom={index === techStacks.api.length - 1 ? "none" : "1px solid"}
                                                        borderColor="gray.300"
                                                        pl={12}       // Add padding to the left for the icon
                                                        align="center"    // Center items vertically
                                                        spacing={3}       // Add consistent spacing between icon and text
                                                    >
                                                        <Box color={tech.color} width="24px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                                                            {tech.icon()}
                                                        </Box>
                                                        <Text fontSize="base" textColor="blue.500" py={1} textAlign="center">{tech.name}</Text>
                                                    </HStack>
                                                ))}
                                            </VStack>
                                        </Box>
                                    </VStack>
                                </SimpleGrid>
                            </Box>

                        </Box>

                        {/* Mobile Section */}
                        <Box
                            borderStyle="dashed"
                            borderColor={borderColor}
                            borderRadius="lg"
                            p={6}
                            position="relative"
                            onMouseEnter={() => setActiveSection('mobile')}
                            onMouseLeave={() => setActiveSection(null)}
                        >

                            <Heading as="h3" size="md" textAlign="center" mb={12}>Mobile</Heading>
                            <Box
                                p={1}
                                borderRadius="md"
                                textAlign="center"
                            >
                                <Image
                                    src="https://webreinvent.com/images/we-build-mobile.png"
                                    alt="Mobile Development"
                                    borderRadius="md"
                                    mb={2}
                                    maxH="300px"
                                    mx="auto"
                                />
                            </Box>

                            <Box mt={6}>
                                <Heading as="h4" size="sm" mb={3}>Tech Stack</Heading>
                                <SimpleGrid columns={2} spacing={3}>
                                    {techStacks?.mobile?.map((tech, index) => (
                                        <HStack
                                            key={index}
                                            bg={cardBg}
                                            p={2}
                                            borderRadius="md"
                                            boxShadow="sm"
                                        >
                                            <Icon as={tech.icon} color={tech.color} />
                                            <Text fontSize="sm">{tech.name}</Text>
                                        </HStack>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Box>
                    </SimpleGrid>



                    <Box
                        borderStyle="dashed"
                        borderColor={borderColor}
                        borderRadius="lg"
                        p={6}
                        position="relative"
                        onMouseEnter={() => setActiveSection('testing')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <Flex justifyContent="center" mb={4}>
                            <Icon as={FaServer} w={10} h={10} color="green.500" />
                        </Flex>
                        <Heading as="h3" size="md" textAlign="center" mb={4}>Automation Testing</Heading>
                        <Flex justify="center">
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                {techStacks?.testing?.map((tech, index) => (
                                    <Card key={index} bg={cardBg} maxW="sm">
                                        <CardBody>
                                            <Flex direction="column" align="center">
                                                <Icon as={tech.icon} w={10} h={10} color={tech.color} mb={4} />
                                                <Heading size="sm">{tech.name}</Heading>
                                            </Flex>
                                        </CardBody>
                                    </Card>
                                ))}
                            </SimpleGrid>
                        </Flex>
                    </Box>


                    {/* DevOps Section */}
                    <Box
                        borderStyle="dashed"
                        borderColor={borderColor}
                        borderRadius="lg"
                        p={6}
                        onMouseEnter={() => setActiveSection('devops')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <Heading as="h3" size="md" textAlign="center" mb={8}>DevOps</Heading>
                        <Flex justify="center">
                            <HStack spacing={12} position="relative">
                                {devOpsSteps.map((step, index) => (
                                    <VStack key={index}>
                                        <Icon as={step.icon} w={12} h={12} color="blue.500" />
                                        <Text fontSize="sm" fontWeight="bold" textAlign="center">{step.name}</Text>
                                        <Text fontSize="xs" color="gray.500" textAlign="center">{step.description}</Text>
                                    </VStack>
                                ))}


                            </HStack>
                        </Flex>
                    </Box>


                    {/* Deployment Section */}
                    <Box
                        borderStyle="dashed"
                        borderColor={borderColor}
                        borderRadius="lg"
                        p={6}
                        onMouseEnter={() => setActiveSection('deployment')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <Heading as="h3" size="md" textAlign="center" mb={8}>Deployment</Heading>
                        <Flex justify="center">
                            <HStack spacing={12} position="relative">
                                {deploymentOptions.map((option, index) => (
                                    <VStack key={index}>
                                        <Icon as={option.icon} w={12} h={12} color="purple.500" />
                                        <Text fontSize="sm" fontWeight="bold" textAlign="center">{option.name}</Text>
                                        <Text fontSize="xs" color="gray.500" textAlign="center">{option.description}</Text>
                                    </VStack>
                                ))}


                            </HStack>
                        </Flex>
                    </Box>


                    {/* Solutions Section */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {/* Web Solutions */}
                        <Box
                            borderStyle="dashed"
                            borderColor={borderColor}
                            borderRadius="lg"
                            p={6}
                            onMouseEnter={() => setActiveSection('web-solutions')}
                            onMouseLeave={() => setActiveSection(null)}
                        >
                            <Heading as="h3" size="md" textAlign="center" mb={4}>Web Solutions</Heading>
                            <VStack spacing={2} align="stretch">
                                {solutions.web.map((solution, index) => (
                                    <HStack
                                        key={index}
                                        bg={cardBg}
                                        p={3}
                                        borderRadius="md"
                                        boxShadow="sm"
                                    >
                                        <Icon as={FaCode} color="blue.500" />
                                        <Text fontSize="sm">{solution}</Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Box>

                        {/* Mobile Solutions */}
                        <Box
                            borderStyle="dashed"
                            borderColor={borderColor}
                            borderRadius="lg"
                            p={6}
                            onMouseEnter={() => setActiveSection('mobile-solutions')}
                            onMouseLeave={() => setActiveSection(null)}
                        >
                            <Heading as="h3" size="md" textAlign="center" mb={4}>Mobile Solutions</Heading>
                            <VStack spacing={2} align="stretch">
                                {solutions.mobile.map((solution, index) => (
                                    <HStack
                                        key={index}
                                        bg={cardBg}
                                        p={3}
                                        borderRadius="md"
                                        boxShadow="sm"
                                    >
                                        <Icon as={FaMobile} color="purple.500" />
                                        <Text fontSize="sm">{solution}</Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Box>
                    </SimpleGrid>

                    {/* CTA Button */}
                    <Flex justify="center" mt={8}>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            leftIcon={<FaRocket />}
                            borderRadius="full"
                            px={8}
                            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                            transition="all 0.3s"
                        >
                            Talk To Our Team
                        </Button>
                    </Flex>
                </VStack>
            </Container>
        </Box>
    );
}
