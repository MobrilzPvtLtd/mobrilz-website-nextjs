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
    Button,
    useColorModeValue,
    VStack,
    HStack,
    Icon,
    useToast,
    Radio,
    RadioGroup,
    Collapse,
    Link,
    IconButton,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react';
import { 
    FaPhone, 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaClock,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaCheckCircle
} from 'react-icons/fa';
import { useState } from 'react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// First, add meeting type options constant at the top with descriptions
const meetingTypes = [
  {
    value: 'video',
    label: 'Video Call',
    description: 'Meet via Google Meet or Zoom'
  },
  {
    value: 'phone',
    label: 'Phone Call',
    description: 'Standard voice call discussion'
  },
  {
    value: 'office',
    label: 'Office Visit',
    description: 'In-person meeting at our Noida office'
  }
];

// Update the validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      'Please enter a valid phone number'
    )
    .nullable(),
  inquiryType: yup.string().required('Please select type of inquiry'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  wantsAppointment: yup.boolean().default(false),
  appointmentDate: yup.string().when('wantsAppointment', {
    is: true,
    then: () => yup
      .string()
      .required('Please select your preferred date')
      .test('future-date', 'Date must be in the future', value => {
        if (!value) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return new Date(value) >= today;
      })
  }),
  appointmentTime: yup.string().when('wantsAppointment', {
    is: true,
    then: () => yup.string().required('Please select your preferred time slot')
  }),
  meetingType: yup.string().when('wantsAppointment', {
    is: true,
    then: () => yup
      .string()
      .required('Please select how you would like to meet')
      .oneOf(['video', 'phone', 'office'], 'Please select a valid meeting type')
  })
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    watch,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      wantsAppointment: false
    },
    mode: 'onTouched', // Show errors after field is touched
    reValidateMode: 'onChange' // Revalidate on change after touched
  });

  const wantsAppointment = watch('wantsAppointment');
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      await response.json();
      setIsSubmitted(true);

      toast({
        title: "Message Sent!",
        description: data.wantsAppointment 
          ? "We'll contact you shortly to confirm your appointment."
          : "We'll get back to you within 24-48 hours.",
        status: "success",
        duration: null, // Make toast persistent
        isClosable: true,
      });

      reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onError = (errors) => {
    // Show toast for form validation errors
    toast({
      title: "Form Incomplete",
      description: "Please fill in all required fields correctly.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const SuccessMessage = () => (
    <Stack
      spacing={8}
      p={8}
      bg={cardBgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      shadow="base"
      textAlign="center"
    >
      <Icon as={FaCheckCircle} w={16} h={16} color="green.500" mx="auto" />
      <Heading size="lg" color={headingColor}>
        Thank You!
      </Heading>
      <Text fontSize="xl" color={textColor}>
        Your message has been successfully sent.
        {wantsAppointment && " We'll contact you shortly to confirm your appointment."}
      </Text>
      <Text fontSize="md" color={textColor}>
        You can refresh the page to submit another message.
      </Text>
    </Stack>
  );

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
      name: 'Contact',
      path: '/contact',
      title: 'Contact Us',
      description: 'Get in touch with us',
      isCurrentPage: true
    }
  ];

  const contactInfo = {
    phone: "+91-8010355718",
    email: "sales@mobrilz.com",
    address: "E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM (IST)",
    social: {
      facebook: "https://facebook.com/mobrilz",
      twitter: "https://twitter.com/mobrilz",
      linkedin: "https://linkedin.com/company/mobrilz",
      instagram: "https://instagram.com/mobrilz"
    }
  };

  const inquiryTypes = [
    'General Inquiry',
    'Project Discussion',
    'Partnership Opportunity',
    'Career Information',
    'Technical Support',
    'Other'
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Mobrilz"
        description="Get in touch with us for any inquiries or schedule a consultation"
      />

      {/* Breadcrumb */}
      <Box bg={bgColor} pt={4} pb={0}>
        <Container maxW="container.xl">
          <Breadcrumb items={breadcrumbItems} aria-label="Contact page navigation" />
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
              Get in Touch
            </Heading>
            <Text
              fontSize="xl"
              color={textColor}
              maxW="3xl"
              mx="auto"
            >
              Have questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            {/* Conditional rendering of form or success message */}
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <Stack
                as="form"
                onSubmit={handleSubmit(onSubmit, onError)}
                spacing={8}
                p={8}
                bg={cardBgColor}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                shadow="base"
              >
                {/* Contact Information */}
                <Stack spacing={4}>
                  <FormControl 
                    isRequired 
                    isInvalid={errors.fullName}
                  >
                    <FormLabel>
                      Full Name
                      <Text as="span" color="red.500">*</Text>
                    </FormLabel>
                    <Input
                      {...register('fullName')}
                      placeholder="John Doe"
                      aria-describedby={errors.fullName ? "fullname-error" : undefined}
                    />
                    <FormErrorMessage id="fullname-error">
                      {errors.fullName?.message}
                    </FormErrorMessage>
                  </FormControl>
                  
                  <FormControl 
                    isRequired 
                    isInvalid={errors.email}
                  >
                    <FormLabel>
                      Email
                      <Text as="span" color="red.500">*</Text>
                    </FormLabel>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <FormErrorMessage id="email-error">
                      {errors.email?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input {...register('phone')} placeholder="+91 12345 67890" />
                    <FormHelperText>Optional, but recommended for faster communication</FormHelperText>
                  </FormControl>

                  <FormControl isRequired isInvalid={errors.inquiryType}>
                    <FormLabel>Type of Inquiry</FormLabel>
                    <Select {...register('inquiryType')} placeholder="Select type of inquiry">
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type.toLowerCase()}>{type}</option>
                      ))}
                    </Select>
                    <FormErrorMessage>{errors.inquiryType?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      {...register('message')}
                      placeholder="Please describe how we can help you..."
                      rows={5}
                    />
                    <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                  </FormControl>
                </Stack>

                {/* Appointment Request */}
                <Stack spacing={4}>
                  <Checkbox {...register('wantsAppointment')}>
                    I would like to schedule an appointment
                  </Checkbox>

                  <Collapse in={wantsAppointment} animateOpacity>
                    <Stack spacing={4} mt={4}>
                      <FormControl 
                        isRequired={wantsAppointment} 
                        isInvalid={errors.appointmentDate}
                      >
                        <FormLabel>
                          Preferred Date
                          {wantsAppointment && <Text as="span" color="red.500">*</Text>}
                        </FormLabel>
                        <Input 
                          {...register('appointmentDate')}
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          aria-describedby={errors.appointmentDate ? "date-error" : "date-help"}
                        />
                        <FormErrorMessage id="date-error">
                          {errors.appointmentDate?.message}
                        </FormErrorMessage>
                        <FormHelperText id="date-help">
                          Please select a future date for your appointment
                        </FormHelperText>
                      </FormControl>

                      <FormControl 
                        isRequired={wantsAppointment} 
                        isInvalid={errors.appointmentTime}
                      >
                        <FormLabel>Preferred Time</FormLabel>
                        <Select 
                          {...register('appointmentTime')} 
                          placeholder="Select preferred time"
                        >
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 6 PM)</option>
                          <option value="flexible">Flexible</option>
                        </Select>
                        <FormErrorMessage>
                          {errors.appointmentTime?.message}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl 
                        isRequired={wantsAppointment} 
                        isInvalid={errors.meetingType}
                      >
                        <FormLabel>Meeting Type</FormLabel>
                        <Select 
                          {...register('meetingType')} 
                          placeholder="How would you like to meet?"
                        >
                          {meetingTypes.map(({value, label, description}) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage>
                          {errors.meetingType?.message}
                        </FormErrorMessage>
                        <FormHelperText>
                          {watch('meetingType') && 
                            meetingTypes.find(type => type.value === watch('meetingType'))?.description}
                        </FormHelperText>
                      </FormControl>
                    </Stack>
                  </Collapse>
                </Stack>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  loadingText={wantsAppointment ? "Scheduling..." : "Sending..."}
                >
                  {wantsAppointment ? 'Schedule Appointment' : 'Send Message'}
                </Button>

                <Text fontSize="sm" color={textColor}>
                  By submitting this form, you agree to our{' '}
                  <NextLink href="/privacy-policy" passHref>
                    <Link color="blue.500">Privacy Policy</Link>
                  </NextLink>
                </Text>
              </Stack>
            )}

            {/* Contact Information */}
            <Stack spacing={8}>
              {/* Direct Contact */}
              <VStack
                spacing={6}
                p={8}
                bg={cardBgColor}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                align="start"
              >
                <Heading size="md" color={headingColor}>Contact Information</Heading>
                <Stack spacing={4} w="full">
                  <HStack spacing={4}>
                    <Icon as={FaPhone} color="blue.500" boxSize={5} />
                    <Text color={textColor}>{contactInfo.phone}</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
                    <Text color={textColor}>{contactInfo.email}</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaMapMarkerAlt} color="blue.500" boxSize={5} />
                    <Text color={textColor}>{contactInfo.address}</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaClock} color="blue.500" boxSize={5} />
                    <Text color={textColor}>{contactInfo.hours}</Text>
                  </HStack>
                </Stack>
              </VStack>

              {/* Social Links */}
              <VStack
                spacing={6}
                p={8}
                bg={cardBgColor}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                align="start"
              >
                <Heading size="md" color={headingColor}>Connect With Us</Heading>
                <HStack spacing={4}>
                  {Object.entries(contactInfo.social).map(([platform, url]) => (
                    <IconButton
                      key={platform}
                      as="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${platform} page`}
                      icon={
                        platform === 'facebook' ? <FaFacebook /> :
                        platform === 'twitter' ? <FaTwitter /> :
                        platform === 'linkedin' ? <FaLinkedin /> :
                        <FaInstagram />
                      }
                      colorScheme="blue"
                      variant="ghost"
                    />
                  ))}
                </HStack>
              </VStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}