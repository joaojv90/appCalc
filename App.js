import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, } from 'react-native';

import { Styles } from './styles/Styles';
import Keyboard from './Components/Keyboard';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style="auto" />
      <Keyboard/>
    </SafeAreaView>
  );
}