import Image from 'next/image';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

const Flowers = () => (
  <Flex
    alignItems='center'
    justifyContent='space-between'
    overflow='hidden'
    position='absolute'
    top={0}
    width='100vw'
  >
    <Flex>
      <Image
        style={{ transform: 'translate(-60px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
      <Image
        style={{ transform: 'translate(-160px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
      <Image
        style={{ transform: 'translate(-260px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
    </Flex>
    <Flex>
      <Image
        style={{ transform: 'translate(260px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
      <Image
        style={{ transform: 'translate(160px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
      <Image
        style={{ transform: 'translate(60px, 100px)' }}
        src='/images/hero/flores.png'
        alt='arreglo floral'
        width={300}
        height={300}
      />
    </Flex>
  </Flex>
);

const Hero = () => {
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

export default Hero;
