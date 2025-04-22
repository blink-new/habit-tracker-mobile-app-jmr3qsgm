
import { Tabs } from 'expo-router';
import { ListChecks, PlusCircle, BarChart3 } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#4F8EF7',
        tabBarInactiveTintColor: '#B0B3B8',
        tabBarStyle: {
          backgroundColor: '#FAFAFA',
          borderTopWidth: 0.5,
          borderTopColor: '#E5E7EB',
          height: 64,
        },
        headerStyle: {
          backgroundColor: '#FAFAFA',
        },
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 22,
          color: '#22223B',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Habits',
          tabBarIcon: ({ color, size }) => <ListChecks size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <PlusCircle size={size + 8} color={color} style={{
              backgroundColor: '#4F8EF7',
              borderRadius: 32,
              padding: 4,
              marginTop: -16,
              shadowColor: '#4F8EF7',
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 4,
            }} />
          ),
          tabBarLabelStyle: { fontWeight: '700' },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => <BarChart3 size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}