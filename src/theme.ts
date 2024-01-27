import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Your brand colors
const colors = {
  brand: {
    primary: '#051e1c', // Dark green
    secondary: '#fffdf1', // Off-white
    primaryHover: '#043d3a', // Darker shade of primary for hover
    secondaryHover: '#cccac0', // Lighter shade of secondary for hover
  },
  text: {
    primary: '#30312c', // Dark grey
    secondary: '#cbd3d1', // Light grey
  },
};

// Theme configuration for color modes
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Extending the theme
const theme = extendTheme({
  ...config,
  colors: {
    ...colors, // Spreading your brand colors directly into the theme's colors
  },
  components: {
    Button: {
      variants: {
        solid: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          bg: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
          color: colorMode === 'dark' ? 'text.primary' : 'brand.secondary',
          _hover: {
            bg: 'brand.primaryHover',
          },
        }),
        secondary: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          bg: 'brand.secondaryHover',
          color: colorMode === 'dark' ? 'text.primary' : 'brand.primary',
          _hover: {
            bg: 'brand.secondaryHover',
          },
        }),
        outline: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          bg: 'transparent',
          borderColor: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
          color: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
          _hover: {
            bg: 'brand.primaryHover',
          },
        }),
        link: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          color: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
          _hover: {
            color: 'brand.primaryHover',
          },
        }),
      },
    },
    Input: {
      baseStyle: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
        field: {
          color: colorMode === 'dark' ? 'text.secondary' : 'text.primary',
          _placeholder: {
            color:  colorMode === 'dark' ?  'text.secondaryHover' : 'text.secondaryHover',
          },
        },
      }),
      variants: {
        outline: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          field: {
            borderColor: colorMode === 'dark' ? 'blackalpha.900' : 'brand.primary',
            _hover: {
              borderColor: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
            },
            _focus: {
              borderColor: colorMode === 'dark' ? 'brand.primary' : 'brand.primary',
              boxShadow: `0 0 0 1px ${colors.brand.secondary}`,
            },
          },
        }),
        filled: {
          field: {
            bg: 'brand.secondary',
            borderColor: 'transparent',
            _hover: {
              bg: 'brand.secondaryHover',
            },
            _focus: {
              bg: 'brand.secondaryHover',
            },
          },
        },
      },
      defaultProps: {
        variant: 'outline',
      },
    },
  },
  styles: {
    global: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
      body: {
        bg: colorMode === 'dark' ? 'brand.primary' : 'brand.secondary',
        color: colorMode === 'dark' ? 'brand.secondary' : 'brand.primary',
      },
    }),
  },
});

export default theme;
