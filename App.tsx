import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ 'Inter': require('./assets/fonts/Inter.ttf') });

  if(!fontsLoaded)
    return null;

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
