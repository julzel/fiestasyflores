import { Box } from '@chakra-ui/react';
import {useTranslations} from 'next-intl';
import { Hero, Services, Gallery } from '@/components/_sections';
 
export default function Index() {
  const t = useTranslations('Index');
  
  return (
    <div>
      <Box as='section' id='home'>
        <Hero />
      </Box>
      <Box as='section' id='servicios'>
        <Services />
      </Box>
      <Box as='section' id='galeria'>
        <Gallery />
      </Box>
      <Box as='section' minH='60px' id='contacto'>contacto</Box>
    </div>
  );
}