import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useLayoutEffect } from 'react';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import DeliveryCard from '../components/DeliveryCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;
type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerBackTitle: 'Deliveries',
      headerTintColor: '#EB6a7c', // color of back button
      headerTitleStyle: { color: 'black' }, // color of title
    });
  }, [order]);
  return (
    <View style={tw('-mt-2')}>
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};
export default OrderScreen;
