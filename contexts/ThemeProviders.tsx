import React, { createContext } from 'react';
import { themes } from '@/constants/color-theme';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<{
    theme: 'light' | 'dark';
}>({
    theme: 'light'
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { colorScheme } = useColorScheme();
    console.log('colorScheme', colorScheme);

    return (
        <ThemeContext.Provider value={{ theme: colorScheme }}>
            <View style={themes[colorScheme as keyof typeof themes]} className='flex-1'>
                {children}
            </View>
        </ThemeContext.Provider>
    );
};
