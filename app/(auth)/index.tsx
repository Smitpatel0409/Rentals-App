import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';

const LoginScreen = () => {
    const [sayHello, setSayHello] = useState(true);
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <SafeAreaView className='flex-1 justify-center bg-red-50 dark:bg-black items-center'>
            <Pressable className='bg-zinc-300 p-2 rounded-lg' onPress={toggleColorScheme}>
                <Text>Change me to {colorScheme === 'dark' ? 'light' : 'dark'}</Text>
            </Pressable>
            <Text className='text-blue-400 justify-center mt-5'>LoginScreen</Text>
            <Text className='text-red-400 justify-center mb-5'>
                {sayHello ? 'Stay_Away' : 'Give_Away'}
            </Text>
            <Pressable
                className='text-black bg-white p-3 my-3 mx-auto'
                onPress={() => setSayHello(sayHello ? false : true)}
            >
                <Text>Chnage the Logo</Text>
            </Pressable>
            <View>
                <Text className='text-green-500'>Hellooooooooooo</Text>
            </View>
            <Image
                className='h-44 w-44 bg-rentalsPrimary dark:bg-white'
                source={
                    sayHello
                        ? require('../../assets/images/react-logo.png')
                        : require('../../assets/images/partial-react-logo.png')
                }
            />
        </SafeAreaView>
    );
};

export default LoginScreen;
