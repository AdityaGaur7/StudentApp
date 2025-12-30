import React, { useEffect } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedProps,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../constants/Colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type StatusCardProps = {
    attendance: number;
    gpa: number;
};

const CIRCLE_LENGTH = 250; // 2 * PI * R
const R = CIRCLE_LENGTH / (2 * Math.PI);

export default function StatusCard({ attendance, gpa }: StatusCardProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withDelay(
            500,
            withTiming(attendance / 100, {
                duration: 2000,
                easing: Easing.out(Easing.exp),
            })
        );
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.stat}>
                <Text style={[styles.label, { color: colors.secondary }]}>Attendance</Text>
                <View style={styles.chartContainer}>
                    <Svg width={100} height={100}>
                        <Circle
                            cx={50}
                            cy={50}
                            r={R}
                            stroke={colors.border}
                            strokeWidth={10}
                        />
                        <AnimatedCircle
                            cx={50}
                            cy={50}
                            r={R}
                            stroke={colors.primary}
                            strokeWidth={10}
                            strokeDasharray={CIRCLE_LENGTH}
                            animatedProps={animatedProps}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                    </Svg>
                    <View style={styles.percentageContainer}>
                        <Text style={[styles.percentageText, { color: colors.text }]}>{attendance}%</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.divider, { backgroundColor: colors.border }]} />

            <View style={styles.stat}>
                <Text style={[styles.label, { color: colors.secondary }]}>GPA</Text>
                <View style={styles.gpaContainer}>
                    <Text style={[styles.gpaText, { color: colors.primary }]}>{gpa}</Text>
                    <Text style={[styles.gpaScale, { color: colors.secondary }]}>/ 4.0</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 24,
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stat: {
        alignItems: 'center',
        flex: 1,
    },
    divider: {
        width: 1,
        height: '80%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 10,
    },
    chartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    percentageContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    gpaContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gpaText: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    gpaScale: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4,
    },
});
