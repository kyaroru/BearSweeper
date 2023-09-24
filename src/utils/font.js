import { useFonts } from 'expo-font';

export const useFontLoader = () => {
  const [fontsLoaded]= useFonts({
    'OpenSans-Light': require('fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('fonts/OpenSans-SemiBold.ttf'),
  });
  return fontsLoaded
};
