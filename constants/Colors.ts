/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryColorLight = '#1246bc';
const primaryColorDark = '#65e3df';
const secondaryColorLight = '#989898';
const secondaryColorDark = '#989898';

export const Colors = {
    light: {
        text: '#292929',
        background: '#ffffff',
        primary: primaryColorLight,
        secondaryTint: secondaryColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: primaryColorLight
    },
    dark: {
        text: '#ffffff',
        background: '#292929',
        primary: primaryColorDark,
        secondaryTint: secondaryColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: primaryColorDark
    }
};
