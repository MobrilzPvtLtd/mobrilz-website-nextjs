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
  IconButton,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";

// Import Slick CSS (add these imports in your _app.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Add this function at the top of your file, after imports
const randomStyle = () => {
  const styles = [
    { color: "blue.700", bg: "blue.50" },
    { color: "purple.700", bg: "purple.50" },
    { color: "green.700", bg: "green.50" },
    { color: "yellow.700", bg: "yellow.100" },
    { color: "red.700", bg: "red.50" },
    { color: "gray.700", bg: "gray.100" },
  ];
  return styles[Math.floor(Math.random() * styles.length)];
};

// Add this helper function to get YouTube video ID
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const PortfolioCard = ({ project }) => {


  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Create array of images combining thumbnail and gallery images
  const images = [
    // Add thumbnail image if it exists
    project.ThumbnailImage && {
      url: project.ThumbnailImage.url || project.ThumbnailImage.formats?.large?.url,
      alt: project.ProjectName
    },
    // Add gallery images if they exist
    ...(project.GalleryImages || []).map(img => ({
      url: img.url || img.formats?.large?.url,
      alt: project.ProjectName
    }))
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance timer
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(nextImage, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      width="full"  
      display="flex"
      flexDirection="column"
      boxShadow="0 0 5px rgba(76, 180, 250, 0.5)"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "4px 4px 10px rgba(41, 146, 216, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Container - Fixed height */}
      <Box position="relative" p={3} height="250px">
        <Box
          position="relative"
          overflow="hidden"
          h="100%"
          w="full"
          rounded="lg"
          boxShadow="0 0 10px rgba(43, 13, 13, 0.5)"
        >
          {project.VideoURL ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.VideoURL)}?controls=0&autoplay=${isHovered ? 1 : 0}&mute=1&playsinline=1&loop=1&modestbranding=1&rel=0`}
              title={project.ProjectName}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            images.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={image.alt}
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                objectFit="cover"
                opacity={index === currentImageIndex ? 1 : 0}
                transition="opacity 0.5s ease-in-out"
                loading="lazy"
              />
            ))
          )}
        </Box>
      </Box>

      {/* Content Container - Flexible height with scrolling if needed */}
      <Box 
        px="4" 
        pb="4" 
        flex="1"
        overflow="auto"
        display="flex"
        flexDirection="column"
      >
        {/* Category Tags */}
        <HStack spacing={2} mb="2" flexWrap="wrap">
          {project.portfolio_categories?.map((category, index) => (
            <Tag
              size="md"
              borderRadius="full"
              px="3.5"
              py="2.5"
              bgGradient="linear(to-r, blue.600, blue.400)"
              color="white"
              fontWeight="medium"
              fontSize="sm"
              boxShadow="sm"
              _hover={{
                bgGradient: "linear(to-r, blue.700, blue.500)",
                transform: "translateY(-1px)",
                boxShadow: "md"
              }}
            >
              {category.CategoryName}
            </Tag>
          ))}
        </HStack>

        {/* Technology Tags */}
        <HStack spacing={2} mt="1" h={20} flexWrap="wrap">
          {project.technologies?.map((tech) => {
            const style = randomStyle();
            return (
              <Tag
                key={tech.id}
                size="base"
                fontSize={14}
                px="3"
                py="2"
                variant="subtle"
                color={style.color}
                bg={style.bg}
                borderRadius="full"
              >
                {tech.name}
              </Tag>
            );
          })}
        </HStack>

        {/* Divider */}
        <Box
          w="full"
          h="1px"
          bg="gray.400"
          my={3}
          opacity={0.6}
          _dark={{ bg: "gray.200" }}
        />

        {/* Project Title and Description */}
        <Box flex="1">
          <Heading
            as="h3"
            fontSize="xl"
            mb="2"
            color={textColor}
          >
            {project.ProjectName}
          </Heading>
          
        </Box>

      </Box>
    </Box>
  );
};

const PortfolioSection = ({ portfolios = [], isError = false }) => {
  console.log("portfolios", portfolios)
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    centerMode: true,  // Enable center mode
    centerPadding: '8%', // Show partial cards on sides
    cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        },
      },
    ],
  };

  if (isError) {
    return (
      <Box py={20} bg={useColorModeValue("gray.100", "gray.800")}>
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
    <Box py={20} bg={useColorModeValue("gray.100", "gray.800")}>
      <Stack spacing={6}>
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
          <Box position="relative" px={4}>
            <Box
              sx={{
                // General styles for all slides
                '.slick-slide': {
                  opacity: '0.3',
                  transition: 'all 0.3s ease',
                  transform: 'scale(0.85)',
                  '&.slick-active': {
                    opacity: '0.5',
                    transform: 'scale(0.9)',
                  },
                },
                // Active center slide
                '.slick-center': {
                  '& .slick-slide': {
                    opacity: '1 !important',
                    transform: 'scale(1)',
                  },
                },
                // Active slides (visible ones)
                '.slick-current': {
                  opacity: '1 !important',
                  transform: 'scale(1)',
                  '& ~ .slick-active': {
                    opacity: '1 !important',
                  },
                },
                '.slick-track': {
                  display: 'flex',
                  alignItems: 'center',
                },
                '@media (min-width: 1024px)': {
                  '.slick-active': {
                    opacity: '1 !important',
                  },
                  '.slick-active ~ .slick-slide:not(.slick-active)': {
                    opacity: '0.3 !important',
                  },
                }
              }}
            >
              <Slider ref={sliderRef} {...settings}>
                {portfolios.map((project) => (
                  <Box key={project.id} px={0}>
                    <NextLink href={`/portfolio/${project.slug}`} passHref>
                      <PortfolioCard project={project} />
                    </NextLink>
                  </Box>
                ))}
              </Slider>

              {/* Navigation Buttons */}
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronLeftIcon w={6} h={6} />}
                position="absolute"
                left={2}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={() => sliderRef.current?.slickPrev()}
                colorScheme="blue"
                variant="solid"
                rounded="full"
                bg="white"
                color="gray.800"
                boxShadow="lg"
                size="lg"
                opacity="0.8"
                _hover={{
                  opacity: 1,
                  transform: "translateY(-50%) scale(1.1)",
                }}
                _active={{
                  transform: "translateY(-50%) scale(0.95)",
                }}
                transition="all 0.2s"
              />

              <IconButton
                aria-label="Next slide"
                icon={<ChevronRightIcon w={6} h={6} />}
                position="absolute"
                right={2}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={() => sliderRef.current?.slickNext()}
                colorScheme="blue"
                variant="solid"
                rounded="full"
                bg="white"
                color="gray.800"
                boxShadow="lg"
                size="lg"
                opacity="0.8"
                _hover={{
                  opacity: 1,
                  transform: "translateY(-50%) scale(1.1)",
                }}
                _active={{
                  transform: "translateY(-50%) scale(0.95)",
                }}
                transition="all 0.2s"
              />
            </Box>
          </Box>
        ) : (
          <Text
            textAlign="center"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            No portfolio items available at the moment.
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default PortfolioSection;
