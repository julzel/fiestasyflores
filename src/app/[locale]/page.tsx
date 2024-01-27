import { Box } from '@chakra-ui/react';
import {useTranslations} from 'next-intl';
import { Hero } from '@/app/[locale]/_sections';
 
export default function Index() {
  const t = useTranslations('Index');
  
  return (
    <div>
      <Box as='section' minH='calc(100dvh - 60px)' id='home'>
        <Hero />
      </Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='servicios'>servicios</Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='galeria'>galeria</Box>
      <Box as='section' minH='calc(100dvh - 60px)' id='contacto'>contacto</Box>
    </div>
  );
}