import React from 'react';
import ThemeProvider from '@/contexts/ThemeProviders';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function AuthLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
                <Stack.Screen name='register' />
            </Stack>
        </ThemeProvider>
    );
}
