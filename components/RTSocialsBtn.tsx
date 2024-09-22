import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

interface SocialsProps {
    iconName: keyof typeof AntDesign.glyphMap;
    size?: string;
    onPress?: () => void;
}

const RTSocialsBtn = ({ iconName, size = '24' }: SocialsProps) => {
    const colorScheme = useColorScheme();
    return (
        <Pressable className='w-50 h-50 p-4 border-[0.5px] dark:border-gray-600 border-gray-400 rounded-xl'>
            <AntDesign
                name={iconName}
                size={30}
                color={`${colorScheme === 'dark' ? '#efefef' : '#292929'}`}
            />
        </Pressable>
    );
};

export default RTSocialsBtn;

const styles = StyleSheet.create({});
