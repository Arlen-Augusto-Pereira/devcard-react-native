import {Text, View, StyleSheet } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import {Button} from "../componentes/Buttons";
import { THEME } from "../styles/constants";
import { DevCard }from "../componentes/DevCard";
import { useRouter, useLocalSearchParams } from "expo-router";



export default function Previewscreen(){
  const router = useRouter()
  const params = useLocalSearchParams() as unknown as Form
  return (
    <SafeAreaView>
       <View style= {styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              Seu Cartão
            </Text>  
         </View>
           <DevCard data={params}/>
          <View style={styles.footerContainer}> 
            <Button label="Editar" variant="outline" onPress={() => router.push("/cadastro")}/>  
            <Button label="Finalizar" onPress={() => router.push("/sucesso")}/> 
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