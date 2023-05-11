import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductsScreen from "./src/screens/productsScreen";
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetailsScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
});
