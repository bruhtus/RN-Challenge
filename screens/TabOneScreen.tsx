import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Here we go, your task is ready!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

// unused default component
// import EditScreenInfo from '../components/EditScreenInfo';
      // <View
      //   style={styles.separator}
      //   lightColor="#eee"
      //   darkColor="rgba(255,255,255,0.1)"
      // />
      // <EditScreenInfo path="/screens/TabOneScreen.tsx" />
