import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Tag,
  useColorModeValue,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { getStrapiAPI } from "../../utils/api";
import React from "react";
import NextLink from "next/link";

// Add this helper function at the top of your file
const renderContent = (content) => {
  if (!Array.isArray(content)) return "";

  return content.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <Text key={index} mb={4} fontSize="lg" lineHeight="tall">
          {block.children
            ?.map((child, childIndex) => (child.text ? child.text : ""))
            .join("")}
        </Text>
      );
    }
    return null;
  });
};

export async function getStaticPaths() {
  try {
    const response = await getStrapiAPI("/blogs", {
      fields: ["slug"],
    });

    const paths = response.data.map((blog) => ({
      params: {
        slug: blog.attributes?.slug || blog.slug,
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const [blogResponse, recentBlogsResponse] = await Promise.all([
      getStrapiAPI("/blogs", {
        filters: {
          slug: {
            $eq: params.slug,
          },
        },
        populate: "*",
      }),
      getStrapiAPI("/blogs", {
        sort: ['PublicationDate:desc'],
        pagination: {
          page: 1,
          pageSize: 4,
        },
        populate: ["FeaturedImage"],
      }),
    ]);

    if (!blogResponse.data || blogResponse.data.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        blog: blogResponse.data[0],
        recentBlogs: recentBlogsResponse.data.filter(
          (recentBlog) => recentBlog.slug !== params.slug
        ).slice(0, 3),
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}

export default function BlogDetail({ blog, recentBlogs }) {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.800", "white");
  const breadcrumbColor = useColorModeValue("gray.600", "gray.400");

  if (!blog) return null;

  // Create a plain text excerpt for meta description
  const getExcerpt = (content) => {
    if (!Array.isArray(content)) return "";
    return content
      .filter((block) => block.type === "paragraph")
      .map((block) => block.children?.map((child) => child.text).join(""))
      .join(" ")
      .substring(0, 160);
  };

  return (
    <>
      <Head>
        <title>{blog.Title} | Mobrilz Blog</title>
        <meta
          name="description"
          content={getExcerpt(blog.Content) || "Blog post"}
        />
      </Head>

      <Box minH="100vh" bg={bgColor}>
        {/* Banner with Breadcrumbs */}
        <Box bg={useColorModeValue("blue.50", "blue.900")} py={8}>
          <Container maxW="container.xl">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color={breadcrumbColor} />}
              mb={4}
            >
              <BreadcrumbItem>
                <NextLink href="/" passHref>
                  <BreadcrumbLink color={breadcrumbColor}>Home</BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <NextLink href="/blogs" passHref>
                  <BreadcrumbLink color={breadcrumbColor}>Blog</BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <Text color={breadcrumbColor}>{blog.Title}</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Box>

        {/* Main Content Area */}
        <Container maxW="container.xl" py={8}>
          <Grid templateColumns={{ base: "1fr", lg: "3fr 1fr" }} gap={8}>
            {/* Main Content Column */}
            <GridItem>
              <Stack spacing={8}>
                {/* Blog Header */}
                <Box>
                  <Heading size="2xl" color={headingColor} mb={4}>
                    {blog.Title}
                  </Heading>
                  <Stack direction="row" align="center" spacing={4} mb={6}>
                    <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
                      {new Date(blog.PublicationDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Text>
                    {blog.blog_categories?.length > 0 && (
                      <Stack direction="row" spacing={2}>
                        {blog.blog_categories.map((category, index) => (
                          <Tag key={index} size="md" colorScheme="blue" variant="subtle">
                            {category.name}
                          </Tag>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Box>

                {/* Featured Image */}
                {blog.FeaturedImage?.url && (
                  <Box overflow="hidden" borderRadius="xl" boxShadow="lg">
                    <Image
                      src={blog.FeaturedImage.url}
                      alt={blog.Title}
                      w="full"
                      h={{ base: "300px", md: "400px" }}
                      objectFit="cover"
                    />
                  </Box>
                )}

                {/* Blog Content */}
                <Box
                  bg={cardBg}
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="lg"
                >
                  <Stack spacing={4}>
                    {renderContent(blog.Content)}
                  </Stack>
                </Box>
              </Stack>
            </GridItem>

            {/* Sidebar */}
            <GridItem>
              <Box
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                position="sticky"
                top="24px"
              >
                <Heading size="md" mb={6} color={headingColor}>
                  Recent Posts
                </Heading>
                <Stack spacing={6} divider={<Box border="1px" borderColor="gray.200" />}>
                  {recentBlogs?.map((post) => (
                    <RecentPostCard key={post.id} post={post} />
                  ))}
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

// Update RecentPostCard component for better visual hierarchy
const RecentPostCard = ({ post }) => {
  const titleColor = useColorModeValue("gray.800", "white");
  const dateColor = useColorModeValue("gray.600", "gray.400");

  return (
    <LinkBox as="article">
      <Stack direction="row" spacing={4}>
        {post.FeaturedImage?.url && (
          <Image
            src={post.FeaturedImage.url}
            alt={post.Title}
            boxSize="100px"
            objectFit="cover"
            borderRadius="md"
          />
        )}
        <Stack spacing={2}>
          <NextLink href={`/blogs/${post.slug}`} passHref>
            <LinkOverlay>
              <Heading size="sm" color={titleColor} noOfLines={2}>
                {post.Title}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <Text fontSize="sm" color={dateColor}>
            {new Date(post.PublicationDate).toLocaleDateString()}
          </Text>
        </Stack>
      </Stack>
    </LinkBox>
  );
};
