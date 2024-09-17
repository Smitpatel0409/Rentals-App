import { themes } from '@/constants/color-theme';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useContext } from 'react';
import 'react-native-reanimated';

export default function AuthLayout() {
    const colorScheme = useColorScheme();
    const theme = useContext(themes as unknown as React.Context<{ light: any; dark: any }>);
    console.log('theme', theme);

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
                <Stack.Screen name='register' />
            </Stack>
        </ThemeProvider>
    );
}
