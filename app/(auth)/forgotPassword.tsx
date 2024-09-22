import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RTTextField from '@/components/RTTextField';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';

const ForgotPassword = () => {
    const handleSubmit = async () => {
        // Do Some Async task here

        router.back();
    };
    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
            <View className='px-4'>
                <View>
                    <Text className='text-3xl font-bold text-heading-primary'>
                        Forgot your password?
                    </Text>
                </View>
                <View className='mt-3'>
                    <Text className='text-label-secondary text-[16px]'>
                        Don't worry, we'll help you to reset it quickly and easily!
                    </Text>
                </View>

                <View className='mt-10'>
                    <RTTextField title='Email' placeholder='Enter your email' icon='mail' />
                </View>
            </View>
            <View className='my-10 flex items-center px-4'>
                <Pressable
                    className='flex w-full items-center justify-center bg-btn-primary h-[60px] rounded-lg'
                    onPress={handleSubmit}
                >
                    <Text className='text-btn-label-primary text-lg font-semibold'>Submit</Text>
                </Pressable>
            </View>
        </ScrollView>
        // </SafeAreaView>
    );
};

export default ForgotPassword;
