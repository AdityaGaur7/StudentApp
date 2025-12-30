import { Bell } from 'lucide-react-native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import NotificationList from '../../components/NotificationList';
import StatusCard from '../../components/StatusCard';
import { Colors } from '../../constants/Colors';
import { notifications, studentProfile } from '../../constants/mockData';

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: studentProfile.avatarUrl }}
              style={[styles.avatar, { borderColor: colors.border }]}
            />
            <View>
              <Text style={[styles.greeting, { color: colors.secondary }]}>Welcome back,</Text>
              <Text style={[styles.name, { color: colors.text }]}>{studentProfile.name}</Text>
            </View>
          </View>
          <View style={[styles.bellContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Bell size={24} color={colors.text} />
            <View style={styles.badge} />
          </View>
        </View>

        {/* Status Card */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Academic Status</Text>
          <StatusCard attendance={studentProfile.attendance} gpa={studentProfile.gpa} />
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <NotificationList data={notifications} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '500',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  bellContainer: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
});
