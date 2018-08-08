import Main from './components/Main';
import Chat from './components/Chat';
import MapHome from './components/Map-Home';
import FieldScreen from './components/FieldScreen';
import { createStackNavigator } from 'react-navigation'

const navigator = createStackNavigator({
  Main: { screen: Main },
  Map: {screen: MapHome},
  Chat: { screen: Chat },
  Field: {screen: FieldScreen}
});


export default navigator








































// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


