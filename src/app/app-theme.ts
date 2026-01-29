import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * Primary palette derived from #08274b (navy).
 * You can tweak these shades anytime; 500 is the “main” brand color.
 */
export const PvsBluePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#e7ebf1',
      100: '#cfd7de',
      200: '#b6c4ce',
      300: '#9eb0bd',
      400: '#8493a5',
      500: '#08274b', // brand
      600: '#072343',
      700: '#061f3c',
      800: '#051b34',
      900: '#04172d',
      950: '#041426'
    },

    // Define light/dark token behavior (colorScheme is the supported pattern for dark mode). :contentReference[oaicite:1]{index=1}
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.500}, transparent 88%)',
          focusBackground: 'color-mix(in srgb, {primary.500}, transparent 80%)',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.200}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.100}',
          activeColor: '{primary.50}'
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.200}, transparent 80%)',
          focusBackground: 'color-mix(in srgb, {primary.200}, transparent 70%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});

export const PvsTheme = {
  preset: PvsBluePreset,
  options: {
    // Toggle dark mode by adding/removing this class on the document root. :contentReference[oaicite:2]{index=2}
    darkModeSelector: '.p-dark'
  }
};
