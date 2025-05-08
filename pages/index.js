import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Stack,
  Flex,
  Grid,
  Avatar,
  Tag,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import * as Icons from "react-icons/fa";
import { useMemo } from "react";
import NextLink from "next/link";
import { getStrapiAPI } from "../utils/api";
import PortfolioSection from "../components/PortfolioSection";
import TechnologiesSection from "../components/TechnologiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AgileSoftwareDevelopment from "@/components/AgileSoftwareDevelopment";

// Update the static data to match Strapi API response format
const staticServices = {
  data: [
    {
      id: 1,
      attributes: {
        title: "Web Development",
        description:
          "Custom web applications and responsive websites built with modern technologies.",
        image: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/web/800/600",
            },
          },
        },
        slug: "web-development",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android devices.",
        image: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/mobile/800/600",
            },
          },
        },
        slug: "mobile-development",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment solutions.",
        image: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/cloud/800/600",
            },
          },
        },
        slug: "cloud-solutions",
      },
    },
  ],
};

const staticTrustSignals = {
  data: [
    {
      id: 1,
      attributes: {
        name: "Google Partner",
        logo: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/google/200/80",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: "Microsoft Certified",
        logo: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/microsoft/200/80",
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: "AWS Partner",
        logo: {
          data: {
            attributes: {
              url: "https://picsum.photos/seed/aws/200/80",
            },
          },
        },
      },
    },
  ],
};

const staticBenefits = [
  {
    icon: "FaRocket",
    title: "Fast Development",
    description:
      "Quick turnaround with high-quality deliverables using modern development practices.",
  },
  {
    icon: "FaShieldAlt",
    title: "Secure Solutions",
    description:
      "Built-in security measures to protect your business and customer data.",
  },
  {
    icon: "FaTools",
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business needs.",
  },
];

// Update the getStaticProps function
export async function getStaticProps() {
  try {
    const [portfoliosRes, technologiesRes, testimonialsRes, blogs] =
      await Promise.all([
        getStrapiAPI("/portfolios", {
          sort: ["id:desc"],
          populate: "*",
        }),
        getStrapiAPI("/technologies", {
          populate: "*",
          filters: {
            Featured: true,
          },
          sort: ["type:asc", "name:asc"],
        }),
        getStrapiAPI("/testimonials", {
          populate: "*",
        }),
        getStrapiAPI("/blogs", {
          populate: "*",
        }),
      ]);

    return {
      props: {
        services: staticServices,
        testimonials: testimonialsRes?.data || [],
        trustSignals: staticTrustSignals,
        portfolios: portfoliosRes?.data ? portfoliosRes : { data: [] },
        technologies: technologiesRes?.data || [],
        benefits: staticBenefits,
        blogs: blogs,
        isError: false,
      },
      revalidate: false,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        services: staticServices,
        testimonials: [],
        trustSignals: staticTrustSignals,
        portfolios: { data: [] },
        technologies: [],
        benefits: staticBenefits,
        blogs: [],
        isError: true,
      },
    };
  }
}

const Home = ({
  services,
  testimonials,
  trustSignals,
  technologies,
  portfolios,
  benefits,
  blogs,
  isError = false,
}) => {
  const getIcon = useMemo(
    () => (iconName) => {
      return Icons[iconName];
    },
    []
  );

  console.log("data", blogs.data);
  console.log("data", technologies);
  const bgColor = useColorModeValue("white", "gray.900");
  const heroTextColor = useColorModeValue("blue.800", "white");
  const heroBgColor = useColorModeValue("blue.50", "gray.800");
  const bgColor1 = useColorModeValue("blue.100", "gray.800");
  const waveColor1 = useColorModeValue("#3182ce", "#1a367d");
  const waveColor2 = useColorModeValue("#4299e1", "#2c5282");

  return (
    <>
      <SEO />
      <Box bg={bgColor}>
        {/* Hero Section */}
        <Box bg={heroBgColor} py={20}>
          <Container maxW="container.xl">
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={8}
              alignItems="center"
            >
              <Stack spacing={6}>
                <Heading size="2xl" color={heroTextColor}>
                  Transform Your Business With Custom Software Solutions
                </Heading>
                <Text
                  fontSize="xl"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  We help businesses innovate and grow through cutting-edge
                  software development and digital transformation solutions.
                </Text>
                <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                  <NextLink href="/get-quote" passHref legacyBehavior>
                    <Button
                      as="a"
                      size="lg"
                      colorScheme="blue"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Get Free Consultation
                    </Button>
                  </NextLink>
                  <Button size="lg" variant="outline" colorScheme="blue">
                    View Our Work
                  </Button>
                </Stack>
                <Flex wrap="wrap" gap={4} mt={4}>
                  {trustSignals.data.map((signal) => (
                    <Image
                      key={signal.id}
                      src={signal.attributes.logo.data.attributes.url}
                      alt={signal.attributes.name}
                      h="40px"
                      filter="grayscale(100%)"
                      opacity={0.7}
                      _hover={{ opacity: 1, filter: "grayscale(0%)" }}
                      transition="all 0.3s ease"
                    />
                  ))}
                </Flex>
              </Stack>
              <Box>
                <Image
                  src="https://picsum.photos/seed/hero/800/600"
                  alt="Hero Image"
                  borderRadius="xl"
                  shadow="2xl"
                />
              </Box>
            </Grid>
          </Container>
        </Box>

        <AgileSoftwareDevelopment />

        {/* Portfolio Section */}
        <PortfolioSection
          portfolios={portfolios?.data || []}
          isError={isError}
        />

        {/* Benefits Section */}
        <Box py={20} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading
                  size="xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Why Choose Us
                </Heading>
                <Text
                  color={useColorModeValue("gray.600", "gray.300")}
                  maxW="2xl"
                  mx="auto"
                >
                  We bring together expertise, innovation, and commitment to
                  deliver exceptional results
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {benefits.map((benefit, index) => {
                  const IconComponent = getIcon(benefit.icon);
                  return (
                    <Stack
                      key={index}
                      spacing={4}
                      p={6}
                      boxShadow="lg"
                      borderRadius="lg"
                      bg={useColorModeValue("white", "gray.800")}
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-5px)",
                        shadow: "2xl",
                        borderColor: useColorModeValue("gray.200", "gray.600"),
                      }}
                    >
                      {IconComponent && (
                        <Box
                          color={useColorModeValue("brand.500", "brand.200")}
                        >
                          <IconComponent size={24} />
                        </Box>
                      )}
                      <Heading
                        size="md"
                        color={useColorModeValue("gray.800", "white")}
                      >
                        {benefit.title}
                      </Heading>
                      <Text color={useColorModeValue("gray.600", "gray.300")}>
                        {benefit.description}
                      </Text>
                    </Stack>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Technologies Section */}
        {/* <TechnologiesSection 
          technologies={technologies} 
          isError={isError}
        /> */}

        {/* Services Section */}
        <Box py={20} bg={useColorModeValue("white", "gray.900")}>
          <Container maxW="container.2xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading
                  size="xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Blog Updates
                </Heading>
                <Text
                  color={useColorModeValue("gray.600", "gray.300")}
                  maxW="2xl"
                  mx="auto"
                >
                  We offer comprehensive software development services to help
                  your business thrive in the digital age
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                {blogs.data.slice(0, 4).map((service, index) => {
                  const featuredImage = service.FeaturedImage?.url;
                  const title = service.Title;
                  const slug = service.slug;

                  // Extract a short excerpt from the first paragraph
                  let excerpt = "";
                  if (service.Content && service.Content.length > 0) {
                    const firstTextBlock = service.Content.find(
                      (block) =>
                        block.type === "paragraph" && block.children.length > 0
                    );
                    if (firstTextBlock) {
                      excerpt =
                        firstTextBlock.children[0].text.substring(0, 150) +
                        "...";
                    }
                  }

                  return (
                    <Box
                      key={service.id || index}
                      p={6}
                      boxShadow="lg"
                      borderRadius="lg"
                      bg={useColorModeValue("white", "gray.800")}
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-5px)",
                        shadow: "2xl",
                        borderColor: useColorModeValue("gray.200", "gray.600"),
                      }}
                    >
                      {featuredImage && (
                        <Image
                          src={featuredImage}
                          alt={title}
                          borderRadius="md"
                          mb={4}
                          h="200px"
                          w="full"
                          objectFit="cover"
                        />
                      )}
                      <Heading
                        size="md"
                        mb={3}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        {title}
                      </Heading>
                      <Text
                        color={useColorModeValue("gray.600", "gray.300")}
                        mb={4}
                      >
                        {excerpt}
                      </Text>
                      <NextLink href={`/blogs/${slug}`} passHref legacyBehavior>
                        <Button
                          as="a"
                          variant="link"
                          colorScheme="blue"
                          color={useColorModeValue("blue.600", "blue.200")}
                          rightIcon={<ChevronRightIcon />}
                          _hover={{
                            color: useColorModeValue("blue.700", "blue.100"),
                          }}
                        >
                          Learn More
                        </Button>
                      </NextLink>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box position="relative" overflow="hidden" bg={bgColor1}>
          {/* Wave SVG Background */}
          <Box
            position="absolute"
            left={0}
            right={0}
            bottom={0}
            width="100%"
            height="100%"
            zIndex={0}
          >
            {/* First wave */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                width: "100%",
                height: "60%",
                bottom: 0,
              }}
            >
              <path
                fill={waveColor1}
                fillOpacity="0.4"
                d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

            {/* Second wave */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                width: "100%",
                height: "40%",
                bottom: 0,
              }}
            >
              <path
                fill={waveColor2}
                fillOpacity="0.3"
                d="M0,256L48,256C96,256,192,256,288,240C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Box>

          {/* CTA Content */}
          <Container maxW="container.xl" position="relative" zIndex={1} py={20}>
            <Stack spacing={8} align="center" textAlign="center">
              <Heading size="xl">Ready to Start Your Project?</Heading>
              <Text
                fontSize="xl"
                maxW="2xl"
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
              >
                Let's discuss how we can help transform your business through
                innovative software solutions
              </Text>
              <NextLink href="/get-quote" passHref>
                <Button
                  size="lg"
                  bg={useColorModeValue("white", "whiteAlpha.200")}
                  color={useColorModeValue("blue.600", "white")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "whiteAlpha.300"),
                  }}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Get Free Quote
                </Button>
              </NextLink>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
