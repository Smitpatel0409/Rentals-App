import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import CommonTextField from '@/components/common/CommonTextField';
import CommonButton from '@/components/common/CommonButton';

const ForgotPassword = () => {
    const handleSubmit = async () => {
        // Do Some Async task here

        router.back();
    };
    return (
        <ScrollView
            contentContainerStyle={{ flex: 1, justifyContent: 'space-between', paddingTop: 8 }}
        >
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
                    <CommonTextField
                        value=''
                        title='Email'
                        placeholder='Enter your email'
                        icon='mail'
                    />
                </View>
                <CommonButton btnText='Submit' onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

export default ForgotPassword;
