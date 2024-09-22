import { StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from './ThemedText';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors';

type props = {
    title: string;
    icon: keyof typeof Feather.glyphMap;
    placeholder: string;
    isSecureTextEntry?: boolean;
    isShowAndHidePasswordIconDisplay?: boolean;
    keyBoardType?: KeyboardTypeOptions;
};

type KeyboardTypeOptions =
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';

const RTTextField = ({
    title,
    icon,
    placeholder,
    isSecureTextEntry,
    isShowAndHidePasswordIconDisplay,
    keyBoardType
}: props) => {
    const colorScheme = useColorScheme();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputStyle = `flex-row items-center border-[0.5px] rounded-lg h-[56px] pl-4 ${isFocused ? 'border-border-onfocus border-[1px]' : 'border-border-primary'} `;

    return (
        <View className='mb-5'>
            <ThemedText className='mb-2' type='smallTitle'>
                {title}
            </ThemedText>
            <View className={inputStyle}>
                <Feather
                    name={icon}
                    size={20}
                    color={`${colorScheme === 'dark' ? Colors.dark.secondaryTint : Colors.light.secondaryTint}`}
                />
                <TextInput
                    className='flex-1 px-3 text-label-secondary bg-transparent text-lg'
                    keyboardType={keyBoardType}
                    placeholder={placeholder}
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
                    secureTextEntry={isSecureTextEntry ?? false}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </View>
        </View>
    );
};

export default RTTextField;

const styles = StyleSheet.create({});
