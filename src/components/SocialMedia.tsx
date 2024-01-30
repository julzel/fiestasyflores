import { Flex, Box, Text } from '@chakra-ui/react';
import { SiTiktok, SiInstagram, SiFacebook } from 'react-icons/si';

type SocialMediaProps = {
  flow?: 'horizontal' | 'vertical';
};

const SocialMedia: React.FC<SocialMediaProps> = ({ flow = 'horizontal' }) => {
  const isHorizontal = flow === 'horizontal';
  const flexFlow = isHorizontal ? 'row' : 'column';

  return (
    <Flex flexFlow={flexFlow}>
      <Text fontSize={'lg'}>
        <SiFacebook />
      </Text>
      {isHorizontal && <Box w={4} />}
      <Text fontSize={'lg'}>
        <SiInstagram />
      </Text>
      {isHorizontal && <Box w={4} />}
      <Text fontSize={'lg'}>
        <SiTiktok />
      </Text>
    </Flex>
  );
};

export default SocialMedia;
