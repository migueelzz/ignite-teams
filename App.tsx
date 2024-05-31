import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from 'src/theme'

import { Groups } from '@screens/groups';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Loader } from '@components/loader';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loader />}
    </ThemeProvider>
  );
}
