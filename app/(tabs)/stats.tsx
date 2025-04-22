
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart3 } from 'lucide-react-native';

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <BarChart3 color="#4F8EF7" size={48} style={{ marginBottom: 18 }} />
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>
          Track your habit streaks and completion history here soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22223B',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C6F7D',
    textAlign: 'center',
    maxWidth: 260,
  },
});