import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ color: 'white' }}>LoginScreen</Text>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
