import { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Container, Button, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';
import NextLink from 'next/link'; // Add this import

const HeaderBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    const bgColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.4)');

    const handleScroll = useCallback(() => {
        const currentPosition = window.pageYOffset;
        setIsVisible(scrollPosition > currentPosition || currentPosition < 10);
        setScrollPosition(currentPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            bg={bgColor}
            borderBottom="1px"
            borderColor={borderColor}
            boxShadow={`0 4px 6px -1px ${shadowColor}`}
            zIndex={1000}
            transform={`translateY(${isVisible ? '0' : '-100%'})`}
            transition="all 0.3s ease"
        >
            <Container maxW="container.xl">
                <Flex
                    justify="space-between"
                    align="center"
                    height="64px"
                >
                    <Logo />
                    <MegaMenu />
                    <Flex 
                        align="center" 
                        gap={2} 
                        display={{ base: 'none', lg: 'flex' }} // Hide on mobile/tablet
                    >
                        <ThemeSwitcher />
                        <NextLink href="/get-quote" passHref>
                            <Button 
                                as="a"
                                colorScheme="brand"
                                size="md"
                            >
                                Get A Quote
                            </Button>
                        </NextLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default HeaderBottom;
