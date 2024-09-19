import { Image, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { Colors as RTColors } from '@/constants/Colors';
import RTTextField from '@/components/RTTextField';
import AntDesign from '@expo/vector-icons/AntDesign';
import RTDivider from '@/components/RTDivider';
import '../../global.css';

const LoginScreen = () => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='px-4 flex'>
                    <View className='h-[54px] bg-transparent' />
                    <View className='flex flex-row items-center'>
                        <ThemedText
                            className='mr-2'
                            type='title'
                            lightColor={RTColors.light.text}
                            darkColor={RTColors.dark.text}
                        >
                            Hi, Welcome!
                        </ThemedText>
                        <HelloWave />
                    </View>
                    <View className='mb-14 mt-2'>
                        <ThemedText
                            type='default'
                            lightColor={RTColors.light.secondaryTint}
                            darkColor={RTColors.dark.secondaryTint}
                        >
                            Access your account and explore properties effortlessly.
                        </ThemedText>
                    </View>
                    <RTTextField title='Email' icon='mail' placeholder='Enter your email here' />
                    <RTTextField
                        title='Password'
                        icon='lock'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                    />

                    <View className='flex flex-row justify-between items-center'>
                        <View className='flex flex-row gap-2 items-center'>
                            <Pressable className='h-[16px] w-[16px] rounded-full border-[1px] border-text-light dark:border-text-dark'></Pressable>
                            <ThemedText type='sm'>Remember me</ThemedText>
                        </View>

                        <Pressable>
                            <Text className='text-red-400 font-semibold'>Forgot Password?</Text>
                        </Pressable>
                    </View>

                    <Pressable className='bg-primary-light dark:bg-primary-dark flex items-center justify-center h-[60px] rounded-lg mt-12'>
                        <Text className='text-white font-semibold text-lg'>Sign in</Text>
                    </Pressable>

                    <View className='flex flex-row items-center justify-center my-5 gap-2'>
                        <ThemedText type='small'>Don't have an account?</ThemedText>
                        <Pressable>
                            <ThemedText
                                type='smallTitle'
                                lightColor={RTColors.light.primary}
                                darkColor={RTColors.dark.primary}
                            >
                                Sign up
                            </ThemedText>
                        </Pressable>
                    </View>
                    <View className='flex flex-row gap-10 items-center justify-center mt-24 mb-12 pt-12 relative'>
                        <RTDivider />
                        <View className='w-50 h-50 p-4 border-[0.5px] dark:border-gray-600 border-gray-400 rounded-xl'>
                            <AntDesign
                                name='google'
                                size={30}
                                color={`${colorScheme === 'dark' ? 'white' : 'black'}`}
                            />
                        </View>
                        <View className='w-50 h-50 p-4 border-[0.5px] dark:border-gray-600 border-gray-400 rounded-xl'>
                            <AntDesign
                                name='apple1'
                                size={30}
                                color={`${colorScheme === 'dark' ? 'white' : 'black'}`}
                            />
                        </View>
                        <View className='w-50 h-50 p-4 border-[0.5px] dark:border-gray-600 border-gray-400 rounded-xl'>
                            <AntDesign
                                name='facebook-square'
                                size={30}
                                color={`${colorScheme === 'dark' ? 'white' : 'black'}`}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
