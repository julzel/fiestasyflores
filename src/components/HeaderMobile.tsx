import { Box, Flex, Divider, useColorModeValue } from '@chakra-ui/react';

import MenuIcon from '@/components/MenuIcon';
import ResponsiveLogo from '@/components/ResponsiveLogo';
import SocialMedia from '@/components/SocialMedia';

const MobileHeader = () => {
  const bgColor = useColorModeValue('brand.secondary', 'brand.primary');

  return (
    <Flex
      p={4}
      as='header'
      h='60px'
      position='fixed'
      zIndex={9}
      w='100%'
      justifyContent='space-between'
      boxShadow={'0 0 1px gray'}
      bg={bgColor}
    >
      <Box transform='translateY(-16px)'>
        <ResponsiveLogo />
      </Box>
      <Flex alignItems='center'>
        <SocialMedia />
        <Divider marginX={4} orientation='vertical' />
        <MenuIcon fontSize='3xl' />
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
