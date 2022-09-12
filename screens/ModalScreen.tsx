import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import DeliveryCard from '../components/DeliveryCard';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, 'MyModal'>
>;
type ModalScreenRouteProp = RouteProp<RootStackParamList, 'MyModal'>;
const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();
  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        activeOpacity={0.5}
        // automatic relative to its parent (the modal) unlike webDev
        style={tw('right-5 absolute top-5 z-10')}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <View
          style={
            tw('py-5 border-b border-[#59c1cc]')
            //   style={[tw('py-4 border-b'),
            //   { borderColor: '#59c1cc' }
            // ]}
          }
        >
          <Text
            style={[tw('text-center text-xl font-bold'), { color: '#59c1cc' }]}
          >
            {name}
          </Text>
          <Text style={[tw('text-center italic text-sm')]}>Deliveries</Text>
        </View>
      </View>

      {/* https://stackoverflow.com/questions/55256221/flatlist-vs-scrollview */}
      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        data={orders}
        keyExtractor={order => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};
export default ModalScreen;
