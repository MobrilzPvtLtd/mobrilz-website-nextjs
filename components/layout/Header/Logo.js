import { Box, Image, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Box cursor="pointer">
        <Image 
          src="/images/logo.png" 
          alt="Mobrilz Logo" 
          h="40px"
          objectFit="contain"
          filter={useColorModeValue("none", "brightness(0) invert(1)")}
          transition="all 0.2s"
        />
      </Box>
    </Link>
  );
};

export default Logo;