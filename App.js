import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Texto from './components/texto';

import { TextInput, Button, ScrollView, Pressable } from 'react-native-web';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const esperarAlgunosMilisegundos = async () => {
      // Evitar que el splash screen se oculte automáticamente
      await SplashScreen.preventAutoHideAsync();
      try {
          // Acá hacemos todas las llamadas asincrónicas que necesitamos.
          // Por ejemplo precarga de Fonts, llamadas a APIs externas, etc...

          // Simular una demora de 5 segundos.
          await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
          console.warn(e);
      } finally {
          // Cambiar el estado de carga a falso y ocultar el splash screen
          setIsLoading(false);
          await SplashScreen.hideAsync();
      }
    };

    esperarAlgunosMilisegundos();
  }, []);

  // Renderizado condicional:
  // Mostrar una pantalla en blanco mientras se carga
  if (isLoading) {
    return (
      <Image 
      source={require('./assets/splash.png')} 
      style={{ width: '100%', height: '100%' }}
      resizeMode="contain"/>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto texto="skibidi react"></Texto>
      <ScrollView>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
        <Texto texto="skibidi react"></Texto>
    </ScrollView>
    
      <TextInput placeholder="Ingrese algo"
        style={{ borderWidth: 1, padding: 10, margin: 20 }}
      />

      <Button title="Tocame" />
      <Pressable
        onPress={() => Alert.alert('Tocado!')}
        style={{
          border: "1px solid black",
          padding: 10,
          margin: 20,
          borderRadius: 5,
        }}
      >
      <Text>Presioname</Text>
    </Pressable>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});



