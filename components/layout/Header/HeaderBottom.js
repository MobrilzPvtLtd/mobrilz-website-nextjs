import { useState, useEffect } from 'react';
import { Box, Flex, Container, Button, useDisclosure } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

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
            bg="white"
            boxShadow="sm"
            zIndex="sticky"
            transform={`translateY(${isVisible ? '0' : '-100%'})`}
            transition="transform 0.3s ease"
        >
            <Container maxW="container.xl">
                <Flex
                    justify="space-between"
                    align="center"
                    py={4}
                >
                    <Logo />
                    <MegaMenu />
                    <Flex align="center" gap={4}>
                        <ThemeSwitcher />
                        <Button colorScheme="blue">Contact Us</Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default HeaderBottom;
