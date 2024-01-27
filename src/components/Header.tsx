'use client';
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '@/components/Logo';

const linkItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

const Header = () => {
  const bgColor = useColorModeValue('brand.secondary', 'brand.primary');
  const color = useColorModeValue('brand.primary', 'text.secondary');
  return (
    <header>
      <Flex
        bg={bgColor}
        alignItems='center'
        w='100%'
        height='60px'
        sx={{
          position: 'fixed',
          top: '0',
          zIndex: 'sticky',
          boxShadow: '0 0 1px gray',
        }}
      >
        <Box position='absolute' left={2} top={-4}>
          <Logo />
        </Box>
        <Flex flex={1} justifyContent='center' as='nav'>
          {linkItems.map((item) => (
            <Link
              color={color}
              key={item.name}
              textTransform='uppercase'
              px={2}
              href={item.href}
              variant='link'
              as='a'
            >
              {item.name}
            </Link>
          ))}
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
