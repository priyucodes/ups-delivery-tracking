import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn/dist';
import useOrders from '../hooks/useOrders';
import { useLayoutEffect, useState } from 'react';
import { Button, Image } from '@rneui/themed';
import OrderCard from '../components/OrderCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;
const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false); // if not mention generic it infers the value to its type auto

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }: any) => (
        <Text style={{ color: focused ? '#eb6a7c' : color, fontSize: 10 }}>
          Orders
        </Text>
      ),
    });
  }, [navigation]);
  return (
    <ScrollView style={{ backgroundColor: '#EB6A7C' }}>
      <Image
        containerStyle={tw('w-full h-64')}
        source={{
          uri: 'https://links.papareact.com/m51',
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Button
          onPress={() => setAscending(!ascending)}
          color="pink"
          titleStyle={{ color: 'gray', fontWeight: '400' }}
          style={tw('py-2 px-5')}
        >
          {ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map(order => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};
export default OrdersScreen;
