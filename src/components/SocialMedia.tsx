import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { SiTiktok, SiInstagram, SiFacebook } from 'react-icons/si';

type SocialMediaProps = {
  flow?: 'horizontal' | 'vertical';
};

const SocialMedia: React.FC<SocialMediaProps> = ({ flow = 'horizontal' }) => {
  const isHorizontal = flow === 'horizontal';
  const flexFlow = isHorizontal ? 'row' : 'column';
  const color = useColorModeValue('brand.primary', 'brand.secondary');

  return (
    <Flex flexFlow={flexFlow}>
      <Text color={color} fontSize={'lg'}>
        <SiFacebook />
      </Text>
      {isHorizontal && <Box w={4} />}
      <Text color={color} fontSize={'lg'}>
        <SiInstagram />
      </Text>
      {isHorizontal && <Box w={4} />}
      <Text color={color} fontSize={'lg'}>
        <SiTiktok />
      </Text>
    </Flex>
  );
};

export default SocialMedia;
