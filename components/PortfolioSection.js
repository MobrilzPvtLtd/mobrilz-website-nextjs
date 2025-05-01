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

const PortfolioCard = ({ project }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      maxW="md"
      boxShadow="xl"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
      }}
    >
      <Box position="relative" p={4} >
        <Box
          position="relative"
          overflow="hidden"
          paddingBottom="56.25%" // This creates a 16:9 aspect ratio
          w="full"
          rounded="lg"
        >
          {images.map((image, index) => (
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
          ))}

          {/* Category Tags */}
          <HStack
            position="absolute"
            bottom="4"
            left="4"
            spacing={2}
          >
            {project.portfolio_categories?.map((category, index) => (
              <Tag
                key={index}
                bg="blue.500"
                color="white"
                borderRadius="full"
                px="3"
                py="1"
                fontSize="sm"
              >
                {category.CategoryName}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Content */}
      <Box p="4">
        {/* Technologies Tags */}
        <HStack spacing={2} mb="2" flexWrap="wrap">
          {project.technologies?.map((tech) => (
            <Tag
              key={tech.id}
              size="sm"
              variant="outline"
              colorScheme={tech.type === "Frontend" ? "blue" : 
                          tech.type === "Database" ? "green" : "gray"}
              borderRadius="full"
            >
              {tech.name} 
            </Tag>
          ))}
        </HStack>
        <Heading
          as="h3"
          fontSize="xl"
          mb="3"
          color={textColor}
        >
          {project.ProjectName}
        </Heading>

        

        <Flex justify="flex-end">
          {project.ProjectURL && (
            <Button
              as="a"
              href={project.ProjectURL}
              size="sm"
              borderRadius="full"
              bg="#F3B725"
              color="black"
              _hover={{ bg: "#d9a520" }}
              rightIcon={<ChevronRightIcon />}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

const PortfolioSection = ({ portfolios = [], isError = false }) => {
  const sliderRef = useRef(null);
  console.log(portfolios, "portfolios")

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
                      <PortfolioCard project={project} />
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
            <Text
              textAlign="center"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              No portfolio items available at the moment.
            </Text>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
