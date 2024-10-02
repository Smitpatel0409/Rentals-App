import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import RTDarkTheme from '@/utils/RTDarkTheme';
import RTLightTheme from '@/utils/RTLightTheme';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { rtkStore } from '@/store/rtkStore';

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

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={rtkStore}>
            <ThemeProvider value={colorScheme === 'dark' ? RTDarkTheme : RTLightTheme}>
                <StatusBar style='auto' />
                <Stack>
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='+not-found' options={{ animation: 'slide_from_bottom' }} />
                </Stack>
            </ThemeProvider>
        </Provider>
    );
}
