import { ReactNode } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

enum TitleType {
  Banner = 'banner',
  Page = 'page',
  Section = 'section',
  Subtitle = 'subtitle',
  Subtitle2 = 'subtitle-2',
}

interface TitleProps extends HeadingProps {
  type: string;
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ type, children, ...props }) => {
  let size: HeadingProps['size'];
  let as: React.ElementType;

  switch (type) {
    case TitleType.Banner:
      size = '3xl';
      as = 'h2';
      break;
    case TitleType.Page:
      size = '2xl';
      as = 'h1';
      break;
    case TitleType.Section:
      size = 'xl';
      as = 'h2';
      break;
    case TitleType.Subtitle:
      size = 'l';
      as = 'h3';
      break;
    case TitleType.Subtitle2:
      size = 'md';
      as = 'h4';
      break;
    default:
      size = 'sm';
      as = 'h5';
  }

  return (
    <Heading as={as} size={size} {...props}>
      {children}
    </Heading>
  );
};

export default Title;
