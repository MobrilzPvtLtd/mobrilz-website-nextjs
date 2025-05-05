import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";
import TechnologiesSection from "@/components/TechnologiesSection";
import { FaProjectDiagram, FaShoppingCart, FaUsersCog, FaCalendarCheck, FaUserLock } from 'react-icons/fa';

export async function getStaticPaths() {
  try {
    const servicesRes = await getStrapiAPI("/services", {
      filters: {
        category: {
          $eq: "web-development",
        },
      },
      fields: ["slug"],
    });

    const paths = servicesRes.data.map((service) => ({
      params: {
        slug: service.attributes.slug,
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

// Fix getStaticProps
export async function getStaticProps({ params }) {
  try {
    const [serviceRes, technologiesRes] = await Promise.all([
      getStrapiAPI("/services", {
        filters: {
          slug: {
            $eq: params.slug,
          },
        },
        populate: "*",
      }),
      getStrapiAPI("/technologies", {
        populate: "*",
        
        
      }),
    ]);

    // Check if service exists
    if (!serviceRes.data || serviceRes.data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        service: serviceRes,
        technologies: technologiesRes || [],
        isError: false,
      },
      revalidate: 60, // Revalidate every 60 seconds
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
export default function ServiceDetail({ technologies = [], isError = false },service) {
  // Mock service object since it was referenced but not defined
//   const service = {
//     title: "Frontend Development",
//   };
 
  
  const projectWork = [
    {
      naam: "Event Management System",
      description: "Manage sports events, participants, and schedules with admin controls.",
      href: "/projects/event-management",
      icon: FaProjectDiagram
    },
    {
      naam: "Product Store",
      description: "Sell event clothing, accessories, and merchandise with a shopping cart.",
      href: "/projects/product-store",
      icon: FaShoppingCart
    },
    {
      naam: "Admin Dashboard",
      description: "Responsive dashboard for managing products, users, and orders.",
      href: "/projects/admin-dashboard",
      icon: FaUsersCog
    },
    {
      naam: "Appointment Manager",
      description: "Approve or reject event-related appointments and manage participant info.",
      href: "/projects/appointment-manager",
      icon: FaCalendarCheck
    },
    {
      naam: "User Authentication",
      description: "Secure login system with API authentication and protected routes.",
      href: "/projects/user-authentication",
      icon: FaUserLock
    },
  ];
console.log('object',technologies,'h',service)
  return (
    <Box minH="100vh" bg={"gray.50"}>
      {/* Breadcrumb Section */}
      <Box bg={useColorModeValue("blue.50", "blue.900")} py={4}>
        <Container maxW="container.xl">
          <Breadcrumb
            spacing="8px"
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
              <Text color="gray.500">{service.title}</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="2xl" color={"gray.800"} lineHeight="short">
              Frontend Development
            </Heading>
            <Text fontSize="xl" color={"gray.600"} maxW="3xl">
              Frontend refers to the part of a website or application that users
              directly interact with — basically, everything you see and use in
              your browser or on your device.
            </Text>
          </Stack>
        </Container>
      </Box>
      <TechnologiesSection technologies={technologies} isError={isError} />

      <Box>
        <Heading size="xl" color={"gray.800"} textAlign="center" mb={8}>
          Our Work{" "}
        </Heading>
      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projectWork?.map((service, index) => (
            <NextLink key={index} href={service.href} passHref>
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
                  '& .card-icon': {
                    color: "blue.400",
                    transform: "scale(1.1)",
                  }
                }}
                transition="all 0.3s"
              >
                {/* Icon Section */}
                <Box
                  className="card-icon"
                  transition="all 0.3s"
                  color="gray.600"
                >
                  <Icon
                    as={service.icon}
                    boxSize={8}
                  />
                </Box>
                
                <Stack spacing={2}>
                  <Heading size="md" >
                    {service.naam}
                  </Heading>
                  <Text color={"gray.500"}>{service.description}</Text>
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
