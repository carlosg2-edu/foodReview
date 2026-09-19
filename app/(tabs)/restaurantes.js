import {StyleSheet, Text, View, Image} from "react-native";
import * as restaurantes from "../../restaurantes.json";
import { Restaurante } from "../../Restaurante";
export default function Restaurantes(){
    const restArr = restaurantes.restaurantes;
    console.log(restArr)
    return(
        <View style={styles.scrollView}>
            {
                restArr.map((restaurante, index) => (
                    <Restaurante key={index} 
                    nombre={restaurante.nombre} 
                    calificacion={restaurante.calificacion} 
                    distancia={restaurante.distancia} 
                    nivel_costo={restaurante.nivel_costo} 
                    tipo={restaurante.tipo}
                    descripcion={restaurante.descripcion}
                    foto={restaurante.foto}/>
                ))
            
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
	tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    flex: 10,
    overflow:'scroll',
    backgroundColor: 'white',
  },
});