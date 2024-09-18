import React from 'react';
import ThemeProvider from '@/contexts/ThemeProviders';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    console.log('loaded', loaded);
    console.log('hel');

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            colorTheme={colorScheme || 'dark'}
        >
            <Stack>
                <Stack.Screen
                    name='(auth)'
                    options={{ title: 'Login', headerTitleAlign: 'center' }}
                />
                <Stack.Screen name='+not-found' />
            </Stack>
        </ThemeProvider>
    );
}
