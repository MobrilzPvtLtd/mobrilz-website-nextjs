import { useEffect, useState } from 'react';
import { 
  Breadcrumb as ChakraBreadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  useColorModeValue 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Breadcrumb = ({ items, 'aria-label': ariaLabel }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const color = useColorModeValue("gray.600", "gray.400");
  const activeColor = useColorModeValue("blue.600", "blue.200");
  const separatorColor = useColorModeValue("gray.400", "gray.600");

  if (!mounted) return null;

  return (
    <ChakraBreadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color={separatorColor} />}
      mb={8}
      aria-label={ariaLabel || "Breadcrumb"}
    >
      {items?.map((item, index) => (
        <BreadcrumbItem 
          key={index} 
          isCurrentPage={item.isCurrentPage}
          aria-current={item.isCurrentPage ? "page" : undefined}
        >
          {item.isCurrentPage ? (
            <BreadcrumbLink 
              color={activeColor}
              fontWeight="semibold"
              title={item.title}
              aria-label={item.description}
            >
              {item.name}
            </BreadcrumbLink>
          ) : (
            <NextLink href={item.path} passHref legacyBehavior>
              <BreadcrumbLink 
                color={color}
                _hover={{ color: activeColor }}
                title={item.title}
                aria-label={item.description}
              >
                {item.name}
              </BreadcrumbLink>
            </NextLink>
          )}
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;