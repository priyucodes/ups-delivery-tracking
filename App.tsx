import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  // development mode  uri: process.env.APOLLO_CLIENT_DEV_URI, // check ntoe.txt for more info abt dotenv
  // production mode
  uri: process.env.APOLLO_CLIENT_PROD_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
  },
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
