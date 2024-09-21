import { StyleSheet, View } from 'react-native';
import React from 'react';

interface DividerProps {
    color?: string;
    thickness?: string;
    marginVertical?: string;
}

const RTDivider: React.FC<DividerProps> = ({
    color = 'border-gray-300',
    thickness = '0.5',
    marginVertical = '0'
}) => {
    return (
        <View className={`flex-1 h-[${thickness}px] w-full bg-gray-600 my-[${marginVertical}px]`} />
    );
};

export default RTDivider;

const styles = StyleSheet.create({});
