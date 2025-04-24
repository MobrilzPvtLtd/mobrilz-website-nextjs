import { 
  Box, Button, Menu, MenuButton, MenuList, SimpleGrid, 
  Flex, Text, Icon, HStack, VStack, useColorModeValue,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useDisclosure,
  IconButton, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { 
  FaCode, FaMobile, FaCloud, FaCogs, 
  FaPalette, FaChartLine, FaIndustry,
  FaBuilding, FaHandshake, FaProjectDiagram,
  FaUsers, FaStar, FaHeadset
} from 'react-icons/fa';
import Link from 'next/link';
import NextLink from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const MenuItem = ({ icon, title, description, href = '#', ...props }) => {
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  
  return (
    <NextLink href={href} passHref legacyBehavior>
      <HStack 
        as="a"
        p={3} 
        spacing={4} 
        role="menuitem"
        tabIndex={0}
        aria-label={title}
        borderRadius="md"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          bg: hoverBg,
          transform: 'translateX(4px)'
        }}
        {...props}
      >
        <Icon 
          as={icon} 
          boxSize={5} 
          color="brand.500" 
          _dark={{ color: 'brand.200' }} 
        />
        <VStack align="start" spacing={0}>
          <Text 
            fontWeight="500"
            color="gray.800"
            _dark={{ color: 'white' }}
          >
            {title}
          </Text>
          {description && (
            <Text 
              fontSize="sm" 
              color="gray.600" 
              _dark={{ color: 'gray.400' }}
            >
              {description}
            </Text>
          )}
        </VStack>
      </HStack>
    </NextLink>
  );
};

const CategoryTitle = ({ children }) => (
  <Text 
    fontSize="sm" 
    fontWeight="bold" 
    mb={4} 
    color={useColorModeValue('gray.700', 'gray.100')}
    textTransform="uppercase"
  >
    {children}
  </Text>
);

const MegaMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuListStyles = {
    p: 6,
    borderRadius: 'xl',
    boxShadow: useColorModeValue(
      '0 4px 6px rgba(0,0,0,0.1)',
      '0 4px 6px rgba(0,0,0,0.4)'
    ),
    bg: useColorModeValue('white', 'gray.800'),
    border: '1px solid',
    borderColor: useColorModeValue('gray.100', 'gray.700'),
    _hover: {
      borderColor: useColorModeValue('gray.200', 'gray.600')
    },
    minW: { base: "90vw", md: "520px", lg: "780px" },
    maxW: { base: "95vw", md: "none" },
  };

  const menuButtonStyles = {
    variant: 'ghost',
    size: 'sm',
    color: useColorModeValue('gray.700', 'white'),
    _hover: {
      bg: useColorModeValue('gray.100', 'whiteAlpha.200')
    },
    _active: {
      bg: useColorModeValue('gray.200', 'whiteAlpha.300')
    }
  };

  const MobileNavItem = ({ href, children, items }) => {
    if (items) {
      return (
        <AccordionItem border="none">
          <AccordionButton py={4}>
            <Box flex="1" textAlign="left" fontWeight="500">
              {children}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={3}>
              {items.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Text 
                    py={2}
                    px={4}
                    borderRadius="md"
                    _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
                  >
                    {item.title}
                  </Text>
                </Link>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      );
    }

    return (
      <Link href={href}>
        <Box
          py={4}
          px={4}
          fontWeight="500"
          borderBottom="1px"
          borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
          _hover={{ bg: useColorModeValue('gray.50', 'whiteAlpha.100') }}
        >
          {children}
        </Box>
      </Link>
    );
  };

  const DesktopMenu = () => (
    <Flex 
      gap={0.5} 
      justify="flex-end" 
      flex={1} 
      mx={4}
      display={{ base: 'none', lg: 'flex' }}
    >
      <Link href="/">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color={useColorModeValue('gray.700', 'white')}
          _hover={{
            bg: useColorModeValue('gray.100', 'whiteAlpha.200')
          }}
          _active={{
            bg: useColorModeValue('gray.200', 'whiteAlpha.300')
          }}
        >
          Home
        </Button>
      </Link>

      <Menu>
        <MenuButton 
          as={Button} 
          {...menuButtonStyles}
          rightIcon={<ChevronDownIcon />}
        >
          Services
        </MenuButton>
        <MenuList {...menuListStyles}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }}>
            <Box>
              <CategoryTitle>Development</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaCode}
                  title="Web Development"
                  description="Custom websites & web applications"
                  href="/services/web-development"
                />
                <MenuItem 
                  icon={FaMobile}
                  title="Mobile Apps"
                  description="iOS & Android development"
                  href="/services/mobile-apps"
                />
                <MenuItem 
                  icon={FaCloud}
                  title="Cloud Solutions"
                  description="Scalable cloud infrastructure"
                  href="/services/cloud-solutions"
                />
                <MenuItem 
                  icon={FaCogs}
                  title="Custom Software"
                  description="Tailored business solutions"
                  href="/services/custom-software"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Design</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaPalette}
                  title="UI/UX Design"
                  description="User-centered interfaces"
                  href="/services/ui-ux-design"
                />
                <MenuItem 
                  icon={FaChartLine}
                  title="Branding"
                  description="Brand identity & strategy"
                  href="/services/branding"
                />
                <MenuItem 
                  icon={FaPalette}
                  title="Graphics Design"
                  description="Visual content creation"
                  href="/services/graphics-design"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Solutions</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaCogs}
                  title="DevOps"
                  description="Automated development ops"
                  href="/services/devops"
                />
                <MenuItem 
                  icon={FaCloud}
                  title="API Integration"
                  description="Seamless system connections"
                  href="/services/api-integration"
                />
                <MenuItem 
                  icon={FaHandshake}
                  title="Maintenance"
                  description="Ongoing system support"
                  href="/services/maintenance"
                />
              </VStack>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          as={Button} 
          {...menuButtonStyles}
          rightIcon={<ChevronDownIcon />}
        >
          Industry
        </MenuButton>
        <MenuList {...menuListStyles}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }}>
            <Box>
              <CategoryTitle>Sectors</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaIndustry}
                  title="Manufacturing"
                  description="Smart factory solutions"
                  href="/industries/manufacturing"
                />
                <MenuItem 
                  icon={FaBuilding}
                  title="Finance"
                  description="Fintech innovations"
                  href="/industries/finance"
                />
                <MenuItem 
                  icon={FaHeadset}
                  title="Healthcare"
                  description="Digital health systems"
                  href="/industries/healthcare"
                />
              </VStack>
            </Box>
            <Box>
              <CategoryTitle>Solutions</CategoryTitle>
              <VStack align="stretch" spacing={2}>
                <MenuItem 
                  icon={FaChartLine}
                  title="E-Commerce"
                  description="Online retail platforms"
                  href="/industries/e-commerce"
                />
                <MenuItem 
                  icon={FaHandshake}
                  title="Consulting"
                  description="Business technology advice"
                  href="/industries/consulting"
                />
                <MenuItem 
                  icon={FaBuilding}
                  title="Retail"
                  description="Point of sale systems"
                  href="/industries/retail"
                />
              </VStack>
            </Box>
          </SimpleGrid>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          as={Button} 
          {...menuButtonStyles}
          rightIcon={<ChevronDownIcon />}
        >
          Our Work
        </MenuButton>
        <MenuList {...menuListStyles}>
          <Box>
            <CategoryTitle>Portfolio</CategoryTitle>
            <VStack align="stretch" spacing={2}>
              <MenuItem 
                icon={FaProjectDiagram}
                title="Case Studies"
                description="Success stories"
                href="/work/case-studies"
              />
              <MenuItem 
                icon={FaCogs}
                title="Projects"
                description="Recent work"
                href="/work/projects"
              />
              <MenuItem 
                icon={FaUsers}
                title="Clients"
                description="Who we work with"
                href="/work/clients"
              />
              <MenuItem 
                icon={FaStar}
                title="Testimonials"
                description="Client feedback"
                href="/work/testimonials"
              />
            </VStack>
          </Box>
        </MenuList>
      </Menu>

      <Link href="/packages">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color={useColorModeValue('gray.700', 'white')}
          _hover={{
            bg: useColorModeValue('gray.100', 'whiteAlpha.200')
          }}
          _active={{
            bg: useColorModeValue('gray.200', 'whiteAlpha.300')
          }}
        >
          Packages
        </Button>
      </Link>
      <Link href="/support">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color={useColorModeValue('gray.700', 'white')}
          _hover={{
            bg: useColorModeValue('gray.100', 'whiteAlpha.200')
          }}
          _active={{
            bg: useColorModeValue('gray.200', 'whiteAlpha.300')
          }}
        >
          Support
        </Button>
      </Link>
      <Link href="/about">
        <Button 
          as="span" 
          variant="ghost" 
          size="sm"
          color={useColorModeValue('gray.700', 'white')}
          _hover={{
            bg: useColorModeValue('gray.100', 'whiteAlpha.200')
          }}
          _active={{
            bg: useColorModeValue('gray.200', 'whiteAlpha.300')
          }}
        >
          About
        </Button>
      </Link>
    </Flex>
  );

  const MobileMenu = () => (
    <Box display={{ base: 'block', lg: 'none' }}>
      <ThemeSwitcher />
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon boxSize={6} />}
        variant="ghost"
        onClick={onOpen}
      />
      
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowToggle>
              <MobileNavItem href="/">Home</MobileNavItem>
              
              <MobileNavItem items={[
                { href: '/services/web-development', title: 'Web Development' },
                { href: '/services/mobile-apps', title: 'Mobile Apps' },
                { href: '/services/cloud-solutions', title: 'Cloud Solutions' },
                { href: '/services/custom-software', title: 'Custom Software' },
              ]}>
                Services
              </MobileNavItem>

              <MobileNavItem items={[
                { href: '/industries/manufacturing', title: 'Manufacturing' },
                { href: '/industries/finance', title: 'Finance' },
                { href: '/industries/healthcare', title: 'Healthcare' },
              ]}>
                Industry
              </MobileNavItem>

              <MobileNavItem items={[
                { href: '/work/case-studies', title: 'Case Studies' },
                { href: '/work/projects', title: 'Projects' },
                { href: '/work/clients', title: 'Clients' },
                { href: '/work/testimonials', title: 'Testimonials' },
              ]}>
                Our Work
              </MobileNavItem>

              <MobileNavItem href="/packages">Packages</MobileNavItem>
              <MobileNavItem href="/support">Support</MobileNavItem>
              <MobileNavItem href="/about">About</MobileNavItem>
            </Accordion>

            {/* Add Theme Switcher and Get A Quote button at the bottom */}
            <Box 
              p={10}  
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              mt={4}
            >
              <Flex 
                direction="column" 
                gap={4} 
                align="center"
              > 
                <Button 
                  colorScheme="brand"
                  size="md"
                  w="60"
                >
                  Get A Quote
                </Button>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );

  return (
    <Flex justify="flex-end" align="center" flex={1}>
      <DesktopMenu />
      <MobileMenu />
    </Flex>
  );
};

export default MegaMenu;