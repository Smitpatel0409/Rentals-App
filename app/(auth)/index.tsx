import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    return (
        <SafeAreaView className='flex-1'>
            <Text className='text-blue-400 justify-center'>LoginScreen</Text>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
