import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    Stack,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Checkbox,
    CheckboxGroup,
    Button,
    useColorModeValue,
    VStack,
    HStack,
    Icon,
    Divider 
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaClock, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';

export default function GetQuotePage() {
    const [formType, setFormType] = useState('quote'); // 'quote' or 'consult'

    const bgColor = useColorModeValue("gray.50", "gray.900");
    const cardBgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const textColor = useColorModeValue("gray.600", "gray.400");
    const headingColor = useColorModeValue("gray.800", "white");

    const breadcrumbItems = [
        {
            name: 'Home',
            path: '/',
            title: 'Go to Home page',
            description: 'Navigate to home page'
        },
        {
            name: 'Get Quote',
            path: '/get-quote',
            title: 'Request a Quote',
            description: 'Get a quote for your project',
            isCurrentPage: true
        }
    ];

    const serviceTypes = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Cloud Solutions',
        'DevOps Services',
        'Custom Software',
        'API Integration',
        'Maintenance'
    ];

    const budgetRanges = [
        'Less than $1,000',
        '$1,000 - $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+'
    ];

    return (
        <>
            <SEO 
                title="Get a Quote - Mobrilz"
                description="Request a quote or schedule a consultation for your next project"
            />

            {/* Breadcrumb */}
            <Box bg={bgColor} pt={4} pb={0}>
                <Container maxW="container.xl">
                    <Breadcrumb items={breadcrumbItems} aria-label="Quote page navigation" />
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
                            {formType === 'quote' ? 'Get a Free Quote' : 'Schedule a Consultation'}
                        </Heading>
                        <Text
                            fontSize="xl"
                            color={textColor}
                            maxW="3xl"
                            mx="auto"
                        >
                            {formType === 'quote' 
                                ? 'Tell us about your project and get a customized quote within 24 hours'
                                : 'Schedule a free consultation with our experts to discuss your needs'
                            }
                        </Text>
                    </Stack>
                </Container>
            </Box>

            {/* Form Section */}
            <Box py={20} bg={bgColor}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                        {/* Form */}
                        <Stack
                            spacing={8}
                            p={8}
                            bg={cardBgColor}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor={borderColor}
                            shadow="base"
                        >
                            {/* Form Type Toggle */}
                            <HStack spacing={4}>
                                <Button
                                    colorScheme={formType === 'quote' ? 'blue' : 'gray'}
                                    onClick={() => setFormType('quote')}
                                >
                                    Request Quote
                                </Button>
                                <Button
                                    colorScheme={formType === 'consult' ? 'blue' : 'gray'}
                                    onClick={() => setFormType('consult')}
                                >
                                    Schedule Consultation
                                </Button>
                            </HStack>

                            {/* Contact Information */}
                            <Stack spacing={4}>
                                <Heading size="md" color={headingColor}>Contact Information</Heading>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                    <FormControl isRequired>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input placeholder="John Doe" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" placeholder="john@example.com" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Phone</FormLabel>
                                        <Input placeholder="+1 (555) 000-0000" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Company</FormLabel>
                                        <Input placeholder="Company name" />
                                    </FormControl>
                                </SimpleGrid>
                            </Stack>

                            {/* Project Details */}
                            <Stack spacing={4}>
                                <Heading size="md" color={headingColor}>Project Details</Heading>
                                <FormControl isRequired>
                                    <FormLabel>Type of Service</FormLabel>
                                    <Select placeholder="Select service type">
                                        {serviceTypes.map((service, index) => (
                                            <option key={index} value={service.toLowerCase()}>
                                                {service}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                {formType === 'quote' && (
                                    <>
                                        <FormControl>
                                            <FormLabel>Budget Range</FormLabel>
                                            <Select placeholder="Select budget range">
                                                {budgetRanges.map((range, index) => (
                                                    <option key={index} value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Project Timeline</FormLabel>
                                            <Select placeholder="Select timeline">
                                                <option value="1-2months">1-2 months</option>
                                                <option value="3-6months">3-6 months</option>
                                                <option value="6+months">6+ months</option>
                                            </Select>
                                        </FormControl>
                                    </>
                                )}

                                {formType === 'consult' && (
                                    <FormControl isRequired>
                                        <FormLabel>Preferred Consultation Date</FormLabel>
                                        <Input type="date" min={new Date().toISOString().split('T')[0]} />
                                    </FormControl>
                                )}

                                <FormControl isRequired>
                                    <FormLabel>Project Description</FormLabel>
                                    <Textarea
                                        placeholder="Please describe your project requirements..."
                                        rows={5}
                                    />
                                </FormControl>
                            </Stack>

                            <Button
                                colorScheme="blue"
                                size="lg"
                                w="full"
                            >
                                {formType === 'quote' ? 'Submit Quote Request' : 'Schedule Consultation'}
                            </Button>

                            <Text fontSize="sm" color={textColor}>
                                By submitting this form, you agree to our{' '}
                                <Button variant="link" colorScheme="blue" fontSize="sm">
                                    Privacy Policy
                                </Button>
                            </Text>
                        </Stack>

                        {/* Info Section */}
                        <Stack spacing={8}>
                            <VStack
                                spacing={6}
                                p={8}
                                bg={cardBgColor}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor={borderColor}
                                align="start"
                            >
                                <Heading size="md" color={headingColor}>What Happens Next?</Heading>
                                <Stack spacing={4} w="full">
                                    <HStack spacing={4}>
                                        <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>
                                            We'll review your request within 24 hours
                                        </Text>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Icon as={FaPhone} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>
                                            Our team might contact you for clarification
                                        </Text>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Icon as={FaClock} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>
                                            You'll receive a detailed proposal
                                        </Text>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Icon as={FaShieldAlt} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>
                                            Your information is secure and confidential
                                        </Text>
                                    </HStack>
                                </Stack>
                            </VStack>

                            {/* Contact Options */}
                            <VStack
                                spacing={6}
                                p={8}
                                bg={cardBgColor}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor={borderColor}
                                align="start"
                            >
                                <Heading size="md" color={headingColor}>Other Ways to Reach Us</Heading>
                                <Stack spacing={4} w="full">
                                    <HStack spacing={4}>
                                        <Icon as={FaPhone} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>+1 (555) 000-0000</Text>
                                    </HStack>
                                    <HStack spacing={4}>
                                        <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
                                        <Text color={textColor}>contact@mobrilz.com</Text>
                                    </HStack>
                                </Stack>
                            </VStack>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}