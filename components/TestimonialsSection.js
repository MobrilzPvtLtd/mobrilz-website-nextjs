import Slider from "react-slick";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const truncateText = (text, maxLength = 200) =>
  text.length <= maxLength ? text : text.slice(0, maxLength) + "...";

const QuoteIcon = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <path
      d="M12 34H6C3.8 34 2 32.2 2 30V24C2 16.3 8.3 10 16 10V16C13.8 16 12 17.8 12 20V34ZM32 34H26C23.8 34 22 32.2 22 30V24C22 16.3 28.3 10 36 10V16C33.8 16 32 17.8 32 20V34Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({
  testimonial,
  cardBgColor,
  borderColor,
  textColor,
  headingColor,
}) => {
  const getQuoteText = (quote) => {
    if (typeof quote === "string") return truncateText(quote, 240);
    if (Array.isArray(quote) && quote[0]?.children?.[0]?.text) {
      return truncateText(quote[0].children[0].text, 240);
    }
    return "";
  };

  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="lg"
      bg={cardBgColor}
      borderWidth="1px"
      borderColor={borderColor}
      display="flex"
      flexDirection="column"
      minH="400px"
      height="100%"
    >
      <Stack spacing={4} flex="1">
        <Icon as={QuoteIcon} w={8} h={8} color="teal.400" mb={2} />
        <Text
          fontSize="md"
          color={headingColor}
          flex="1"
          lineHeight="tall"
          textAlign={"justify"}
        >
          "{getQuoteText(testimonial.quote)}"
        </Text>

        <Stack direction="row" spacing={1} mt="auto">
          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
            <Icon key={i} as={StarIcon} color="yellow.400" />
          ))}
        </Stack>

        <Flex align="center" mt={4}>
          <Avatar
            src={
              testimonial.avatar?.url ||
              `https://i.pravatar.cc/150?u=${testimonial.id}`
            }
            name={testimonial.name}
            mr={4}
            border="2px solid"
            borderColor="teal.400"
          />
          <Stack spacing={0}>
            <Text fontWeight="bold" color={headingColor}>
              {testimonial.name}
            </Text>
            <Text color={textColor} fontSize="sm">
              {testimonial.position && `${testimonial.position}`}
              {testimonial.position && testimonial.country ? ", " : ""}
              {testimonial.country}
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

const TestimonialsSection = ({ testimonials = [], isError = false }) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  if (isError || !testimonials.length) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box bg={bgColor} py={16}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Stack textAlign="center" spacing={3}>
            <Heading size="xl">What Our Clients Say</Heading>
            <Text color={textColor} maxW="2xl" mx="auto">
              Don't just take our word for it — hear what our clients have to
              say.
            </Text>
          </Stack>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} height="100%" p={2}>
                <TestimonialCard
                  testimonial={testimonial}
                  cardBgColor={cardBgColor}
                  borderColor={borderColor}
                  textColor={textColor}
                  headingColor={headingColor}
                />
              </Box>
            ))}
          </Slider>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
