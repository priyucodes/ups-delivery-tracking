import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useLayoutEffect } from 'react';
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () =>
  // {navigation,route}
  {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#59C1CC',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Customers') {
              return (
                <Icon
                  name="users"
                  type="entypo"
                  color={focused ? '#59c1cc' : 'gray'}
                />
              );
            } else if (route.name === 'Orders') {
              return (
                <Icon
                  name="box"
                  type="entypo"
                  color={focused ? '#EB6A7C' : 'gray'}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
      </Tab.Navigator>
    );
  };
export default TabNavigator;
