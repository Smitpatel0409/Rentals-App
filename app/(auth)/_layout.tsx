import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

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
