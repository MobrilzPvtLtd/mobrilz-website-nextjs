import { Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Box cursor="pointer">
        <Heading size="md">Your Logo</Heading>
      </Box>
    </Link>
  );
};

export default Logo;