import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Carousel from '@/components/Carousel';
import Title from '@/components/Titles';

const imageContainerStyle = {
  position: 'relative',
  width: '100%' /* Full width of the slide */,
  height: 0,
  paddingBottom: '75%' /* Adjust for aspect ratio */,
  overflow: 'hidden',
};

const GalleryItem = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <Box key='slide-g-1' sx={imageContainerStyle}>
    {children}
    <Title
      bg='rgba(0, 0, 0, 0.5)'
      color='brand.secondary'
      textTransform='uppercase'
      position='absolute'
      left='50%'
      top='50%'
      p={2}
      type='subtitle'
      transform='translate(-50%, -50%)'
    >
      {title || 'default'}
    </Title>
  </Box>
);

const Gallery = () => {
  const slides = [
    <GalleryItem key='slide-g-1' title='Eventos'>
      <Image
        src='/images/gallery/image1.jpg'
        alt='Image 1'
        layout='fill'
        objectFit='cover'
      />
    </GalleryItem>,
    <GalleryItem key='slide-g-2' title='Arreglos'>
      <Image
        src='/images/gallery/image2.jpg'
        alt='Image 2'
        layout='fill'
        objectFit='cover'
      />
    </GalleryItem>,
    <GalleryItem key='slide-g-3' title='Decoración'>
      <Image
        src='/images/gallery/image3.jpg'
        alt='Image 3'
        layout='fill'
        objectFit='cover'
      />
    </GalleryItem>,
    // Add as many slides as you like
  ];

  return (
    <Box py={16} px={8}>
      <Title pb={8} textAlign='center' type='section'>
        Galería
      </Title>
      <Box pt={4} />
      <Box>
        <Carousel slides={slides} enableArrowControls={true} />
      </Box>
    </Box>
  );
};

export default Gallery;
