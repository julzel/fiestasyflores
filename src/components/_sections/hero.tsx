'use client';
import Image from 'next/image';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import Title from '@/components/Titles';
import QuickLinks from '@/components/QuickLinks';

const Flowers = () => (
  <Flex
    alignItems='center'
    justifyContent='center'
    position='absolute'
    zIndex={1}
    top={20}
    width='100%'
    maxWidth='100vw'
    overflow='hidden'
    pt={2}
  >
    <Image
      src='/images/hero/flores.png'
      alt='arreglo floral'
      width={220}
      height={220}
    />
  </Flex>
);

const MobileView = () => {
  return (
    <Box pt='175px'>
      <Flowers />
      <Box
        bgColor='brand.primary'
        color='brand.secondary'
        position='relative'
        p={[4, 8]}
      >
        <Title pt={16} px={2} pb={8} textAlign='center' fontStyle='italic' type='page'>
          Occaecat nisi id laboris ad veniam sint mollit.
          est.
        </Title>
        <Text pb={8} as='p' textAlign='center'>
          Id amet tempor sint cupidatat tempor Lorem quis elit labore pariatur
          mollit esse. Ipsum dolore excepteur tempor ea. Sit culpa qui et do
          incididunt in officia tempor labore officia.
        </Text>
        <QuickLinks />
      </Box>
    </Box>
  );
};

const DesktopView = () => {
  return (
    <Box pt='200px'>
      <Flowers />
      <Box position='relative'>
        <Grid
          bgColor='brand.primary'
          color='brand.secondary'
          display='grid'
          templateColumns='1fr 1fr 1fr'
          pb={[4, 8]}
        >
          <GridItem>Column 1</GridItem>
          <GridItem>Column 2</GridItem>
          <GridItem>Column 3</GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

const Hero = () => {
  const isMobileScreen = useIsMobileScreen();

  return isMobileScreen ? <MobileView /> : <DesktopView />;
};

export default Hero;
