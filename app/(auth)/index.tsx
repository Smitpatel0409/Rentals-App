import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import RTTextField from '@/components/RTTextField';
import RTDivider from '@/components/RTDivider';
import '../../global.css';
import RTSocialsBtn from '@/components/RTSocialsBtn';
import { CheckBox } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

const LoginScreen = () => {
    const colorScheme = useColorScheme();
    const [rememberMeCheck, setRememberMeCheck] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='h-[24px] bg-transparent' />
                <View className='px-4 flex'>
                    <View className='h-8 bg-transparent' />
                    <View className='flex flex-row items-center'>
                        <Text className='text-heading-primary font-bold text-[28px]'>
                            Hi, Welcome!
                        </Text>
                        <HelloWave />
                    </View>
                    <View className='mb-14 mt-2'>
                        <Text className='text-label-secondary text-[16px]'>
                            Access your account and explore properties effortlessly.
                        </Text>
                    </View>
                    <RTTextField title='Email' icon='mail' placeholder='Enter your email here' />
                    <RTTextField
                        title='Password'
                        icon='lock'
                        placeholder='Enter your password'
                        isSecureTextEntry={true}
                    />

                    <View className='flex-row justify-between items-center'>
                        <CheckBox
                            containerStyle={{
                                backgroundColor: 'transparent',
                                padding: 0,
                                marginLeft: 0
                            }}
                            title='Remember me'
                            textStyle={{
                                color: '#989898',
                                fontWeight: 400
                            }}
                            checked={rememberMeCheck}
                            onPress={() => {
                                setRememberMeCheck(!rememberMeCheck);
                            }}
                            uncheckedIcon={
                                <Icon
                                    name='circle'
                                    type='feather'
                                    color='#efefef'
                                    size={20}
                                    iconStyle={{
                                        color: '#989898'
                                    }}
                                />
                            }
                            checkedIcon={
                                <Icon
                                    className='text-app-secondary'
                                    name='check-circle'
                                    type='feather'
                                    color='#efefef'
                                    size={20}
                                    iconStyle={{
                                        color:
                                            colorScheme === 'dark'
                                                ? Colors.btnPrimary.dark
                                                : Colors.btnPrimary.light
                                    }}
                                />
                            }
                        />

                        <Pressable
                            onPress={() => {
                                router.push('/forgotPassword');
                            }}
                            hitSlop={15}
                        >
                            <Text className='text-label-danger font-semibold'>
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>

                    <Pressable
                        className='bg-btn-primary flex items-center justify-center h-[60px] rounded-lg mt-8'
                        onPress={() => {}}
                    >
                        <Text className='text-btn-label-primary font-semibold text-lg'>
                            Sign in
                        </Text>
                    </Pressable>

                    <View className='flex flex-row items-center justify-center mt-5 gap-2'>
                        <Text className='text-[15px] text-label-primary font-normal'>
                            Don't have an account?
                        </Text>
                        <Pressable
                            onPress={() => {
                                router.push('/register');
                            }}
                            hitSlop={15}
                        >
                            <Text className='text-btn-primary font-semibold'>Sign up</Text>
                        </Pressable>
                    </View>
                    <View className='flex-row items-center w-full mt-36'>
                        <RTDivider />
                        <Text className='text-label-secondary px-3 bg-background-primary'>
                            Or Sign in with :
                        </Text>
                        <RTDivider />
                    </View>
                    <View className='flex flex-row gap-10 items-center justify-center my-8'>
                        <RTSocialsBtn iconName='google' />
                        <RTSocialsBtn iconName='apple1' />
                        <RTSocialsBtn iconName='facebook-square' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
