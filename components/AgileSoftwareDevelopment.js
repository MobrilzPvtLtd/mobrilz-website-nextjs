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
import { ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import TechStackList, { TechStackSection } from './TechStackList';

// Animation for the path indicator
const pulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;

const IconImage = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={6}
            height={6}
            loading="lazy"
            fallback={<Box w={6} h={6} bg="gray.200" borderRadius="md" />}
            onError={(e) => {
                console.error(`Failed to load image: ${src}`);
                e.target.src = '/icons/js.png'; // Add a placeholder image
            }}
        />
    );
};

export default function AgileSoftwareDevelopment() {
    const bgColor = useColorModeValue('#dce6fa', 'gray.800');
    const cardBg = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('blue.100', 'blue.600');
    const pathColor = useColorModeValue('blue.300', 'blue.500');

    const [activeSection, setActiveSection] = useState(null);

    const techStacks = {
        backend: [
            {
                name: "Laravel",
                color: "#FF2D20",
                description: "PHP framework for web artisans with elegant syntax.",
                icon: () => <IconImage src="/icons/laravel.png" alt="Laravel" />
            },
            {
                name: "Express JS",
                color: "#000000",
                description: "Fast, unopinionated web framework for Node.js applications.",
                icon: () => <IconImage src="/icons/laravel.png" alt="Express JS" />
            },
            {
                name: "Express JS",
                color: "#000000",
                description: "Fast, unopinionated web framework for Node.js applications.",
                icon: () => <IconImage src="/icons/laravel.png" alt="Express JS" />
            }
        ],
        frontend: [
            {
                name: "Next JS",
                color: "#00DC82",
                description: "React framework for production-grade static and dynamic websites.",
                icon: () => <IconImage src="/icons/nextjs.png" alt="Next JS" />
            },
            {
                name: "React JS",
                color: "#61DAFB",
                description: "JavaScript library for building interactive user interfaces.",
                icon: () => <IconImage src="/icons/reactjs.png" alt="React JS" />
            },
            {
                name: "Next JS",
                color: "#00DC82",
                description: "React framework for production-grade static and dynamic websites.",
                icon: () => <IconImage src="/icons/nextjs.png" alt="Next JS" />
            },
        ],
        database: [
            {
                name: "MySQL",
                color: "#4479A1",
                description: "Popular open-source relational database management system.",
                icon: () => <IconImage src="/icons/mysql.png" alt="MySQL" />
            },
            {
                name: "PostgreSQL",
                color: "#336791",
                description: "Advanced open-source database with powerful features.",
                icon: () => <IconImage src="/icons/postgresql.png" alt="PostgreSQL" />
            },
            {
                name: "Mongo DB",
                color: "#47A248",
                description: "NoSQL database for modern apps with JSON-like documents.",
                icon: () => <IconImage src="/icons/mongodb.png" alt="Mongo DB" />
            },
            {
                name: "MySQL",
                color: "#4479A1",
                description: "Popular open-source relational database management system.",
                icon: () => <IconImage src="/icons/mysql.png" alt="MySQL" />
            },
        ],
        api: [
            {
                name: "Fastify",
                color: "#000000",
                description: "Fast and low overhead web framework for Node.js.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Fastify" />
            },
            {
                name: "Restify",
                color: "#00A1B0",
                description: "Framework for building REST APIs in Node.js.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Restify" />
            },
            {
                name: "Express JS",
                color: "#000000",
                description: "Minimal and flexible Node.js web application framework.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Express JS" />
            },
            {
                name: "Lumen",
                color: "#E74430",
                description: "Lightning-fast micro-framework by Laravel for microservices.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Lumen" />
            },
            {
                name: "Koa.js",
                color: "#33333D",
                description: "Next generation web framework by Express team.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Koa.js" />
            },
            {
                name: "Hapi.js",
                color: "#F6941E",
                description: "Rich framework for building applications and services.",
                icon: () => <IconImage src="/icons/fastify.png" alt="Hapi.js" />
            }
        ],
        ios: [
            {
                name: "Swift",
                color: "#FA7343",
                description: "Apple's modern programming language for iOS development.",
                icon: () => <IconImage src="/icons/swift.png" alt="Swift" />
            },
        ],
        android: [
            {
                name: "Dart",
                color: "#0175C2",
                description: "Google's language for building Flutter applications.",
                icon: () => <IconImage src="/icons/dart.png" alt="Dart" />
            },
            {
                name: "Kotlin",
                color: "#7F52FF",
                description: "Modern language for Android development by JetBrains.",
                icon: () => <IconImage src="/icons/kotlin.png" alt="Kotlin" />
            }
        ],
        hybrid: [
            {
                name: "React Native",
                color: "#61DAFB",
                description: "Framework for building native apps using React.",
                icon: () => <IconImage src="/icons/reactjs.png" alt="React Native" />
            },
            {
                name: "Flutter",
                color: "#02569B",
                description: "Google's UI toolkit for building natively compiled apps.",
                icon: () => <IconImage src="/icons/dart.png" alt="Flutter" />
            },
            {
                name: "Ionic",
                color: "#3880FF",
                description: "Framework for building cross-platform apps with web technologies.",
                icon: () => <IconImage src="/icons/dart.png" alt="Ionic" />
            }
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
                                height="19%"
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

                                <Heading as="h3" size="md" textAlign="center" my={5}>Tech Stack</Heading>

                                <SimpleGrid columns={2} spacing={12}>
                                    {/* Left column - APPS */}
                                    <VStack spacing={1} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600"  >
                                            APPS
                                        </Text>

                                        <TechStackSection
                                            title="BACKEND"
                                            items={techStacks.backend}
                                            width="85%"
                                        />

                                        <TechStackSection
                                            title="FRONTEND"
                                            items={techStacks.frontend}
                                            width="85%"
                                            showConnector={true} // Shows connector above this section
                                        />

                                        <TechStackSection
                                            title="DATABASE"
                                            items={techStacks.database}
                                            width="85%"
                                            showConnector={true} // Shows connector above this section
                                        />
                                    </VStack>

                                    {/* Right column - API */}
                                    <VStack spacing={4} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600" mb={0}>
                                            API
                                        </Text>
                                        <TechStackSection
                                            title="API"
                                            items={techStacks.api}
                                            showLabel={false}
                                            width="90%"
                                        />
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

                            <Heading as="h3" size="md" textAlign="center" mb={6}>Mobile</Heading>
                            {/* Background Box */}
                            <Box
                                borderTop="2px"
                                borderRight="2px"
                                borderBottom="2px"
                                borderStyle="dashed"
                                borderTopLeftRadius="none"     // Changed from borderRadius
                                borderBottomLeftRadius="none"  // Added for left side only
                                borderTopRightRadius="3xl"   // Explicitly remove right side rounding
                                borderBottomRightRadius="3xl"// Explicitly remove right side rounding
                                p={4}
                                position="absolute"
                                top="11%"
                                left="68%"
                                transform="translate(-50%, -50%)"
                                height="15%"
                                width="20%"
                                zIndex={1}
                                opacity={0.5}
                                _hover={{
                                    opacity: 0.8,
                                    transition: "opacity 0.3s"
                                }}
                            >
                                <Box
                                    p={1}
                                    borderRadius="md"
                                    textAlign="center"
                                    position="relative"
                                    zIndex={2}
                                    left={12}
                                    top={1}
                                >
                                    <Image
                                        src="https://webreinvent.com/images/we-build-mobile-swift.png"
                                        alt="Mobile Development"
                                        borderRadius="md"
                                        maxW="110px"
                                        mx="auto"
                                        p={1}
                                    />
                                </Box>
                                <ChevronLeftIcon
                                    position="absolute"
                                    left="10"
                                    top="100%"
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


                            {/* Background Box */}
                            <Box
                                borderTop="2px"
                                borderLeft="2px"
                                borderStyle="dashed"
                                borderTopLeftRadius="3xl"     // Changed from borderRadius
                                borderBottomLeftRadius="none"  // Added for left side only
                                p={4}
                                position="absolute"
                                top="27%"
                                left="34%"
                                transform="translate(-50%, -50%)"
                                height="10%"
                                width="38%"
                                zIndex={1}
                                opacity={0.5}
                                _hover={{
                                    opacity: 0.8,
                                    transition: "opacity 0.3s"
                                }}
                            >
                                <Box
                                    p={1}
                                    borderRadius="md"
                                    textAlign="center"
                                    position="relative"
                                    zIndex={2}
                                    right={28}
                                    top={14}
                                >
                                    <Image
                                        src="https://webreinvent.com/images/we-build-mobile-dart.png"
                                        alt="Mobile Development"
                                        borderRadius="md"
                                        maxW="110px"
                                        mx="auto"
                                        p={1}
                                    />
                                </Box>
                                <ChevronLeftIcon
                                    position="absolute"
                                    left="16"
                                    top="1%"
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


                            {/* Background Box */}
                            <Box
                                borderTop="2px"
                                borderRight="2px"
                                borderBottom="2px"
                                borderStyle="dashed"
                                borderTopLeftRadius="none"     // Changed from borderRadius
                                borderBottomLeftRadius="none"  // Added for left side only
                                borderTopRightRadius="3xl"   // Explicitly remove right side rounding
                                borderBottomRightRadius="3xl"// Explicitly remove right side rounding
                                p={4}
                                position="absolute"
                                top="31%"
                                left="70%"
                                transform="translate(-50%, -50%)"
                                height="13%"
                                width="21%"
                                zIndex={1}
                                opacity={0.5}
                                _hover={{
                                    opacity: 0.8,
                                    transition: "opacity 0.3s"
                                }}
                            >
                                <ChevronDownIcon
                                    position="absolute"
                                    left="28"
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
                            <Box
                                p={1}
                                borderRadius="md"
                                textAlign="center"
                                position="relative"
                                zIndex={2}
                            >
                                <Image
                                    src="https://webreinvent.com/images/we-build-mobile.png"
                                    alt="Mobile Development"
                                    borderRadius="md"
                                    mb={2}
                                    maxH="300px"
                                    mx="auto"
                                    p={3}
                                />
                            </Box>


                            <Box borderRadius="lg">

                                <Heading as="h3" size="md" textAlign="center" mb={5}>Tech Stack</Heading>
                                <SimpleGrid columns={2} spacing={12}>
                                    {/* Left column - APPS */}
                                    <VStack spacing={1} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600"  >
                                            iOS
                                        </Text>

                                        <TechStackSection
                                            items={techStacks.ios}
                                            width="85%"
                                        />
                                    </VStack>

                                    {/* Right column - API */}
                                    <VStack spacing={4} align="stretch">
                                        <Text textAlign="center" fontSize="sm" fontWeight="bold" color="blue.600" mb={0}>
                                            ANDROID
                                        </Text>
                                        <TechStackSection
                                            title="API"
                                            items={techStacks.android}
                                            showLabel={false}
                                            width="90%"
                                        />
                                    </VStack>

                                    {/* Background Box */}
                                    <Box
                                        borderLeft="2px"
                                        borderRight="2px"
                                        borderBottom="2px"
                                        borderStyle="dashed"
                                        borderBottomLeftRadius="3xl"  // Added for left side only
                                        borderBottomRightRadius="3xl"// Explicitly remove right side rounding
                                        p={4}
                                        position="absolute"
                                        top="53%"
                                        left="51%"
                                        transform="translate(-50%, -50%)"
                                        height="15%"
                                        width="50%"
                                        zIndex={1}
                                        opacity={0.5}
                                    >
                                    </Box>
                                    {/* Background Box */}
                                    <Box
                                        borderLeft="2px"
                                        borderStyle="dashed"
                                        p={4}
                                        position="absolute"
                                        top="66%"
                                        left="75%"
                                        transform="translate(-50%, -50%)"
                                        height="10%"
                                        width="50%"
                                        zIndex={1}
                                        opacity={0.5}
                                    ></Box>
                                </SimpleGrid>
                                <SimpleGrid columns={1} spacing={12}>
                                    <VStack spacing={4} mt={52} mx={40} align="stretch">
                                        <Text textAlign="center"
                                            fontSize="sm" fontWeight="bold" pr={3} color="blue.600" mb={0}>
                                            Hybrid Apps Tech Stack
                                        </Text>
                                        <TechStackSection
                                            title="API"
                                            items={techStacks.hybrid}
                                            showLabel={false}
                                            width="90%"
                                        />
                                    </VStack>
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
                        {/* Background Box */}
                        <Box
                            borderRight="2px"
                            borderBottom="2px"
                            borderLeft="2px"
                            borderStyle="dashed"
                            borderTopLeftRadius="none"     // Changed from borderRadius
                            borderBottomLeftRadius="3xl"  // Added for left side only
                            borderTopRightRadius="none"   // Explicitly remove right side rounding
                            borderBottomRightRadius="3xl"// Explicitly remove right side rounding
                            p={4}
                            position="absolute"
                            top="-7%"
                            left="44%"
                            transform="translate(-50%, -50%)"
                            height="45%"
                            width="62%"
                            zIndex={1}
                            opacity={0.5}
                        >

                            <ChevronLeftIcon
                                position="absolute"
                                left="16"
                                top="1%"
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
                        <Box
                            borderRadius="md"
                            textAlign="center"
                            position="relative"
                            right={0}
                            top={0}
                            zIndex={2}

                        >
                            <Heading as="h3" zIndex={2} size="md" fontWeight={800} position='absolute' textAlign="center" bg={bgColor} p={2.5} right="39%" mt={3}>Automation <br />Testing</Heading>
                            <Image
                                src="https://webreinvent.com/images/we-build-automation-testing.png"
                                alt="Mobile Development"
                                borderRadius="md"
                                width={{ base: "100%", sm: "90%", md: "80%", lg: "70%" }}
                                maxW={{ base: "100%", md: "4xl" }}
                                height="auto"
                                mx="auto"
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Box>


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
