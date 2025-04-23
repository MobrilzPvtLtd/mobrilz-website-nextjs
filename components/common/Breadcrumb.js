import { 
  Breadcrumb as ChakraBreadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  useColorModeValue 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const activeColor = useColorModeValue("brand.600", "brand.200");
  const separatorColor = useColorModeValue("gray.400", "gray.600");

  return (
    <ChakraBreadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color={separatorColor} />}
      mb={4}
    >
      <BreadcrumbItem>
        <Link href="/" passHref>
          <BreadcrumbLink 
            color={color}
            _hover={{ color: activeColor }}
            title="Home"
          >
            Home
          </BreadcrumbLink>
        </Link>
      </BreadcrumbItem>

      {items.map((item, index) => (
        <BreadcrumbItem 
          key={index} 
          isCurrentPage={index === items.length - 1}
        >
          {index === items.length - 1 ? (
            <BreadcrumbLink 
              color={activeColor}
              fontWeight="semibold"
              title={item.title || item.name}
            >
              {item.name}
            </BreadcrumbLink>
          ) : (
            <Link href={item.path} passHref>
              <BreadcrumbLink 
                color={color}
                _hover={{ color: activeColor }}
                title={item.title || item.name}
              >
                {item.name}
              </BreadcrumbLink>
            </Link>
          )}
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;