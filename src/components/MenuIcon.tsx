import { CiMenuBurger } from 'react-icons/ci';
import { Text } from '@chakra-ui/react';
import { IFontSize } from '@/types';

interface MenuIconProps {
  fontSize?: IFontSize;
}

const MenuIcon: React.FC<MenuIconProps> = ({ fontSize = 'lg' }) => {
  return (
    <Text fontSize={fontSize}>
      <CiMenuBurger />
    </Text>
  );
};

export default MenuIcon;
