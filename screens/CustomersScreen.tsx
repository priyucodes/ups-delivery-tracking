import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
const CustomersScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw('text-blue-500')}>CustomersScreen</Text>
    </SafeAreaView>
  );
};
export default CustomersScreen;
