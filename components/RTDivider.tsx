import { StyleSheet, View } from 'react-native';
import React from 'react';

interface DividerProps {
    color?: string;
    thickness?: string;
    marginVertical?: string;
}

const RTDivider: React.FC<DividerProps> = ({
    color = 'border-gray-300',
    thickness = '1px',
    marginVertical = 'my-2'
}) => {
    return <View className='h-[0.5px] w-96 bg-gray-400 rounded-lg absolute top-4 z-0' />;
};

export default RTDivider;

const styles = StyleSheet.create({});
