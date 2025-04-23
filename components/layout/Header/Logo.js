import { Box, Image } from '@chakra-ui/react';
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
        />
      </Box>
    </Link>
  );
};

export default Logo;