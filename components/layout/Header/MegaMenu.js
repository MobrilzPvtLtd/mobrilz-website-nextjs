import { Box, Button, Menu, MenuButton, MenuList, SimpleGrid, Flex, Text, Icon, HStack, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { 
  FaCode, FaMobile, FaCloud, FaCogs, 
  FaPalette, FaChartLine, FaIndustry,
  FaBuilding, FaHandshake, FaProjectDiagram,
  FaUsers, FaStar, FaHeadset
} from 'react-icons/fa';
import Link from 'next/link';

const MenuItem = ({ icon, title, description }) => (
  <HStack 
    p={3} 
    spacing={4} 
    _hover={{ 
      bg: 'whiteAlpha.100', 
      _dark: { bg: 'whiteAlpha.100' } 
    }}
    borderRadius="md"
    transition="all 0.2s"
    cursor="pointer"
    role="group"
  >
    <Icon 
      as={icon} 
      boxSize={5} 
      color="brand.500" 
      _dark={{ color: 'brand.200' }} 
      _groupHover={{
        color: 'brand.400',
        _dark: { color: 'brand.300' }
      }}
    />
    <VStack align="start" spacing={0}>
      <Text 
        fontWeight="500"
        color="gray.800"
        _dark={{ color: 'white' }}
      >
        {title}
      </Text>
      {description && (
        <Text 
          fontSize="sm" 
          color="gray.600" 
          _dark={{ color: 'gray.400' }}
        >
          {description}
        </Text>
      )}
    </VStack>
  </HStack>
);

const CategoryTitle = ({ children }) => (
  <Text 
    fontSize="sm" 
    fontWeight="bold" 
    mb={4} 
    color="gray.700"
    _dark={{ color: 'gray.100' }}
    textTransform="uppercase"
  >
    {children}
  </Text>
);

const MegaMenu = () => {
  return (
    <Flex gap={0.5} justify="flex-end" flex={1} mx={4}>
      {/* Home Link */}
      <Link href="/">
        <Button as="span" variant="ghost" size="sm">
          Home
        </Button>
      </Link>

      {/* Services Menu */}
      <Menu>
        <MenuButton 
          as={Button} 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
          rightIcon={<ChevronDownIcon />}
        >
          Services
        </MenuButton>
        <MenuList 
          p={6} 
          minW="780px" 
          borderRadius="xl" 
          boxShadow="2xl"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          border="1px solid"
          borderColor="gray.100"
          _dark={{ borderColor: 'gray.700' }}
        >
          <SimpleGrid columns={3} spacing={8}>
            <Box>
              <CategoryTitle>Development</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaCode}
                  title="Web Development"
                  description="Custom websites & web applications"
                />
                <MenuItem 
                  icon={FaMobile}
                  title="Mobile Apps"
                  description="iOS & Android development"
                />
                <MenuItem 
                  icon={FaCloud}
                  title="Cloud Solutions"
                  description="Scalable cloud infrastructure"
                />
                <MenuItem 
                  icon={FaCogs}
                  title="Custom Software"
                  description="Tailored business solutions"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Design</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaPalette}
                  title="UI/UX Design"
                  description="User-centered interfaces"
                />
                <MenuItem 
                  icon={FaChartLine}
                  title="Branding"
                  description="Brand identity & strategy"
                />
                <MenuItem 
                  icon={FaPalette}
                  title="Graphics Design"
                  description="Visual content creation"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Solutions</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaCogs}
                  title="DevOps"
                  description="Automated development ops"
                />
                <MenuItem 
                  icon={FaCloud}
                  title="API Integration"
                  description="Seamless system connections"
                />
                <MenuItem 
                  icon={FaHandshake}
                  title="Maintenance"
                  description="Ongoing system support"
                />
              </VStack>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      {/* Industry Menu */}
      <Menu>
        <MenuButton 
          as={Button} 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
          rightIcon={<ChevronDownIcon />}
        >
          Industry
        </MenuButton>
        <MenuList 
          p={6} 
          minW="520px" 
          borderRadius="xl" 
          boxShadow="2xl"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          border="1px solid"
          borderColor="gray.100"
          _dark={{ borderColor: 'gray.700' }}
        >
          <SimpleGrid columns={2} spacing={8}>
            <Box>
              <CategoryTitle>Sectors</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaIndustry}
                  title="Manufacturing"
                  description="Smart factory solutions"
                />
                <MenuItem 
                  icon={FaBuilding}
                  title="Finance"
                  description="Fintech innovations"
                />
                <MenuItem 
                  icon={FaHeadset}
                  title="Healthcare"
                  description="Digital health systems"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Solutions</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaChartLine}
                  title="E-Commerce"
                  description="Online retail platforms"
                />
                <MenuItem 
                  icon={FaHandshake}
                  title="Consulting"
                  description="Business technology advice"
                />
                <MenuItem 
                  icon={FaBuilding}
                  title="Retail"
                  description="Point of sale systems"
                />
              </VStack>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      {/* Our Work Menu */}
      <Menu>
        <MenuButton 
          as={Button} 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
          rightIcon={<ChevronDownIcon />}
        >
          Our Work
        </MenuButton>
        <MenuList 
          p={6} 
          minW="300px" 
          borderRadius="xl" 
          boxShadow="2xl"
          bg="white"
          _dark={{ bg: 'gray.800' }}
          border="1px solid"
          borderColor="gray.100"
          _dark={{ borderColor: 'gray.700' }}
        >
          <Box>
            <CategoryTitle>Portfolio</CategoryTitle>
            <VStack align="stretch" spacing={2}>
              <MenuItem 
                icon={FaProjectDiagram}
                title="Case Studies"
                description="Success stories"
              />
              <MenuItem 
                icon={FaCogs}
                title="Projects"
                description="Recent work"
              />
              <MenuItem 
                icon={FaUsers}
                title="Clients"
                description="Who we work with"
              />
              <MenuItem 
                icon={FaStar}
                title="Testimonials"
                description="Client feedback"
              />
            </VStack>
          </Box>
        </MenuList>
      </Menu>

      {/* Regular Menu Links */}
      <Link href="/packages">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
        >
          Packages
        </Button>
      </Link>
      <Link href="/support">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
        >
          Support
        </Button>
      </Link>
      <Link href="/about">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color="gray.700"
          _dark={{ color: 'white' }}
        >
          About
        </Button>
      </Link>
    </Flex>
  );
};

export default MegaMenu;