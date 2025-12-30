import { AlertTriangle, CheckCircle, Info } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

type Notification = {
    id: string;
    title: string;
    message: string;
    time: string;
    type: string;
};

type NotificationListProps = {
    data: Notification[];
};

const getIcon = (type: string, color: string) => {
    switch (type) {
        case 'warning': return <AlertTriangle size={24} color={color} />;
        case 'success': return <CheckCircle size={24} color={color} />;
        case 'error': return <AlertTriangle size={24} color={color} />;
        default: return <Info size={24} color={color} />;
    }
};

const getColor = (type: string, colors: any) => {
    switch (type) {
        case 'warning': return colors.warning;
        case 'success': return colors.success;
        case 'error': return colors.error;
        default: return colors.primary;
    }
};

export default function NotificationList({ data }: NotificationListProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    const renderItem = ({ item }: { item: Notification }) => {
        const iconColor = getColor(item.type, colors);

        return (
            <TouchableOpacity
                style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
                activeOpacity={0.7}
            >
                <View style={styles.header}>
                    <View style={[styles.iconContainer, { backgroundColor: iconColor + '20' }]}>
                        {getIcon(item.type, iconColor)}
                    </View>
                    <Text style={[styles.time, { color: colors.secondary }]}>{item.time}</Text>
                </View>
                <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.message, { color: colors.secondary }]} numberOfLines={2}>
                    {item.message}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Updates</Text>
                <TouchableOpacity>
                    <Text style={[styles.seeAll, { color: colors.primary }]}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                decelerationRate="fast"
                snapToInterval={280} // Approx card width + margin
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '600',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        width: 260,
        padding: 16,
        borderRadius: 20,
        marginRight: 16,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    iconContainer: {
        padding: 8,
        borderRadius: 12,
    },
    time: {
        fontSize: 12,
        fontWeight: '500',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
        lineHeight: 20,
    },
});
