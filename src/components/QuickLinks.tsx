import { Center, Flex, Text } from '@chakra-ui/react';
import {
  PiImagesThin,
  PiFlowerTulipThin,
  PiEnvelopeThin,
} from 'react-icons/pi';

interface QuickLinkItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const QuickLinkItem: React.FC<QuickLinkItemProps> = ({ icon, label, link }) => (
  <Center border={'1px solid gray'} borderRadius='50px' p={3} w='90px' h='90px'>
    <a href={link}>
      <Text fontSize='2xl' pb={1} sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {icon}
      </Text>
      <Text fontSize='xs' textTransform='uppercase'>
        {label}
      </Text>
    </a>
  </Center>
);

const QuickLinks = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' px={4} pb={8} transform='scale(0.85)'>
      <QuickLinkItem
        icon={<PiFlowerTulipThin />}
        label='Servicios'
        link='#servicios'
      />
      <QuickLinkItem icon={<PiImagesThin />} label='Galeria' link='#galeria' />
      <QuickLinkItem
        icon={<PiEnvelopeThin />}
        label='Contacto'
        link='#contacto'
      />
    </Flex>
  );
};

export default QuickLinks;
