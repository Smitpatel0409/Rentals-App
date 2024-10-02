import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    useColorScheme,
    View
} from 'react-native';
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
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import CommonTextField from '@/components/common/CommonTextField';
import CommonButton from '@/components/common/CommonButton';

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});

const Register = () => {
    const colorScheme = useColorScheme();
    const [rememberMeCheck, setRememberMeCheck] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='h-[24px] bg-transparent' />
                <Formik
                    initialValues={{ fullname: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm();
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
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

                            <CommonTextField
                                title='Fullname'
                                icon='user'
                                placeholder='Enter your fullname here'
                                value={values.fullname}
                                onChangeText={handleChange('fullname')}
                                error={errors}
                            />
                            {touched.fullname && errors.fullname && (
                                <Text style={{ color: 'red' }}>{errors.fullname}</Text>
                            )}
                            <CommonTextField
                                title='Email'
                                icon='mail'
                                placeholder='Enter your email here'
                                value={values.email}
                                name='email'
                                onChangeText={handleChange('email')}
                            />
                            {touched.email && errors.email && (
                                <Text style={{ color: 'red' }}>{errors.email}</Text>
                            )}
                            <CommonTextField
                                title='Password'
                                icon='lock'
                                placeholder='Enter your password'
                                isSecureTextEntry={true}
                                value={values.password}
                                onChangeText={handleChange('password')}
                            />
                            {touched.password && errors.password && (
                                <Text style={{ color: 'red' }}>{errors.password}</Text>
                            )}
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
                            <CommonButton onPress={handleSubmit} btnText='Sign Up' />
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
                                    hitSlop={15}
                                >
                                    <Text className='text-btn-primary font-semibold'>Sign in</Text>
                                </Pressable>
                            </View>
                            <View className='flex-row items-center w-full mt-8'>
                                <CommonDivider />
                                <Text className='text-label-secondary px-3 bg-background-primary'>
                                    Or Sign up with :
                                </Text>
                                <CommonDivider />
                            </View>
                            <View className='flex flex-row gap-10 items-center justify-center my-8'>
                                <CommonSocialsBtn iconName='google' />
                                <CommonSocialsBtn iconName='apple1' />
                                <CommonSocialsBtn iconName='facebook-square' />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
