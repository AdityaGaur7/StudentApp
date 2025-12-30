import { ChevronRight, Clock, MapPin, User } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { ClassItem } from '../constants/mockData';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ClassCardProps = {
    item: ClassItem;
};

export default function ClassCard({ item }: ClassCardProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const onPressIn = () => {
        scale.value = withSpring(0.96);
    };

    const onPressOut = () => {
        scale.value = withSpring(1);
    };

    return (
        <AnimatedPressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={[
                styles.container,
                animatedStyle,
                { backgroundColor: colors.card, borderColor: colors.border }
            ]}
        >
            <View style={[styles.accentStrip, { backgroundColor: item.color }]} />

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.subject, { color: colors.text }]}>{item.subject}</Text>
                    <View style={[styles.badge, { backgroundColor: item.color + '15' }]}>
                        <Text style={[styles.badgeText, { color: item.color }]}>Class</Text>
                    </View>
                </View>

                <View style={styles.details}>
                    <View style={styles.detailRow}>
                        <Clock size={16} color={colors.secondary} />
                        <Text style={[styles.detailText, { color: colors.secondary }]}>{item.time}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <MapPin size={16} color={colors.secondary} />
                        <Text style={[styles.detailText, { color: colors.secondary }]}>{item.room}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <User size={16} color={colors.secondary} />
                        <Text style={[styles.detailText, { color: colors.secondary }]}>{item.teacher}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.action}>
                <ChevronRight size={20} color={colors.icon} />
            </View>
        </AnimatedPressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 16,
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    accentStrip: {
        width: 6,
        height: '100%',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    subject: {
        fontSize: 18,
        fontWeight: '700',
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    details: {
        gap: 8,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    detailText: {
        fontSize: 14,
        fontWeight: '500',
    },
    action: {
        justifyContent: 'center',
        paddingRight: 16,
    },
});
