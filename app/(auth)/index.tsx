import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import CommonDivider from '@/components/common/CommonDivider';
import '../../global.css';
import CommonSocialsBtn from '@/components/common/CommonSocialsBtn';
import { CheckBox } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { usePostUserSignInDataMutation } from '@/store/slices/auth/authApi';
import CommonTextField from '@/components/common/CommonTextField';
import CommonButton from '@/components/common/CommonButton';

const LoginScreen = () => {
    const [postUserSignInData] = usePostUserSignInDataMutation();
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
                    <CommonTextField
                        title='Email'
                        icon='mail'
                        placeholder='Enter your email here'
                    />
                    <CommonTextField
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
                                console.log('Preseed');

                                router.push('/forgotPassword');
                            }}
                            hitSlop={15}
                        >
                            <Text className='text-label-danger font-semibold'>
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>

                    <CommonButton
                        btnText='Sign in'
                        onPress={async () => {
                            try {
                                const result = await postUserSignInData({
                                    email: 'enter email',
                                    password: 'enter pass'
                                }).unwrap();
                                console.log(JSON.stringify(result, null, 2));
                            } catch (error) {
                                console.error('Failed to sign in:', error);
                            }
                        }}
                    />
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
                        <CommonDivider />
                        <Text className='text-label-secondary px-3 bg-background-primary'>
                            Or Sign in with :
                        </Text>
                        <CommonDivider />
                    </View>
                    <View className='flex flex-row gap-10 items-center justify-center my-8'>
                        <CommonSocialsBtn iconName='google' />
                        <CommonSocialsBtn iconName='apple1' />
                        <CommonSocialsBtn iconName='facebook-square' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
