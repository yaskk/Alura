import React, { useCallback } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  // Checar se a fonte foi carregada
  // if (!fonteCarregada) {
  //   return <AppLoading />;
  // }

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <View>
        <StatusBar></StatusBar>
        <Cesta {...mock}></Cesta>
        {/* <Cesta topo={mock.topo} detalhes={mock.detalhes}></Cesta> */}
      </View>
    </SafeAreaView>
  );
}
