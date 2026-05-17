import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componentes/Buttons";
import { THEME } from "../styles/constants";
import { Input } from "../componentes/Input";
import { ButtonGroupColors } from "../componentes/ButtonGroupColors";
import { useState } from "react";
import { useRouter } from "expo-router";


const CARD_COLORS = [

{
                      id: "c1",
                      name: "Azul",
                      colorCode: "#3838cd"


                    },

                    {
                      id: "c2",
                      name: "Verde",
                      colorCode: "#15c432"
                    },

                    {
                      id: "c3",
                      name: "Roxo",
                      colorCode: "#3f1072"
                    },

                    {
                      id: "c4",
                      name: "Preto",
                      colorCode: "#000000"
                    }

]

export type Form ={
  fullName: string,
  role: string,
  company?: string,
  experience: number,
  cardColor: string,
  technology: string

}

type Error = {
  fullName?: string,
  role?: string,
  company?: string,
  experience?: string,
  cardColor?: string,
  technology?: string
}

export default function Cadastroscreen()
{ const router = useRouter()
    const [form, setForm] = useState<{data: Form, errors: Error}>({
       data: {
       fullName: "",
       role: "",
       company: "",
       experience: 1,
       cardColor: "",
       technology: ""

       },
       errors: {}

    })

   function handleInputChange (name: keyof Form,text: string){
     setForm((currentForm) => {
         return {
            ...currentForm,
            data: {
                ...currentForm.data,
                [name]: text


            }

          }

      })

      handleInputValidation(name, text)
    }

  function handleSetOrRemoveInputError(name: keyof Error,error?: string){
    setForm((currentForm) => {
         return {
            ...currentForm,
            errors: {
              ...currentForm.errors,
              [name]: error
            }
              

            
                
          }

      })
      
  }

  function handleInputValidation(field: keyof Form, value: string | number) {
    if (!value) return

    switch(field) {
      case "fullName":
        if (value.length === 0) {
        handleSetOrRemoveInputError("fullName", "Informe o nome completo")
      }

    else if (value.length < 3) {
        handleSetOrRemoveInputError("fullName", "Informe pelo menos 3 caracteres")
    }

    else {
        handleSetOrRemoveInputError("fullName")
      }
      break
    
      case "role":
        if (value.length === 0) {
        handleSetOrRemoveInputError("role", "Informe o cargo")
    }

        else if (value.length < 3) {
        handleSetOrRemoveInputError("role", "Informe pelo menos 3 caracteres")
    }

        else {
        handleSetOrRemoveInputError("role")
    }
       break

      case "experience":
       if (Number(value) < 1) {
        handleSetOrRemoveInputError("experience", "Você deve ter pelo menos 1 ano de experiência")
    }

       else {
        handleSetOrRemoveInputError("experience")
    }
       break

      case "cardColor":
       if (value.length === 0) {
        handleSetOrRemoveInputError("cardColor", "Selecione pelo menos 1 cor")
    }

       else {
        handleSetOrRemoveInputError("cardColor")
    }
       break

      case "technology":
      if (value.length === 0) {
      handleSetOrRemoveInputError("technology", "Informe a sua tecnologia favorita")
    }

      else {
      handleSetOrRemoveInputError("technology")
    }
       break

      default:
       break
    }
    
}

  return (
    <SafeAreaView>
     <KeyboardAvoidingView>
       <View style= {styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
                Cadastro
            </Text>  
             <Text style={styles.subtitle}>
                Preencha seus dados de dev
             </Text>  

          </View>

            <View style ={{ height: 700 }}>
                <View style ={{ gap: 12, marginBottom:12 }}>
                     <Input
                         onChangeText={(text) => handleInputChange('fullName',text)}
                          label="Nome completo"
                          placeholder="João Fonseca"
                          errorMessege={form.errors["fullName"]}
                          defaultValue={form.data.fullName}
                      />
                     <Input
                          onChangeText={(text) => handleInputChange('role',text)}
                          label="Cargo"
                          placeholder="Distributed Systems Engineer"
                          errorMessege={form.errors["role"]}
                          defaultValue={form.data.role}
                      />
                     <Input
                         onChangeText={(text) => handleInputChange('company',text)}
                         label="Empresa (opcional)"
                         placeholder="UNIC"
                         errorMessege={form.errors["company"]}
                         defaultValue={form.data.company}
                      />
                     <Input
                         onChangeText={(text) => handleInputChange('experience',parseInt(text))}
                         label="Anos de experiência" 
                         placeholder="4"
                         errorMessege={form.errors["experience"]}
                         defaultValue={form.data.experience}
                      />
                     <Input 
                         onChangeText={(text) => handleInputChange('technology',text)}
                         label="Tecnologia favorita" 
                         placeholder="Erlang"
                         errorMessege={form.errors["technology"]}
                         defaultValue={form.data.technology}
                      />
                </View>
           
                 <ButtonGroupColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={ CARD_COLORS}/>
                 {!!form.errors["cardColor"] && <Text style={styles.formError}>{form.errors["cardColor"]}</Text>}

        </View>
       
          <View style={styles.footerContainer}> 
            <Button
              label="Cadastrar Cartão"
              onPress={() => router.push("/preview")}/>
          </View>
       </View>
     </KeyboardAvoidingView>
    </SafeAreaView>
       
  )
}

const styles = StyleSheet.create({ 
  container: {
    padding: 10
  },

  headerContainer: {
    
  },

  title: {
    fontSize: 30,
    paddingVertical: 1

    
  },

  subtitle: {
    paddingVertical: 10
  
    
  },

  footerContainer: {
    paddingVertical: 10
    
  },

  formError: {
    color: THEME.colors.error,
    fontWeight: "bold"
  },


  
})