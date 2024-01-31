import { Box } from '@chakra-ui/react';
import {useTranslations} from 'next-intl';
import { Hero, Services } from '@/components/_sections';
 
export default function Index() {
  const t = useTranslations('Index');
  
  return (
    <div>
      <Box as='section' id='home'>
        <Hero />
      </Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='servicios'>
        <Services />
      </Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='galeria'>galeria</Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='contacto'>contacto</Box>
    </div>
  );
}