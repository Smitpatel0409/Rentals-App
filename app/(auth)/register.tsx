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

const Register = () => {
    const colorScheme = useColorScheme();
    const [rememberMeCheck, setRememberMeCheck] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='px-4 flex'>
                    <View className='h-8 bg-transparent' />
                    <View className='flex flex-row items-center'>
                        <Text className='text-heading-primary font-bold text-[28px]'>
                            Create an account
                        </Text>
                    </View>
                    <View className='mb-14 mt-2'>
                        <Text className='text-label-secondary text-[16px] pr-10'>
                            Become a member to explore properties tailored to you
                        </Text>
                    </View>
                    <RTTextField
                        title='Fullname'
                        icon='user'
                        placeholder='Enter your fullname here'
                    />
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
                            title='I agree to the Terms & Conditions and Privacy Policy'
                            textStyle={{
                                color: '#989898',
                                fontWeight: 400,
                                fontSize: 12
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
                    </View>

                    <Pressable
                        className='bg-btn-primary flex items-center justify-center h-[60px] rounded-lg mt-8'
                        onPress={() => {
                            console.log('Pressed');
                        }}
                    >
                        <Text className='text-btn-label-primary font-semibold text-lg'>
                            Sign up
                        </Text>
                    </Pressable>

                    <View className='flex flex-row items-center justify-center mt-5 gap-2'>
                        <Text className='text-[15px] text-label-primary font-normal'>
                            Already have an account?
                        </Text>
                        <Pressable
                            onPress={() => {
                                if (router.canGoBack()) {
                                    router.back();
                                }
                            }}
                        >
                            <Text className='text-btn-primary font-semibold'>Sign in</Text>
                        </Pressable>
                    </View>
                    <View className='flex-row items-center w-full mt-8'>
                        <RTDivider />
                        <Text className='text-label-secondary px-3 bg-background-primary'>
                            Or Sign up with :
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

export default Register;
