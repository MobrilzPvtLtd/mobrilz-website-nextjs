import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      color={iconColor}
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
    />
  );
};

export default ThemeSwitcher;