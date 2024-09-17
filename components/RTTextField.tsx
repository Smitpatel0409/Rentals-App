import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors';

type props = {
    title: string;
    icon: keyof typeof Feather.glyphMap;
    placeholder: string;
    secureTextEntry?: boolean;
};

const RTTextField = (props: props) => {
    const colorScheme = useColorScheme();
    const inputStyle = `flex flex-row items-center border-[0.5px] rounded-lg h-[56px] pl-4 ${
        colorScheme === 'dark' ? 'border-gray-300' : 'border-gray-900  bg-white'
    }`;
    return (
        <View className='mb-5'>
            <ThemedText className='mb-2' type='smallTitle'>
                {props.title}
            </ThemedText>
            <View className={inputStyle}>
                <Feather
                    name={props.icon}
                    size={20}
                    color={`${colorScheme === 'dark' ? Colors.dark.secondaryTint : Colors.light.secondaryTint}`}
                />
                <TextInput
                    className='flex-1 ml-3'
                    placeholder={props.placeholder}
                    placeholderTextColor={
                        colorScheme === 'dark'
                            ? Colors.dark.secondaryTint
                            : Colors.light.secondaryTint
                    }
                    cursorColor={
                        colorScheme == 'dark'
                            ? Colors.dark.secondaryTint
                            : Colors.light.secondaryTint
                    }
                    secureTextEntry={props.secureTextEntry ?? false}
                />
            </View>
        </View>
    );
};

export default RTTextField;

const styles = StyleSheet.create({});
