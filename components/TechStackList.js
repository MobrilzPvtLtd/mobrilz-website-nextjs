import { VStack, HStack, Box, Text, Tooltip, Flex, Center } from '@chakra-ui/react';

export const TechStackSection = ({
    title,
    items,
    showLabel = true,
    width = "80%",
    labelProps = {},
    showConnector = false
}) => {
    return (
        <Box position="relative" >
            {showConnector && (
                <Box
                    position="absolute"
                    top="-12px"
                    left="56%"
                    height="29px"
                    width="3px"
                    borderLeft="2px"
                    borderStyle="dashed" 
                    opacity={0.3}
                    zIndex={0}
                    p={4}
                />
            )}

            <Flex py={title === "API" ? 0 : 3}>
                {showLabel && (
                    <Center mr={2}>
                        <Box
                            transform="rotate(-90deg)"
                            width="24px"
                            height= "min-content"
                            whiteSpace="nowrap"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            zIndex={1}
                        >
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                color="blue.300"
                                textAlign="center"
                                transform="translateX(-8%)"
                                {...labelProps}
                            >
                                {title}
                            </Text>
                        </Box>
                    </Center>
                )}

                <Box
                    bg="white"
                    p={0}
                    border="2px solid rgba(149, 180, 206, 0.6)"
                    boxShadow='0 2px 3px rgba(149, 180, 206, 0.6)'
                    borderRadius="lg"
                    overflow="hidden"
                    width={width}
                    zIndex={2}
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: '0 3px 15px rgba(0, 0, 255, 0.5)'
                    }}
                >
                    <TechStackList items={items} />
                </Box>
            </Flex>
        </Box>
    );
};

export default function TechStackList({ items }) {
    return (
        <VStack spacing={0} align="stretch">
            {items.map((tech, index) => (
                <Tooltip
                    key={index}
                    background='purple.500'
                    label={
                        <Box maxW="190px" minH="-moz-fit-content" display="flex" alignItems="center">
                            <VStack spacing={2}>
                                <Text
                                    fontSize="sm"
                                    color="gray.600"
                                    textColor='white'
                                    textAlign="center"
                                    lineHeight="1.4"
                                >
                                    {tech.description}
                                </Text>
                            </VStack>
                        </Box>
                    }
                    placement="right"
                    bg="white"
                    p={3}
                    borderRadius="md"
                    boxShadow="lg"
                    hasArrow
                    arrowSize={8}
                    openDelay={200}
                    closeDelay={200}
                >
                    <HStack
                        p={2}
                        bg="#dfeffc"
                        borderTopRadius={index === 0 ? "lg" : "none"}
                        borderBottomRadius={index === items.length - 1 ? "lg" : "none"}
                        borderBottom={index === items.length - 1 ? "none" : "1px solid"}
                        borderColor="gray.300"
                        pl={8}
                        mb={index === items.length - 1 ? "none" : "1.1px "}
                        align="center"
                        spacing={3}
                        cursor="pointer"
                        transition="all 0.2s"
                        role="group"
                        _hover={{
                            bg: "#fff"
                        }}
                    >
                        <Box
                            color={tech.color}
                            width="-moz-fit-content"
                            textAlign="center"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={1}
                        >
                            {tech.icon()}
                        </Box>
                        <Text
                           fontSize="base" 
                           textColor="blue.500" 
                           textAlign="center"
                           position="relative"
                           _after={{
                               content: '""',
                               position: 'absolute',
                               bottom: -0.5,
                               left: 0,
                               width: '0%',
                               height: '1px', 
                               backgroundColor: 'blue.500',
                               transition: 'width 0.3s ease'
                           }}
                            _groupHover={{
                                _after: {
                                    width: '100%'
                                }
                            }}
                        >
                            {tech.name}
                        </Text>
                    </HStack>
                </Tooltip>
            ))}
        </VStack>
    );
}