import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ButtonProps {
    btnText?: string;
    className?: string;
    onPress?: () => void;
}

const CommonButton = ({ btnText, onPress, className }: ButtonProps) => {
    return (
        <View className='my-10 flex-1 w-full flex-row items-center'>
            <Pressable
                className={`bg-btn-primary flex-1 items-center justify-center h-[60px] rounded-lg mt-8 ${className}`}
                onPress={onPress}
            >
                <Text className='text-btn-label-primary font-semibold text-lg'>{btnText}</Text>
            </Pressable>
        </View>
    );
};

export default CommonButton;
