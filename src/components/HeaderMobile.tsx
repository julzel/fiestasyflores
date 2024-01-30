import { Box, Flex, Divider } from '@chakra-ui/react';

import MenuIcon from '@/components/MenuIcon';
import ResponsiveLogo from '@/components/ResponsiveLogo';
import SocialMedia from '@/components/SocialMedia';

const MobileHeader = () => {
  return (
    <Flex p={4} as='header' h='60px' position='fixed' zIndex={9} w='100%' justifyContent='space-between'>
      <Box transform='translateY(-16px)'>
        <ResponsiveLogo />
      </Box>
      <Flex alignItems='center'>
        <SocialMedia />
        <Divider marginX={4} orientation='vertical' />
        <MenuIcon fontSize='3xl'  />
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
