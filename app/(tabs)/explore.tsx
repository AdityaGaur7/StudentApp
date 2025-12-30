import { BookOpen, ExternalLink, Globe, HelpCircle, Mail } from 'lucide-react-native';
import React from 'react';
import { FlatList, Linking, Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Colors } from '../../constants/Colors';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const RESOURCES = [
  { id: '1', title: 'Student Portal', icon: Globe, url: 'https://portal.university.edu', color: '#3B82F6' },
  { id: '2', title: 'Library', icon: BookOpen, url: 'https://library.university.edu', color: '#8B5CF6' },
  { id: '3', title: 'Student Mail', icon: Mail, url: 'mailto:student@university.edu', color: '#10B981' },
  { id: '4', title: 'IT Help Desk', icon: HelpCircle, url: 'https://help.university.edu', color: '#F59E0B' },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const ResourceCard = ({ item }: { item: typeof RESOURCES[0] }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    return (
      <AnimatedPressable
        onPressIn={() => (scale.value = withSpring(0.96))}
        onPressOut={() => (scale.value = withSpring(1))}
        onPress={() => Linking.openURL(item.url)}
        style={[
          styles.card,
          animatedStyle,
          { backgroundColor: colors.card, borderColor: colors.border }
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
          <item.icon size={28} color={item.color} />
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
          <Text style={[styles.cardLink, { color: colors.secondary }]}>Tap to open</Text>
        </View>
        <ExternalLink size={20} color={colors.icon} />
      </AnimatedPressable>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Resources</Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>
          Helpful links for your studies
        </Text>
      </View>

      <FlatList
        data={RESOURCES}
        renderItem={({ item }) => <ResourceCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
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
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
  },
  listContent: {
    padding: 20,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 16,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardLink: {
    fontSize: 14,
  },
});
