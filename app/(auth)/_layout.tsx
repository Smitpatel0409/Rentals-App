import { useColorScheme } from '@/hooks/useColorScheme.web';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
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
