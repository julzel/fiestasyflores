import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Providers from '@/providers';
import Header from '@/components/Header';
import 'keen-slider/keen-slider.min.css'
import "@fontsource/playfair-display/400-italic.css"
import "@fontsource/playfair-display";
import "@fontsource/lato";
import '../globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html
      lang={locale}
    >
      <body>
        <Providers>
          <Header />
          <Flex flexFlow='column' as='main' minH='100dvh' pt='60px'>
            <Box flex={1}>{children}</Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
