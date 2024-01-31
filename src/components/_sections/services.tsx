'use client';
import { As, Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import {
  PiCakeThin,
  PiFlowerThin,
  PiMicrophoneStageThin,
} from 'react-icons/pi';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import Title from '@/components/Titles';

interface ListDetailsProps {
  icon: As;
}

const BackgroundBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      bgImage="url('/images/services-bg.png')"
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      {children}
    </Box>
  );
};

const ListDetails = ({ icon }: ListDetailsProps): JSX.Element => {
  return (
    <List spacing={3} pl={4} pt={4}>
      <ListItem>
        <ListIcon as={icon} color='brand.primary' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={icon} color='brand.primary' />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={icon} color='brand.primary' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={icon} color='brand.primary' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
};

const MobileView = () => {
  return (
    <BackgroundBox>
      <Box py={16} px={8} position='relative' zIndex={1}>
        <Box>
          <Title
            pb={8}
            px={2}
            textAlign='center'
            fontStyle='italic'
            type='section'
          >
            Nuestros servicios
          </Title>

          <Box bg='whiteAlpha.500' p={3} mb={3} borderRadius='5px'>
            <Title fontStyle='italic' type='subtitle' pb={2}>
              Maestro de ceremonias
            </Title>

            <ListDetails icon={PiMicrophoneStageThin} />
          </Box>
          <Box bg='whiteAlpha.500' p={3} mb={3} borderRadius='5px'>
            <Title fontStyle='italic' type='subtitle' pb={2}>
              Planeamiento de eventos
            </Title>

            <ListDetails icon={PiCakeThin} />
          </Box>
          <Box bg='whiteAlpha.500' p={3} mb={3} borderRadius='5px'>
            <Title fontStyle='italic' type='subtitle' pb={2}>
              Decoración Floral
            </Title>

            <ListDetails icon={PiFlowerThin} />
          </Box>
        </Box>
      </Box>
    </BackgroundBox>
  );
};

const DesktopView = () => {
  return (
    <BackgroundBox>
      <Box p={8} position='relative' zIndex={1}>
        Services DesktopView
      </Box>
    </BackgroundBox>
  );
};

const Services = () => {
  const isMobileScreen = useIsMobileScreen();

  return isMobileScreen ? <MobileView /> : <DesktopView />;
};

export default Services;
