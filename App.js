import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.titulo}>Bendito Cacau</Text>

      <View>
        <View style={styles.imgContainer}>
          <Text style={styles.subtitulo}>Chocolate 60%</Text>
          <Image style={styles.img} source={require('./assets/60.png')} />
        </View>
      </View> 
      <View>
        <View style={styles.imgContainer}>
          <Text style={styles.subtitulo}>Chocolate 67%</Text>
          <Image style={styles.img} source={require('./assets/67.png')} />
        </View>
      </View>
      <View>
        <View style={styles.imgContainer}>
          <Text style={styles.subtitulo}>Chocolate 70%</Text>
          <Image style={styles.img} source={require('./assets/70.png')} />
        </View>
      </View>
      <View>
        <View style={styles.imgContainer}>
          <Text style={styles.subtitulo}>Chocolate 80%</Text>
          <Image style={styles.img} source={require('./assets/80.png')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#BBC3A4'
  },
  titulo:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 25,
  },
  imgContainer:{
    backgroundColor: 'C4C1A4'
  },
  img:{
    width: 300,
    height: 300,
  },
  subtitulo:{
    fontSize: 20,
    textAlign: 'center'
  }
});