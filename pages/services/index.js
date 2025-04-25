import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  Text, 
  Stack,
  Icon,
  useColorModeValue 
} from '@chakra-ui/react';
import { useServices } from '../../hooks/useServices';
import SEO from '../../components/SEO';
import NextLink from 'next/link';

export default function ServicesPage() {
  const { getAllServices } = useServices();
  const services = getAllServices();
  
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  
  return (
    <>
      <SEO 
        title="Our Services - Mobrilz"
        description="Explore our comprehensive range of software development and digital services."
      />
      
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack textAlign="center" spacing={3}>
              <Heading size="xl" color={headingColor}>
                Our Services
              </Heading>
              <Text color={textColor} maxW="2xl" mx="auto">
                Comprehensive software solutions to help your business grow in the digital age
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {services.map((service, index) => (
                <NextLink 
                  key={index} 
                  href={service.href}
                  passHref
                >
                  <Stack
                    as="a"
                    p={6}
                    bg={cardBgColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                    spacing={4}
                    cursor="pointer"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: 'xl',
                      borderColor: 'blue.400'
                    }}
                    transition="all 0.3s"
                  >
                    <Icon 
                      as={service.icon} 
                      boxSize={10} 
                      color="blue.500" 
                    />
                    <Stack spacing={2}>
                      <Heading 
                        size="md" 
                        color={headingColor}
                      >
                        {service.title}
                      </Heading>
                      <Text color={textColor}>
                        {service.description}
                      </Text>
                    </Stack>
                  </Stack>
                </NextLink>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}