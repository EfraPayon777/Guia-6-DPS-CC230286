import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";
const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplaya}
          onRequestClose={() => {
            alert('Modal cerrado');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text style={{ textAlign: 'justify' }}>
                El Salvador, a pesar de ser el país más pequeño de América Central, cuenta con una costa impresionante a lo largo del Océano Pacífico. Sus playas son conocidas por su belleza natural, olas perfectas para el surf y un ambiente relajado. Algunas de las playas más populares incluyen El Tunco, El Zonte y La Libertad. Estas playas no solo ofrecen oportunidades para nadar y tomar el sol, sino que también son destinos ideales para practicar deportes acuáticos como el surf, el bodyboard y el paddleboarding. Además, muchas de estas playas cuentan con una vibrante vida nocturna, con bares y restaurantes que ofrecen deliciosa comida local y música en vivo. Ya sea que busques aventura o simplemente un lugar para relajarte, las playas de El Salvador tienen algo para todos.
              </Text>
              <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }} />
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya)
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores3.jpg')}
              />
            </View>
          </View>
          <Text style={styles.titulo}>Lugares Turísticos</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta1.jpg')}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta2.jpg')}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta3.jpg')}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  contenedor: {
    marginHorizontal: 10
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#ffffff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  }
});
export default App;