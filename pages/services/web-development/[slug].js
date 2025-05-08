import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Grid,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import TechnologiesSection from "@/components/TechnologiesSection";
import {
  FaProjectDiagram,
  FaShoppingCart,
  FaUsersCog,
  FaCalendarCheck,
  FaUserLock,
  // Import any other icons you need
} from "react-icons/fa";
import { webDevelopmentServices as services } from "../../../contexts/services/web-development";
import Image from "next/image";
import { getStrapiAPI } from "@/utils/api";

// Map of icon names to components for use in the component
const iconMap = {
  FaProjectDiagram: FaProjectDiagram,
  FaShoppingCart: FaShoppingCart,
  FaUsersCog: FaUsersCog,
  FaCalendarCheck: FaCalendarCheck,
  FaUserLock: FaUserLock,
  // Add any other icons you need
};

// Add getStaticPaths function
export async function getStaticPaths() {
  // Generate paths from services array
  const paths = services.map((service) => ({
    params: { 
      slug: service.url.split("/").pop() 
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

// Update getStaticProps to include service data
export async function getStaticProps({ params }) {
  try {
    // Find the service from the services array using the slug
    const service = services.find(s => s.url.split("/").pop() === params.slug);

    if (!service) {
      return { notFound: true };
    }

    const technologiesRes = await getStrapiAPI("/technologies", {
      populate: "*",
      filters: {
        Featured: true,
      },
      sort: ["type:asc", "name:asc"],
    });

    // Create a serializable version of service
    const serializableService = {
      ...service,
      // Store only the icon name as a string, not the actual component
      iconName: service.iconName || ''
    };
    
    // Remove the non-serializable icon property
    delete serializableService.icon;

    return {
      props: {
        service: serializableService,
        technologies: technologiesRes?.data || [],
        isError: false,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        service: null,
        technologies: [],
        isError: true,
      },
    };
  }
}

// Update the component to use static props
export default function ServiceDetail({ service, technologies = [], isError = false }) {
  const router = useRouter();

  // Handle loading and error states
  if (router.isFallback) {
    return <Box>Loading...</Box>;
  }

  if (!service || isError) {
    return (
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={20}>
          <Stack spacing={4} align="center">
            <Heading>Service Not Found</Heading>
            <NextLink href="/services/web-development" passHref>
              <Button as="a" colorScheme="brand">
                Back to Services
              </Button>
            </NextLink>
          </Stack>
        </Container>
      </Box>
    );
  }

  // Remove useState and useEffect since we're using static props
  const heroBgColor = useColorModeValue("blue.50", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const activeColor = useColorModeValue("blue.600", "blue.200");
  
  const projectWork = [
    {
      title: "Event Management",
      description: "Manage and organize sports events with real-time updates.",
      href: "/projects/event-management",
      icon: FaCalendarCheck,
    },
    {
      title: "Product Store",
      description: "Sell event-related clothing and accessories online.",
      href: "/projects/product-store",
      icon: FaShoppingCart, 
    },
    {
      title: "User Dashboard",
      description: "Allow users to track their event registrations and purchases.",
      href: "/projects/user-dashboard",
      icon: FaUsersCog,
    },
    {
      title: "Admin Panel",
      description: "Control products, events, and user management securely.",
      href: "/projects/admin-panel",
      icon: FaUserLock,
    },
  ];
  
  const serviceToTechType = {
    'Front-End Development': 'Frontend',
    'Back-End Development': 'Backend',
    'Full-Stack Development': 'Database',
    'Custom Web Applications': 'Framework',
    'CMS Development': 'CMS',
    'E-Commerce Solutions': 'E-Commerce',
    // Add other mappings as needed
  };

  // Get the corresponding technology type for the current service
  const techType = serviceToTechType[service?.title] || null;
  
  // If service has an iconName, get the component from the map, or use a default
  const ServiceIcon = service.iconName ? iconMap[service.iconName] : FaProjectDiagram;

  return (
    <Box minH="100vh" bg={"gray.50"}>
      {/* Breadcrumb section */}
      <Box bg={heroBgColor} py={20}>
        <Container maxW="container.xl">
          <Breadcrumb
            spacing="2px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <NextLink href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NextLink href="/services" passHref>
                <BreadcrumbLink>Services</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NextLink href="/services/web-development" passHref>
                <BreadcrumbLink>Web-Development</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Text color={activeColor}>{service.title}</Text>
            </BreadcrumbItem>
          </Breadcrumb>

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Heading
                  as="h1"
                  size="3xl"
                  color={headingColor}
                  lineHeight="shorter"
                >
                  Crafting High-Performance Web Solutions
                </Heading>
                <Text fontSize="xl" color={textColor}>
                  Transform your digital presence with our expert web
                  development services. We build scalable, secure, and
                  innovative web solutions tailored to your business needs.
                </Text>
              </Stack>
              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <NextLink href="/contact" passHref>
                  <Button
                    size="lg"
                    colorScheme="brand"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Start Your Project
                  </Button>
                </NextLink>
                <Button size="lg" variant="outline" colorScheme="brand">
                  View Portfolio
                </Button>
              </Stack>
            </Stack>
            <Box
              position="relative"
              width="100%"
              height="400px"
              overflow="hidden"
              borderRadius="xl"
            >
              <Image
                src="https://picsum.photos/seed/web-dev-hero/1200/800"
                alt="Web Development Services"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                loading="eager"
                priority
                width="300"
                height={"200"}
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="2xl" color={"gray.800"} lineHeight="short">
              {service.title}
            </Heading>
            <Text fontSize="xl" color={"gray.600"} maxW="3xl">
              {service.description}
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="white" py={12}>
        <Container maxW="container.xl">
          <Heading size="xl" color={"gray.800"} textAlign="center" mb={8}>
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {service.features &&
              service.features.map((feature, index) => (
                <Box
                  key={index}
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor="gray.200"
                  bg="white"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "lg",
                    borderColor: "blue.400",
                  }}
                >
                  <Text fontWeight="bold" fontSize="lg" mb={2}>
                    {feature}
                  </Text>
                </Box>
              ))}
          </SimpleGrid>
        </Container>
      </Box>

      <TechnologiesSection technologies={technologies} isError={isError} filterType={techType} />

      <Box py={12}>
        <Heading size="xl" color={"gray.800"} textAlign="center" mb={8}>
          Our Work
        </Heading>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {projectWork?.map((project, index) => (
              <NextLink key={index} href={project.href} passHref>
                <Stack
                  as="a"
                  p={6}
                  bg={"white"}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={"gray.200"}
                  spacing={4}
                  cursor="pointer"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "xl",
                    borderColor: "blue.400",
                    "& .card-icon": {
                      color: "blue.400",
                      transform: "scale(1.1)",
                    },
                  }}
                  transition="all 0.3s"
                >
                  {/* Icon Section */}
                  <Box
                    className="card-icon"
                    transition="all 0.3s"
                    color="gray.600"
                  >
                    <Icon as={project.icon} boxSize={8} />
                  </Box>

                  <Stack spacing={2}>
                    <Heading size="md">{project.title}</Heading>
                    <Text color={"gray.500"}>{project.description}</Text>
                  </Stack>
                </Stack>
              </NextLink>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}