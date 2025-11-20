import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                jowo: {
                    gold: '#D4AF37',
                    broth: '#F59E0B',
                    wood: '#5D4037',
                    charcoal: '#1F2937',
                    cream: '#FDFBF7',
                    spice: '#B91C1C',
                    fresh: '#15803D',
                    brown: {
                        50: '#fdf8f6',
                        100: '#f2e8e5',
                        200: '#eaddd7',
                        300: '#e0cec7',
                        400: '#d2bab0',
                        500: '#a1887f',
                        600: '#8d6e63',
                        700: '#795548',
                        800: '#6d4c41',
                        900: '#5d4037',
                    }
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'fade-in': 'fadeIn 1s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },

    plugins: [forms],
};
