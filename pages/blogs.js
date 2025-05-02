import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Stack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { getStrapiAPI } from "../utils/api";
import NextLink from "next/link";

export async function getStaticProps() {
  try {
    const blogsRes = await getStrapiAPI("/blogs", {
      populate: "*",
    });

    return {
      props: {
        blogs: blogsRes?.data || [],
        isError: false,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return {
      props: {
        blogs: [],
        isError: true,
      },
      revalidate: 60,
    };
  }
}

export default function Blogs({ blogs = [], isError = false }) {
  if (isError) {
    return (
      <>
        <Head>
          <title>Our Blogs - Error</title>
        </Head>
        <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
          <Container maxW="container.xl">
            <Stack spacing={12}>
              <Stack textAlign="center" spacing={3}>
                <Heading
                  size="xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Our Blogs
                </Heading>
                <Text color="red.500">
                  Unable to load portfolio items. Please try again later.
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </>
    );
  }
  console.log("objects", blogs);
  return (
    <>
      <Head>
        <title>Our Blogs - Featured Projects</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects and digital solutions"
        />
      </Head>

      <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
        {/* Hero Section */}
        <Box bg={useColorModeValue("blue.50", "blue.900")} py={20}>
          <Container maxW="container.xl">
            <Stack spacing={6} textAlign="center">
              <Heading
                size="2xl"
                bgGradient={useColorModeValue(
                  "linear(to-r, blue.600, purple.600)",
                  "linear(to-r, blue.200, purple.200)"
                )}
                bgClip="text"
                py={2}
              >
                Our Blog
              </Heading>
              <Text
                fontSize="xl"
                color={useColorModeValue("gray.600", "gray.300")}
                maxW="2xl"
                mx="auto"
              >
                Discover our successful projects and see how we've helped
                businesses grow
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Portfolio Grid */}
        <Box py={20}>
          <Container maxW="container.xl">
            {blogs.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {blogs?.map((blog, index) => {
                  const featuredImage = blog.FeaturedImage?.url;
                  const title = blog.Title;
                  const slug = blog.slug;

                  // Extract a short excerpt from the content
                  let excerpt = "";
                  if (blog.Content && blog.Content.length > 0) {
                    const firstTextBlock = blog.Content.find(
                      (block) =>
                        block.type === "paragraph" && block.children.length > 0
                    );
                    if (firstTextBlock) {
                      excerpt =
                        firstTextBlock.children[0].text.substring(0, 150) +
                        "...";
                    }
                  }

                  return (
                    <Box
                      key={blog.id || index}
                      p={6}
                      boxShadow="lg"
                      borderRadius="lg"
                      bg={useColorModeValue("white", "gray.800")}
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-5px)",
                        shadow: "2xl",
                        borderColor: useColorModeValue("gray.200", "gray.600"),
                      }}
                    >
                      {featuredImage && (
                        <Image
                          src={featuredImage}
                          alt={title}
                          borderRadius="md"
                          mb={4}
                          h="200px"
                          w="full"
                          objectFit="cover"
                        />
                      )}
                      <Stack spacing={4}>
                        <Heading
                          size="md"
                          color={useColorModeValue("gray.800", "white")}
                          noOfLines={2}
                        >
                          {title || "Untitled Blog"}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color={useColorModeValue("gray.600", "gray.300")}
                        >
                          {new Date(blog.PublicationDate).toLocaleDateString()}
                        </Text>
                        <Text
                          color={useColorModeValue("gray.600", "gray.300")}
                          noOfLines={3}
                        >
                          {excerpt}
                        </Text>
                        {Array.isArray(blog.blog_categories) && blog.blog_categories.length > 0 && (
                          <Stack direction="row" spacing={2} flexWrap="wrap">
                            {blog.blog_categories.slice(0, 3).map((category, index) => (
                              <Tag
                                key={index}
                                size="sm"
                                colorScheme="blue"
                                variant="subtle"
                              >
                                {category.name}
                              </Tag>
                            ))}
                            {blog.blog_categories.length > 3 && (
                              <Tag size="sm" colorScheme="gray" variant="subtle">
                                +{blog.blog_categories.length - 3} more
                              </Tag>
                            )}
                          </Stack>
                        )}
                        <NextLink href={`/blogs/${slug}`} passHref legacyBehavior>
                          <Button
                            as="a"
                            variant="link"
                            colorScheme="blue"
                            color={useColorModeValue("blue.600", "blue.200")}
                            rightIcon={<ChevronRightIcon />}
                            _hover={{
                              color: useColorModeValue("blue.700", "blue.100"),
                            }}
                          >
                            Read More
                          </Button>
                        </NextLink>
                      </Stack>
                    </Box>
                  );
                })}
              </SimpleGrid>
            ) : (
              <Stack spacing={4} textAlign="center">
                <Heading
                  size="md"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  No Projects Available
                </Heading>
                <Text color={useColorModeValue("gray.500", "gray.500")}>
                  Check back later for updates to our portfolio.
                </Text>
              </Stack>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
}
