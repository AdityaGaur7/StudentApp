import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

type DaySelectorProps = {
    selectedDay: string;
    onSelectDay: (day: string) => void;
};

export default function DaySelector({ selectedDay, onSelectDay }: DaySelectorProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {DAYS.map((day) => {
                    const isSelected = selectedDay === day;
                    return (
                        <Pressable
                            key={day}
                            onPress={() => onSelectDay(day)}
                            style={({ pressed }) => [
                                styles.dayButton,
                                {
                                    backgroundColor: isSelected ? colors.primary : colors.card,
                                    borderColor: isSelected ? colors.primary : colors.border,
                                    opacity: pressed ? 0.8 : 1
                                }
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dayText,
                                    { color: isSelected ? '#FFFFFF' : colors.text }
                                ]}
                            >
                                {day}
                            </Text>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
    scrollContent: {
        paddingHorizontal: 20,
        gap: 12,
    },
    dayButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        borderWidth: 1,
        minWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    dayText: {
        fontSize: 16,
        fontWeight: '600',
    },
});
