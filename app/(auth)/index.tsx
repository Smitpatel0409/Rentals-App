import { Image, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import RTTextField from '@/components/RTTextField';
import AntDesign from '@expo/vector-icons/AntDesign';
import RTDivider from '@/components/RTDivider';

const LoginScreen = () => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView
            className={`flex-1 ${colorScheme === 'dark' ? 'bg-background-dark' : 'bg-background-light'}`}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='px-4 flex'>
                    <View className='h-[54px] bg-transparent' />
                    <View className='flex flex-row items-center'>
                        <ThemedText
                            className='mr-2'
                            type='title'
                            lightColor={Colors.light.text}
                            darkColor={Colors.dark.text}
                        >
                            Hi, Welcome!
                        </ThemedText>
                        <HelloWave />
                    </View>
                    <View className='mb-14 mt-2'>
                        <ThemedText
                            type='default'
                            lightColor={Colors.light.secondaryTint}
                            darkColor={Colors.dark.secondaryTint}
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
                        <View className='flex flex-row gap-x-2 items-center'>
                            <Pressable
                                className={`h-[16px] w-[16px] rounded-full border-[1px] ${colorScheme === 'dark' ? 'border-text-dark' : 'border-text-light'}`}
                            ></Pressable>
                            <ThemedText type='sm'>Remember me</ThemedText>
                        </View>

                        <Pressable>
                            <ThemedText type='sm' className='text-red-400 font-semibold'>
                                Forgot Password?
                            </ThemedText>
                        </Pressable>
                    </View>

                    <Pressable
                        className={`${colorScheme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'} flex items-center justify-center h-[60px] rounded-lg mt-12`}
                    >
                        <ThemedText type='defaultSemiBold' className='text-white'>
                            Sign in
                        </ThemedText>
                    </Pressable>

                    <View className='flex flex-row items-center justify-center my-5 gap-x-2'>
                        <ThemedText type='small'>Don't have an account?</ThemedText>
                        <Pressable>
                            <ThemedText
                                type='smallTitle'
                                lightColor={Colors.light.primary}
                                darkColor={Colors.dark.primary}
                            >
                                Sign up
                            </ThemedText>
                        </Pressable>
                    </View>
                    <View className='flex flex-row gap-x-10 items-center justify-center mt-24 pt-6'>
                        <RTDivider />
                        <View
                            className={`w-50 h-50 p-4 border-[0.5px] ${colorScheme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-xl`}
                        >
                            <AntDesign
                                name='google'
                                size={30}
                                color={`${colorScheme === 'dark' ? 'white' : 'black'}`}
                            />
                        </View>
                        <View
                            className={`w-50 h-50 p-4 border-[0.5px] ${colorScheme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-xl`}
                        >
                            <AntDesign
                                name='apple1'
                                size={30}
                                color={`${colorScheme === 'dark' ? 'white' : 'black'}`}
                            />
                        </View>
                        <View
                            className={`w-50 h-50 p-4 border-[0.5px] ${colorScheme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-xl`}
                        >
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
