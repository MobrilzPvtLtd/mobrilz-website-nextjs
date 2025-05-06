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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import TechnologiesSection from "@/components/TechnologiesSection";
import { FaProjectDiagram, FaShoppingCart, FaUsersCog, FaCalendarCheck, FaUserLock } from 'react-icons/fa';
import { 
  webDevelopmentServices as services,
} from '../../../contexts/services/web-development';

export default function ServiceDetail({ technologies = [], isError = false }) {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    // Extract the service slug from the URL
    const path = router.asPath;
    const slug = path.split('/').pop();
    
    // Find the matching service
    const service = services.find(s => {
      // Extract slug from URL
      const serviceSlug = s.url.split('/').pop();
      return serviceSlug === slug;
    });
    
    if (service) {
      setSelectedService(service);
    } else {
      // Fallback to first service if none found
      setSelectedService(services[0]);
    }
  }, [router.asPath]);

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

  // If service is still loading
  if (!selectedService) {
    return <Box>Loading...</Box>;
  }

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
              <Text color="">{selectedService.title}</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="2xl" color={"gray.800"} lineHeight="short">
              {selectedService.title}
            </Heading>
            <Text fontSize="xl" color={"gray.600"} maxW="3xl">
              {selectedService.description}
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
            {selectedService.features && selectedService.features.map((feature, index) => (
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
                  borderColor: "blue.400"
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
      
      {/* <TechnologiesSection technologies={technologies} isError={isError} /> */}

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
                      as={project.icon}
                      boxSize={8}
                    />
                  </Box>
                  
                  <Stack spacing={2}>
                    <Heading size="md" >
                      {project.naam}
                    </Heading>
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