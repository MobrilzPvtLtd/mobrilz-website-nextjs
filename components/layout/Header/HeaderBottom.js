import { useState, useEffect } from 'react';
import { Box, Flex, Container, Button, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const bgColor = useColorModeValue('header.light.bottom', 'header.dark.bottom');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

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
            boxShadow="sm"
            borderBottom="1px"
            borderColor={borderColor}
            zIndex="sticky"
            transform={`translateY(${isVisible ? '0' : '-100%'})`}
            transition="all 0.3s ease"
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
                        <Button 
                            colorScheme="blue"
                            _dark={{
                                bg: 'blue.600',
                                _hover: { bg: 'blue.500' }
                            }}
                        >
                            Contact Us
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default HeaderBottom;
