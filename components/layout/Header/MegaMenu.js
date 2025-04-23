import { Box, Button, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, Icon, Flex, Text, Divider } from '@chakra-ui/react';
import {
  ChevronDownIcon,
  HomeIcon,
  CodeIcon,
  StarIcon,
  ViewIcon,
  SettingsIcon,
  InfoIcon,
  SupportIcon,
  PhoneIcon,
  EmailIcon,
  AtSignIcon
} from '@chakra-ui/icons';
import { 
  FaIndustry, 
  FaMobile, 
  FaCloud, 
  FaDesktop, 
  FaCode,
  FaBriefcase,
  FaBox,
  FaUserTie,
  FaChartLine,
  FaTools,
  FaCogs,
  FaHandshake
} from 'react-icons/fa';
import Link from 'next/link';

const MegaMenu = () => {
  return (
    <Box>
      <Flex gap={4}>
        <Link href="/" passHref legacyBehavior>
          <Button as="a" variant="ghost" leftIcon={<HomeIcon />}>
            Home
          </Button>
        </Link>

        {/* Services Menu */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Services
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={3} spacing={6} minW="600px">
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Development</Text>
                <MenuItem icon={<Icon as={FaCode} />}>Web Development</MenuItem>
                <MenuItem icon={<Icon as={FaMobile} />}>Mobile Apps</MenuItem>
                <MenuItem icon={<Icon as={FaCloud} />}>Cloud Solutions</MenuItem>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Design</Text>
                <MenuItem icon={<Icon as={FaDesktop} />}>UI/UX Design</MenuItem>
                <MenuItem icon={<Icon as={ViewIcon} />}>Branding</MenuItem>
                <MenuItem icon={<Icon as={StarIcon} />}>Graphics Design</MenuItem>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Solutions</Text>
                <MenuItem icon={<Icon as={SettingsIcon} />}>DevOps</MenuItem>
                <MenuItem icon={<Icon as={FaCogs} />}>API Integration</MenuItem>
                <MenuItem icon={<Icon as={FaTools} />}>Maintenance</MenuItem>
              </Box>
            </SimpleGrid>
          </MenuList>
        </Menu>

        {/* Industry Menu */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Industry
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={2} spacing={6} minW="400px">
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Sectors</Text>
                <MenuItem icon={<Icon as={FaIndustry} />}>Manufacturing</MenuItem>
                <MenuItem icon={<Icon as={FaBriefcase} />}>Finance</MenuItem>
                <MenuItem icon={<Icon as={FaUserTie} />}>Healthcare</MenuItem>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Solutions</Text>
                <MenuItem icon={<Icon as={FaChartLine} />}>E-Commerce</MenuItem>
                <MenuItem icon={<Icon as={FaHandshake} />}>Consulting</MenuItem>
                <MenuItem icon={<Icon as={FaBox} />}>Retail</MenuItem>
              </Box>
            </SimpleGrid>
          </MenuList>
        </Menu>

        {/* Our Work */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Our Work
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={1} spacing={2} minW="200px">
              <MenuItem icon={<StarIcon />}>Portfolio</MenuItem>
              <MenuItem icon={<Icon as={FaBriefcase} />}>Case Studies</MenuItem>
              <MenuItem icon={<Icon as={FaHandshake} />}>Clients</MenuItem>
              <MenuItem icon={<StarIcon />}>Testimonials</MenuItem>
            </SimpleGrid>
          </MenuList>
        </Menu>

        {/* Packages */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Packages
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={2} spacing={6} minW="400px">
              <MenuItem icon={<StarIcon />}>Starter Package</MenuItem>
              <MenuItem icon={<StarIcon />}>Professional</MenuItem>
              <MenuItem icon={<StarIcon />}>Enterprise</MenuItem>
              <MenuItem icon={<StarIcon />}>Custom Solutions</MenuItem>
            </SimpleGrid>
          </MenuList>
        </Menu>

        {/* Support */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Support
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={1} spacing={2} minW="200px">
              <MenuItem icon={<SupportIcon />}>Help Center</MenuItem>
              <MenuItem icon={<PhoneIcon />}>Contact Support</MenuItem>
              <MenuItem icon={<EmailIcon />}>Submit Ticket</MenuItem>
              <MenuItem icon={<AtSignIcon />}>FAQ</MenuItem>
            </SimpleGrid>
          </MenuList>
        </Menu>

        {/* About Us */}
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            About Us
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={2} spacing={6} minW="400px">
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Company</Text>
                <MenuItem icon={<InfoIcon />}>Our Story</MenuItem>
                <MenuItem icon={<Icon as={FaUserTie} />}>Team</MenuItem>
                <MenuItem icon={<StarIcon />}>Values</MenuItem>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={3} color="brand.600">Connect</Text>
                <MenuItem icon={<Icon as={FaHandshake} />}>Partners</MenuItem>
                <MenuItem icon={<EmailIcon />}>Contact</MenuItem>
                <MenuItem icon={<PhoneIcon />}>Careers</MenuItem>
              </Box>
            </SimpleGrid>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default MegaMenu;