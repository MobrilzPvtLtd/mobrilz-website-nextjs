import { Box, Button, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, Flex, Text, Divider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MegaMenu = () => {
  return (
    <Flex gap={1} justify="flex-end" flex={1} mx={4}>
      <Link href="/" passHref legacyBehavior>
        <Button as="a" variant="ghost" size="sm">Home</Button>
      </Link>

      {/* Services Menu */}
      <Menu>
        <MenuButton as={Button} variant="ghost" size="sm" rightIcon={<ChevronDownIcon />}>
          Services
        </MenuButton>
        <MenuList p={6} minW="680px" borderRadius="xl" boxShadow="xl">
          <SimpleGrid columns={3} spacing={8}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
                Development
              </Text>
              <Flex direction="column" gap={2}>
                <MenuItem>Web Development</MenuItem>
                <MenuItem>Mobile Apps</MenuItem>
                <MenuItem>Cloud Solutions</MenuItem>
                <MenuItem>Custom Software</MenuItem>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
                Design
              </Text>
              <Flex direction="column" gap={2}>
                <MenuItem>UI/UX Design</MenuItem>
                <MenuItem>Branding</MenuItem>
                <MenuItem>Graphics Design</MenuItem>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
                Solutions
              </Text>
              <Flex direction="column" gap={2}>
                <MenuItem>DevOps</MenuItem>
                <MenuItem>API Integration</MenuItem>
                <MenuItem>Maintenance</MenuItem>
              </Flex>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      {/* Industry Menu */}
      <Menu>
        <MenuButton as={Button} variant="ghost" size="sm" rightIcon={<ChevronDownIcon />}>
          Industry
        </MenuButton>
        <MenuList p={6} minW="460px" borderRadius="xl" boxShadow="xl">
          <SimpleGrid columns={2} spacing={8}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
                Sectors
              </Text>
              <Flex direction="column" gap={2}>
                <MenuItem>Manufacturing</MenuItem>
                <MenuItem>Finance</MenuItem>
                <MenuItem>Healthcare</MenuItem>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
                Solutions
              </Text>
              <Flex direction="column" gap={2}>
                <MenuItem>E-Commerce</MenuItem>
                <MenuItem>Consulting</MenuItem>
                <MenuItem>Retail</MenuItem>
              </Flex>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      {/* Our Work Menu */}
      <Menu>
        <MenuButton as={Button} variant="ghost" size="sm" rightIcon={<ChevronDownIcon />}>
          Our Work
        </MenuButton>
        <MenuList p={6} minW="240px" borderRadius="xl" boxShadow="xl">
          <Box>
            <Text fontSize="sm" fontWeight="bold" mb={3} color="brand.600" textTransform="uppercase">
              Portfolio
            </Text>
            <Flex direction="column" gap={2}>
              <MenuItem>Case Studies</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Clients</MenuItem>
              <MenuItem>Testimonials</MenuItem>
            </Flex>
          </Box>
        </MenuList>
      </Menu>

      {/* Other Menu Items */}
      <Button as="a" variant="ghost" size="sm">Packages</Button>
      <Button as="a" variant="ghost" size="sm">Support</Button>
      <Button as="a" variant="ghost" size="sm">About</Button>
    </Flex>
  );
};

export default MegaMenu;