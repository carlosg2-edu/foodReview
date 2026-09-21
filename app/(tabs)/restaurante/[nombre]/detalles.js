import * as restaurantes from '../../../../restaurantes.json';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


export default function detallesRestaurante() {
  const restArr = restaurantes.restaurantes;
  return (
    <View>
      <Text>Detalles</Text>
      <Text></Text>
    </View>
  );
}