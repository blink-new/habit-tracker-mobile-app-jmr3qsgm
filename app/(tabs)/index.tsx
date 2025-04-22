
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, Circle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const initialHabits = [
  // Example: { id: '1', name: 'Drink Water', done: false }
];

export default function HomeScreen() {
  const [habits, setHabits] = useState(initialHabits);
  const router = useRouter();

  const handleToggle = (id: string) => {
    setHabits(habits =>
      habits.map(habit =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  const renderHabit = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.habitCard, item.done && styles.habitCardDone]}
      activeOpacity={0.8}
      onPress={() => handleToggle(item.id)}
    >
      <View style={styles.habitLeft}>
        {item.done ? (
          <CheckCircle color="#4F8EF7" size={28} />
        ) : (
          <Circle color="#B0B3B8" size={28} />
        )}
        <Text style={[styles.habitName, item.done && styles.habitNameDone]}>
          {item.name}
        </Text>
      </View>
      <Animated.View style={{ opacity: item.done ? 1 : 0.5 }}>
        <Text style={styles.doneText}>{item.done ? 'Done' : 'Mark done'}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        {habits.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No habits yet</Text>
            <Text style={styles.emptySubtitle}>
              Start building better routines. Add your first habit!
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push('/(tabs)/add')}
              activeOpacity={0.85}
            >
              <PlusCircle color="#fff" size={24} />
              <Text style={styles.addButtonText}>Add Habit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={habits}
            keyExtractor={item => item.id}
            renderItem={renderHabit}
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

import { PlusCircle } from 'lucide-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  habitCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#4F8EF7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F1F6',
    transition: 'background-color 0.2s',
  },
  habitCardDone: {
    backgroundColor: '#E6F0FF',
    borderColor: '#B3D1FF',
  },
  habitLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  habitName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#22223B',
    marginLeft: 14,
  },
  habitNameDone: {
    color: '#4F8EF7',
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  doneText: {
    fontSize: 15,
    color: '#4F8EF7',
    fontWeight: '500',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#22223B',
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#6C6F7D',
    marginBottom: 28,
    textAlign: 'center',
    maxWidth: 260,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 28,
    shadowColor: '#4F8EF7',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 10,
  },
});