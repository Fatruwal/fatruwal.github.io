/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      colors: {
        // Primary colors
        primary: {
          '25': 'var(--color-primary-25)',
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
          DEFAULT: 'var(--color-primary-500)',
          'foreground-100': 'var(--color-primary-foreground-100)',
          'foreground-200': 'var(--color-primary-foreground-200)',
          'foreground-300': 'var(--color-primary-foreground-300)',
          'foreground-400': 'var(--color-primary-foreground-400)',
          'foreground-500': 'var(--color-primary-foreground-500)',
          'foreground': 'var(--color-primary-foreground-100)',
        },
        // Secondary colors
        secondary: {
          '50': 'var(--color-secondary-50)',
          '100': 'var(--color-secondary-100)',
          '200': 'var(--color-secondary-200)',
          '300': 'var(--color-secondary-300)',
          '400': 'var(--color-secondary-400)',
          '500': 'var(--color-secondary-500)',
          '600': 'var(--color-secondary-600)',
          '700': 'var(--color-secondary-700)',
          '800': 'var(--color-secondary-800)',
          '900': 'var(--color-secondary-900)',
          DEFAULT: 'var(--color-secondary-500)',
          'foreground-100': 'var(--color-secondary-foreground-100)',
          'foreground-200': 'var(--color-secondary-foreground-200)',
          'foreground-300': 'var(--color-secondary-foreground-300)',
          'foreground-400': 'var(--color-secondary-foreground-400)',
          'foreground-500': 'var(--color-secondary-foreground-500)',
          'foreground': 'var(--color-secondary-foreground-500)',
        },
        // CTA Primary colors
        'cta-primary': {
          '50': 'var(--color-cta-primary-50)',
          '100': 'var(--color-cta-primary-100)',
          '200': 'var(--color-cta-primary-200)',
          '300': 'var(--color-cta-primary-300)',
          '400': 'var(--color-cta-primary-400)',
          '500': 'var(--color-cta-primary-500)',
          '600': 'var(--color-cta-primary-600)',
          '700': 'var(--color-cta-primary-700)',
          '800': 'var(--color-cta-primary-800)',
          '900': 'var(--color-cta-primary-900)',
          DEFAULT: 'var(--color-cta-primary-500)',
        },
        // CTA Secondary colors
        'cta-secondary': {
          '50': 'var(--color-cta-secondary-50)',
          '100': 'var(--color-cta-secondary-100)',
          '200': 'var(--color-cta-secondary-200)',
          '300': 'var(--color-cta-secondary-300)',
          '400': 'var(--color-cta-secondary-400)',
          '500': 'var(--color-cta-secondary-500)',
          '600': 'var(--color-cta-secondary-600)',
          '700': 'var(--color-cta-secondary-700)',
          '800': 'var(--color-cta-secondary-800)',
          '900': 'var(--color-cta-secondary-900)',
          DEFAULT: 'var(--color-cta-secondary-500)',
        },
        // Light support colors
        'light-support': {
          '50': 'var(--color-light-support-50)',
          '100': 'var(--color-light-support-100)',
          '200': 'var(--color-light-support-200)',
          '300': 'var(--color-light-support-300)',
          '400': 'var(--color-light-support-400)',
          '500': 'var(--color-light-support-500)',
          '600': 'var(--color-light-support-600)',
          '700': 'var(--color-light-support-700)',
          '800': 'var(--color-light-support-800)',
          '900': 'var(--color-light-support-900)',
          DEFAULT: 'var(--color-light-support-500)',
        },
        // Dark support colors
        'dark-support': {
          '50': 'var(--color-dark-support-50)',
          '100': 'var(--color-dark-support-100)',
          '200': 'var(--color-dark-support-200)',
          '300': 'var(--color-dark-support-300)',
          '400': 'var(--color-dark-support-400)',
          '500': 'var(--color-dark-support-500)',
          '600': 'var(--color-dark-support-600)',
          '700': 'var(--color-dark-support-700)',
          '800': 'var(--color-dark-support-800)',
          '900': 'var(--color-dark-support-900)',
          DEFAULT: 'var(--color-dark-support-500)',
        },
        'background': '#ffffff',
        'popover': '#ffffff',
        // Misc support colors
        'link': 'var(--color-misc-support-link)',
        'disabled': 'var(--color-misc-support-disabled)',
        'black': 'var(--color-misc-support-black)',
        'white': 'var(--color-misc-support-white)',
        'flag-1': 'var(--color-misc-support-flag-1)',
        'flag-2': 'var(--color-misc-support-flag-2)',
        'flag-3': 'var(--color-misc-support-flat-3)',
      },
      // Add gradient background
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to bottom, #55EDF9, #0074E9)',
      },
      // Typography scale
      fontSize: {
        'h1': 'var(--h1-font-size)',
        'h2': 'var(--h2-font-size)',
        'h3': 'var(--h3-font-size)',
        'h4': 'var(--h4-font-size)',
        'h5': 'var(--h5-font-size)',
        'lg': 'var(--text-lg)',
        'base': 'var(--text-md)',
        'sm': 'var(--text-sm)',
        'xs': 'var(--text-xs)',
        'xxs': 'var(--text-xxs)',
      },
      // Font families
      fontFamily: {
        sans: [
          'Roboto',
          'sans-serif'
        ],
        roboto: [
          'Roboto',
          'sans-serif'
        ]
      },
      // Border radius
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'pill': 'var(--border-radius-pill)',
      },
      // Border width
      borderWidth: {
        'hairline': 'var(--border-width-hairline)',
        'thin': 'var(--border-width-thin)',
        'thick': 'var(--border-width-thick)',
        'heavy': 'var(--border-width-heavy)',
      },
      // Opacity
      opacity: {
        'semiopaque': 'var(--opacity-semiopaque)',
        'intense': 'var(--opacity-intense)',
        'medium': 'var(--opacity-medium)',
        'light': 'var(--opacity-light)',
        'semitransparent': 'var(--opacity-semitransparent)',
      },
      // Spacing
      spacing: {
        'atomo': 'var(--spacing-atomo)',
        'nano': 'var(--spacing-nano)',
        'xxxs': 'var(--spacing-xxxs)',
        'xxs': 'var(--spacing-xxs)',
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        'xxl': 'var(--spacing-xxl)',
        'xxxl': 'var(--spacing-xxxl)',
        'giant': 'var(--spacing-giant)',
        'titan': 'var(--spacing-titan)',
      },
      // Box shadow
      boxShadow: {
        'level-1': 'var(--shadow-level-1)',
        'level-2': 'var(--shadow-level-2)',
        'level-3': 'var(--shadow-level-3)',
        'level-4': 'var(--shadow-level-4)',
        'level-5': 'var(--shadow-level-5)',
        'level-6': 'var(--shadow-level-6)',
        'level-7': 'var(--shadow-level-7)',
        'level-8': 'var(--shadow-level-8)',
      },
      // Animation
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
