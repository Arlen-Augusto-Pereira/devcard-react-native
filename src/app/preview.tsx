import {Text, View, StyleSheet } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import {Button} from "../componentes/Buttons";
import { THEME } from "../styles/constants";
import { DevCard }from "../componentes/DevCard";

export default function Previewscreen(){
  return (
    <SafeAreaView>
       <View style= {styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              Seu Cartão
            </Text>  
         </View>
           <DevCard/>
          <View style={styles.footerContainer}> 
            <Button label="Editar" variant="outline"/>  
            <Button label="Finalizar"/>
          </View>

       </View>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
    gap:12
  },

  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-start",
    gap: 16
  },

  title: {

    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h3,
    textAlign: "center"
    
  },

  footerContainer: {
  flexDirection: "column",
  gap: 12

  },

});