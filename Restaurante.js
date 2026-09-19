import { useState } from 'react';
import { StyleSheet, Text, Image, Button, View, Pressable } from 'react-native'

export function Restaurante({nombre, calificacion, distancia, nivel_costo, tipo, descripcion, foto, boton}){
    //const estado = activo;
    return (
        <Pressable><View style={{marginLeft: 18}}>
            <Image style={{width: 50, height: 50}}
            source={{uri: foto,}}/>
            <Text>{nombre}</Text>
            <Text>{calificacion}</Text>
            <Text>Distancia: {distancia} kilómetros</Text>
        </View></Pressable>
        )
    }
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flex: .1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    flex: .8,
    backgroundColor: 'white',
  },
});