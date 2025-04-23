import { useState, useEffect } from 'react';
import { Box, Flex, Container, Button, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const bgColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.4)');

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setIsVisible(scrollPosition > currentPosition || currentPosition < 10);
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);

    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            bg={bgColor}
            borderBottom="1px"
            borderColor={borderColor}
            boxShadow={`0 4px 6px -1px ${shadowColor}`}
            zIndex="sticky"
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
                    <Flex align="center" gap={2}>
                        <ThemeSwitcher />
                        <Button 
                            colorScheme="brand"
                            size="md"
                        >
                            Get A Quote
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default HeaderBottom;
