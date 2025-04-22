
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';

export default function AddHabitScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleAdd = () => {
    // In a real app, save the habit to state/store/db
    router.replace('/(tabs)/index');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Add a new habit</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Drink Water"
            placeholderTextColor="#B0B3B8"
            value={name}
            onChangeText={setName}
            maxLength={32}
            autoFocus
          />
          <TouchableOpacity
            style={[styles.addButton, !name && { opacity: 0.5 }]}
            onPress={handleAdd}
            disabled={!name}
            activeOpacity={0.85}
          >
            <PlusCircle color="#fff" size={22} />
            <Text style={styles.addButtonText}>Add Habit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'center',
    padding: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22223B',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    fontSize: 18,
    color: '#22223B',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#4F8EF7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignSelf: 'center',
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