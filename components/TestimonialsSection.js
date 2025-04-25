import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Avatar,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const truncateText = (text, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const TestimonialsSection = ({ testimonials = [], isError = false }) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const getQuoteText = (quote) => {
    if (typeof quote === 'string') return truncateText(quote);
    if (Array.isArray(quote) && quote[0]?.children?.[0]?.text) {
      return truncateText(quote[0].children[0].text);
    }
    return '';
  };

  if (isError || !testimonials.length) {
    return null;
  }

  return (
    <Box bg={bgColor} py={20}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Stack textAlign="center" spacing={3}>
            <Heading size="xl">What Our Clients Say</Heading>
            <Text color={textColor} maxW="2xl" mx="auto">
              Don't just take our word for it - hear what our clients have to say
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                p={6}
                boxShadow="lg"
                borderRadius="lg"
                bg={cardBgColor}
                borderWidth="1px"
                borderColor={borderColor}
                h="fit-content"
              >
                <Stack spacing={4}>
                  <Text 
                    fontSize="lg" 
                    color={headingColor}
                    noOfLines={6}
                    minH="160px"
                  >
                    "{getQuoteText(testimonial.quote)}"
                  </Text>
                  
                  <Stack direction="row" spacing={1}>
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <Icon key={i} as={StarIcon} color="yellow.400" />
                    ))}
                  </Stack>

                  <Flex align="center">
                    <Avatar
                      src={testimonial.avatar?.url}
                      name={testimonial.name}
                      mr={4}
                      border="2px solid"
                      borderColor={borderColor}
                    />
                    <Stack spacing={0}>
                      <Text fontWeight="bold" color={headingColor}>
                        {testimonial.name}
                      </Text>
                      <Text color={textColor}>
                        {testimonial.position && `${testimonial.position}`}
                        {testimonial.position && testimonial.country ? ', ' : ''}
                        {testimonial.country}
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;