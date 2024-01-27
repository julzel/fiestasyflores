import { Box, Grid, GridItem } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box pt='200px'>
      <Box>
      <Grid bgColor='brand.primary' display='grid' templateColumns='1fr 1fr 1fr' pb={[4, 8]}>
        <GridItem bg='red.500'>Column 1</GridItem>
        <GridItem bg='blue.500'>Column 2</GridItem>
        <GridItem bg='green.500'>Column 3</GridItem>
      </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
