import { useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import {
  useNavigation,
  CompositeNavigationProp,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image, Input } from '@rneui/themed';
// https://stackoverflow.com/questions/47924501/add-strong-typing-for-react-navigation-props
// https://reactnavigation.org/docs/typescript/
// Composite navigation Prop

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;
const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [input, setInput] = useState<string>('');
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: '#59c1cc' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc' }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator size="large" color="#00ff00" />}
      />
      <Input
        value={input}
        // onChangeText={text => setInput(text)}
        // same as above n beloiw
        onChangeText={setInput}
        placeholder="Search by Customer"
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  );
};
export default CustomersScreen;
