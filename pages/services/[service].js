// Update CTA section in service detail pages
<Box py={20} bg={useColorModeValue("blue.600", "blue.900")} color="white">
  <Container maxW="container.xl">
    <Stack spacing={8} align="center" textAlign="center">
      <Heading size="xl">Ready to Start Your Project?</Heading>
      <Text fontSize="xl" maxW="2xl">
        Let's discuss how we can help transform your business
      </Text>
      <NextLink href="/get-quote" passHref>
        <Button
          size="lg"
          bg="white"
          color="blue.600"
          _hover={{ bg: "gray.100" }}
          rightIcon={<ArrowForwardIcon />}
        >
          Get a Free Quote
        </Button>
      </NextLink>
    </Stack>
  </Container>
</Box>