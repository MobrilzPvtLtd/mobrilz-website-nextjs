import { Box, Button, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, Icon, Flex } from '@chakra-ui/react';
import { ChevronDownIcon, CodeIcon, MobileIcon, ViewIcon, CloudIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MegaMenu = () => {
  return (
    <Box>
      <Flex gap={4}>
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
            Services
          </MenuButton>
          <MenuList p={4}>
            <SimpleGrid columns={2} spacing={4} minW="400px">
              {services.map((service) => (
                <MenuItem key={service.name} icon={<Icon as={service.icon} />}>
                  {service.name}
                </MenuItem>
              ))}
            </SimpleGrid>
          </MenuList>
        </Menu>
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path} passHref legacyBehavior>
            <Button as="a" variant="ghost">{link.label}</Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const services = [
  { name: 'Web Development', icon: CodeIcon },
  { name: 'Mobile Development', icon: MobileIcon },
  { name: 'UI/UX Design', icon: ViewIcon },
  { name: 'Cloud Solutions', icon: CloudIcon },
];

const navLinks = [
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
];

export default MegaMenu;