import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const MegaMenu = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MegaMenu;