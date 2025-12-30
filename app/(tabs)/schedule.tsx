import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import ClassCard from '../../components/ClassCard';
import DaySelector from '../../components/DaySelector';
import { Colors } from '../../constants/Colors';
import { schedule } from '../../constants/mockData';

export default function ScheduleScreen() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const [selectedDay, setSelectedDay] = useState('Mon');

    const currentClasses = schedule[selectedDay] || [];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colors.text }]}>Class Schedule</Text>
            </View>

            <DaySelector selectedDay={selectedDay} onSelectDay={setSelectedDay} />

            <FlatList
                data={currentClasses}
                renderItem={({ item }) => <ClassCard item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={[styles.emptyText, { color: colors.secondary }]}>No classes for this day.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
    },
    listContent: {
        paddingVertical: 10,
        paddingBottom: 40,
    },
    emptyContainer: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});
