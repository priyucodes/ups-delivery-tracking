import { Card, Divider, Icon } from '@rneui/themed';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
// import * as CurrencyFormat from 'react-currency-format';
type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind();
  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-2'),
        {
          backgroundColor: '#59c1cc',
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View>
        <Icon name="box" size={50} type="entypo" color="white" />
        <View>
          <Text
            style={tw('text-xs text-center uppercase text-white font-bold')}
          >
            {order.carrier} - {order.trackingId}
          </Text>
          <Text style={tw('text-white text-center text-lg font-bold')}>
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>

        <View style={tw('mx-auto')}>
          <Text style={tw('text-base text-center text-white font-bold mt-5')}>
            Address
          </Text>
          <Text style={tw('text-sm text-center text-white')}>
            {order.Address}, {order.City}
          </Text>
          <Text style={tw('text-sm text-center text-white italic')}>
            Shipping Cost: ${order.shippingCost}
            {/* <CurrencyFormat /> */}
          </Text>
        </View>
      </View>

      <Divider color="white" />
      <View style={tw('p-5')}>
        {order.trackingItems.items.map(item => (
          <View style={tw('flex-row justify-between items-center')}>
            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
            <Text style={tw('text-xl text-white')}>x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};
export default DeliveryCard;