import React, { ReactNode } from 'react';
import Providers from '@/providers';
import Header from '@/components/Header';
import { Box, Flex } from '@chakra-ui/react';
import '../globals.css';
import "@fontsource/lato";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400-italic.css"

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
