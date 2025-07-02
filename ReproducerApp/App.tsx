import { Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import jsonAnimation from './Watermelon.json';
import { useState } from 'react';

function App() {
  const [isJson, setIsJson] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Should show watermelon: {isJson.toString()}</Text>
      <LottieView
        source={isJson ? jsonAnimation : 'LottieLogo1'}
        style={{ width: 100, height: 100 }}
        autoPlay
      />
      <Pressable onPress={() => setIsJson(p => !p)}>
        <Text>Toggle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default App;
