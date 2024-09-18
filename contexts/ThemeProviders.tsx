import * as React from 'react';
import { useColorScheme } from 'nativewind';
import ThemeContext from '../node_modules/@react-navigation/native/src/theming/ThemeContext';
import { Theme } from '@react-navigation/native';

type Props = {
    value: Theme;
    children: React.ReactNode;
    colorTheme?: string;
};

export default function ThemeProvider({ value, children, colorTheme }: Props) {
    const { colorScheme: initialColorScheme, setColorScheme } = useColorScheme();
    const [currentColorScheme, setCurrentColorScheme] = React.useState<'light' | 'dark'>(
        initialColorScheme
    );

    React.useEffect(() => {
        if (colorTheme !== undefined) {
            console.log('colorTheme', colorTheme, 'initialColorScheme', initialColorScheme);
            setCurrentColorScheme(colorTheme as 'light' | 'dark');
            setColorScheme(colorTheme as 'light' | 'dark');
        }
    }, [colorTheme, setColorScheme]);

    const themeContextValue = React.useMemo(() => {
        return {
            ...value,
            dark: currentColorScheme === 'dark',
            colors: value.colors
        };
    }, [value, currentColorScheme]);

    return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
}
