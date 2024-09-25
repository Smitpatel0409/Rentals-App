import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?:
        | 'default'
        | 'title'
        | 'defaultSemiBold'
        | 'subtitle'
        | 'link'
        | 'smallTitle'
        | 'small'
        | 'sm';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                type === 'smallTitle' ? styles.smallTitle : undefined,
                type === 'small' ? styles.small : undefined,
                type === 'sm' ? styles.sm : undefined,
                style
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 26
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4'
    },
    smallTitle: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 22
    },
    small: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22
    },
    sm: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 20
    }
});
