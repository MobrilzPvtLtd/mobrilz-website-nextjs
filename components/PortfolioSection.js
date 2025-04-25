import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Button,
    Stack,
    Tag,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Slider from 'react-slick';
import { useRef } from 'react';

// Import Slick CSS (add these imports in your _app.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSection = ({ portfolios = [], isError = false }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (isError) {
        return (
            <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
                <Container maxW="container.xl">
                    <Stack spacing={12}>
                        <Stack textAlign="center" spacing={3}>
                            <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                                Our Portfolio
                            </Heading>
                            <Text color="red.500">
                                Unable to load portfolio items. Please try again later.
                            </Text>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        );
    }

    return (
        <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
            <Container maxW="container.xl">
                <Stack spacing={12}>
                    <Stack textAlign="center" spacing={3}>
                        <Heading size="xl" color={useColorModeValue("gray.800", "white")}>
                            Our Portfolio
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.600", "gray.300")}
                            maxW="2xl"
                            mx="auto"
                        >
                            Take a look at some of our successful projects
                        </Text>
                    </Stack>

                    {portfolios?.length > 0 ? (
                        <Box position="relative" px={8}>
                            <IconButton
                                aria-label="Previous slide"
                                icon={<ChevronLeftIcon />}
                                position="absolute"
                                left={0}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                onClick={() => sliderRef.current?.slickPrev()}
                                colorScheme="blue"
                                variant="ghost"
                            />

                            <Slider ref={sliderRef} {...settings}>
                                {portfolios.map((project) => (
                                    <Box key={project.id} px={4}>
                                        <NextLink href={`/portfolio/${project.slug}`} passHref>
                                            <Box
                                                as="a"
                                                cursor="pointer"
                                                overflow="hidden"
                                                borderRadius="lg"
                                                boxShadow="lg"
                                                bg={useColorModeValue("white", "gray.700")}
                                                transition="all 0.3s"
                                                height="100%"
                                                _hover={{
                                                    transform: 'translateY(-5px)',
                                                    shadow: '2xl'
                                                }}
                                            >
                                                <Image
                                                    src={project.ThumbnailImage?.url || project.ThumbnailImage?.formats?.large?.url}
                                                    alt={project.ProjectName || 'Project Image'}
                                                    h="300px"
                                                    w="full"
                                                    objectFit="cover"
                                                />
                                                <Box p={6}>
                                                    <Heading
                                                        size="md"
                                                        mb={2}
                                                        color={useColorModeValue("gray.800", "white")}
                                                    >
                                                        {project.ProjectName}
                                                    </Heading>
                                                    {/* {project.ProjectDescription && (
                                                        <Text
                                                            color={useColorModeValue("gray.600", "gray.300")}
                                                            mb={4}
                                                        >
                                                            {typeof project.ProjectDescription === 'string' 
                                                                ? project.ProjectDescription 
                                                                : project.ProjectDescription?.[0]?.children?.[0]?.text}
                                                        </Text>
                                                    )} */}
                                                    {project.portfolio_categories?.length > 0 && (
                                                        <Stack direction="row" spacing={2} mb={4} flexWrap="wrap">
                                                            {project.portfolio_categories.map((category, index) => (
                                                                <Tag
                                                                    key={index}
                                                                    colorScheme="blue"
                                                                    size="sm"
                                                                >
                                                                    {category.CategoryName}
                                                                </Tag>
                                                            ))}
                                                        </Stack>
                                                    )}
                                                    {project.ProjectURL && (
                                                        <NextLink
                                                            href={project.ProjectURL}
                                                            passHref
                                                            legacyBehavior
                                                        >
                                                            <Button
                                                                as="a"
                                                                variant="ghost"
                                                                colorScheme="blue"
                                                                rightIcon={<ChevronRightIcon />}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                View Project
                                                            </Button>
                                                        </NextLink>
                                                    )}
                                                </Box>
                                            </Box>
                                        </NextLink>
                                    </Box>
                                ))}
                            </Slider>

                            <IconButton
                                aria-label="Next slide"
                                icon={<ChevronRightIcon />}
                                position="absolute"
                                right={0}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                onClick={() => sliderRef.current?.slickNext()}
                                colorScheme="blue"
                                variant="ghost"
                            />
                        </Box>
                    ) : (
                        <Text textAlign="center" color={useColorModeValue("gray.600", "gray.400")}>
                            No portfolio items available at the moment.
                        </Text>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default PortfolioSection;