import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const wobble = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const CustomError = () => {
  // Add state for client-side rendering
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  // Don't render until client-side
  if (!isMounted) return null;

  return (
    <Box 
      minH="100vh" 
      bg={bgColor} 
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        zIndex={0}
        bg={useColorModeValue(
          "repeating-linear-gradient(45deg, #4299E1 0, #4299E1 10px, transparent 10px, transparent 20px)",
          "repeating-linear-gradient(45deg, #2D3748 0, #2D3748 10px, transparent 10px, transparent 20px)"
        )}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8} align="center" textAlign="center">
          {/* Animated 404 Image */}
          <Box
            as={motion.div}
            animation={`${float} 3s ease-in-out infinite`}
            position="relative"
          >
            <Box
              position="relative"
              width="400px"
              height="300px"
              borderRadius="2xl"
              overflow="hidden"
              shadow="2xl"
              transform="rotate(-5deg)"
              transition="transform 0.3s ease"
              _hover={{ transform: "rotate(5deg)" }}
            >
              <Image
                src="https://picsum.photos/seed/404/400/300"
                alt="404 Illustration"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Heading
              size="4xl"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              textShadow="3px 3px 0 rgba(0,0,0,0.2)"
              fontWeight="black"
              as={motion.h1}
              animation={`${wobble} 2s ease-in-out infinite`}
            >
              404
            </Heading>
          </Box>

          <VStack spacing={4}>
            <Heading 
              size="xl" 
              color={headingColor}
              bgGradient={useColorModeValue(
                "linear(to-r, blue.400, purple.500)",
                "linear(to-r, blue.200, purple.300)"
              )}
              bgClip="text"
            >
              Oops! Page Not Found
            </Heading>
            <Text 
              fontSize="xl" 
              color={textColor}
              maxW="2xl"
            >
              Looks like you've ventured into the digital wilderness! 
              Don't worry, even the best explorers take wrong turns sometimes.
            </Text>
          </VStack>

          <Flex gap={4} flexWrap="wrap" justify="center">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                leftIcon={<FaHome />}
                colorScheme="brand"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                transition="all 0.2s"
              >
                Back to Home
              </Button>
            </Link>
          </Flex>

          {/* Fun facts section */}
          <Box
            p={6}
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius="xl"
            shadow="xl"
            maxW="2xl"
            border="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
            <Text fontWeight="bold" mb={2} color={headingColor}>
              Did you know? 🤔
            </Text>
            <Text color={textColor}>
              The term "404" comes from the early days of HTTP. 
              It was literally the room number where the web server logs were kept at CERN!
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CustomError;