import React from 'react';
import ThemeProvider from '@/contexts/ThemeProviders';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function AuthLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            initialRouteName='index'
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='register' />
            <Stack.Screen
                name='forgotPassword'
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShadowVisible: false
                }}
            />
        </Stack>
    );
}
