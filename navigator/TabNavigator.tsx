import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useLayoutEffect } from 'react';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () =>
  // {navigation,routeIThink}
  {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    return (
      <Tab.Navigator>
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
      </Tab.Navigator>
    );
  };
export default TabNavigator;
